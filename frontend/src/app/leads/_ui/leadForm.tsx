'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../../../components/base/button'
import { Field, FieldGroup } from '../../../components/base/field'
import { InputField } from '../../../components/ui/fields/inputField'
import SelectField from '../../../components/ui/fields/selectField'
import { TextAreaField } from '../../../components/ui/fields/textAreaField'
import { inputMask } from '../../../shared/utils/inputMask'
import { LeadFormInputT, LeadT, leadData } from '../_data/leadData'



export default function LeadForm() {

  const { leadFormSchema, leadOriginOptions } = leadData()

  console.log('(LeadForm)')
  const leadForm = useForm<LeadFormInputT>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      id: 0,
      name: '',
      phone: '',
      email: '',
      origin: '',
      interestedIn: '',
      notes: '',
    },
  })

  function onSubmit(data: LeadFormInputT) {
    const transformedData = leadFormSchema.parse(data) as LeadT
    console.log('onSubmit:', transformedData)
  }

  function onError(errors: unknown) {
    console.log('Form validation errors:', errors)
  }


  return (

    <form id="lead-form" onSubmit={leadForm.handleSubmit(onSubmit, onError)}>

      <FieldGroup>
          
        <InputField
          control={leadForm.control}
          name="name"
          label="Nome"
        />

        <InputField
          control={leadForm.control}
          name="phone"
          label="Cel"
          type="tel"
          maskFn={inputMask().phone}
        />

        <InputField
          control={leadForm.control}
          name="email"
          label="Email"
          type="email"
        />

        <InputField
          control={leadForm.control}
          name="interestedIn"
          label="Imóvel de interesse"
        />

        <SelectField
          control={leadForm.control}
          name="origin"
          label="Origem"
          options={leadOriginOptions}
        />

        <TextAreaField
          control={leadForm.control}
          name="notes"
          label="Observações"
        />


        <Field orientation="horizontal">
          <Button type="submit" form="lead-form">
              Criar lead
          </Button>
          <Button type="button" variant="outline" onClick={() => leadForm.reset()}>
              Limpar
          </Button>
        </Field>

      </FieldGroup>


    </form>

  )
}
