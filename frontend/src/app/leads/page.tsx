import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarItems } from '../../components/layout/appSidebarItems'
import LeadForm from './_ui/leadForm'



export default function Page() {

  console.log('(LeadsPage)')
  const breadCrumb: PageDataT[] = [
    sidebarItems().getByPath('/leads')
  ]


  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <LeadForm />
      
    </AppPage>


  )
}
