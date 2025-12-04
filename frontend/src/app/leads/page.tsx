import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarPages } from '../../components/layout/appSidebarPages'
import LeadForm from './_ui/leadForm'



export default function Page() {

  console.log('(LeadsPage)')
  const breadCrumb: PageDataT[] = [sidebarPages().getByPath('/leads')]


  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <LeadForm />
      
    </AppPage>


  )
}
