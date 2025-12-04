'use client'

import { useForm } from 'react-hook-form'
import { Field, FieldGroup } from '../../../components/base/field'
import { InputField } from '../../../components/ui/fields/inputField'
import { leadOriginOptions, leadOriginOptionsKeys } from '../../../shared/constants/leadOriginOptions'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { inputMask } from '../../../shared/utils/inputMask'
import { Button } from '../../../components/base/button'
import SelectField from '../../../components/ui/fields/selectField'
import { TextAreaField } from '../../../components/ui/fields/textAreaField'
import { zEmpty } from '../../../shared/utils/zodExtensions'



const leadFormSchema = z.object({
  name: z.string().min(3).max(100),
  phone: z.string().min(12).max(14),
  email: z.email().optional().or(zEmpty),
  origin: z.enum(leadOriginOptionsKeys).optional().or(zEmpty),
  interestedIn: z.string().min(2).max(50).optional().or(zEmpty),
  notes: z.string().max(1_000).optional().or(zEmpty)
})

type LeadFormSchemaT = z.infer<typeof leadFormSchema>



export default function LeadForm() {

  console.log('(LeadForm)')
  const leadForm = useForm<LeadFormSchemaT>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      origin: '',
      interestedIn: '',
      notes: ''
    }
  })

  function onSubmit(data: LeadFormSchemaT) {
    // Handle form submission
    console.log('onSubmit:', data)
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
          maskFn={inputMask().phone}
        />

        <InputField
          control={leadForm.control}
          name="email"
          label="Email"
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
