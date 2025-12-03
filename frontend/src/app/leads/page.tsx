'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../../components/base/button'
import { Field, FieldGroup } from '../../components/base/field'
import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarPages } from '../../components/layout/appSidebarPages'
import { InputField } from '../../components/ui/fields/inputField'
import { TextAreaField } from '../../components/ui/fields/textAreaField'
import { inputMask } from '../../shared/utils/inputMask'



const leadFormSchema = z.object({
  name: z.string().min(3).max(100),
  phone: z.string().min(12).max(14),
  email: z.email().optional(),
  origin: z
    .enum(['Instagram', 'Facebook', 'Web Site', 'Indicação', 'Meta Ads', 'PDV', 'outro'])
    .optional(),
  interestedIn: z.string().min(2).max(50).optional(),
  notes: z.string().max(1_000).optional()
})
type LeadFormSchemaT = z.infer<typeof leadFormSchema>


export default function Page() {

  const breadCrumb: PageDataT[] = [sidebarPages().getByPath('/leads')]

  const leadForm = useForm<LeadFormSchemaT>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      origin: undefined,
      interestedIn: '',
      notes: ''
    }
  })

  function onSubmit(data: LeadFormSchemaT) {
    // Handle form submission
    console.log('onSubmit:', data)
    
    return
  }


  return (

    <AppPage breadCrumbItems={breadCrumb}>

      
      <form id="lead-form" onSubmit={leadForm.handleSubmit(onSubmit)}>
        
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


    </AppPage>


  )
}
