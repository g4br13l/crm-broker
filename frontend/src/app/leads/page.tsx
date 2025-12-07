import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarItems } from '../../components/layout/appSidebarItems'
import LeadsTable from './_ui/leadsTable'



export default function Page() {

  console.log('(LeadsPage)')
  const breadCrumb: PageDataT[] = [
    sidebarItems().getByPath('/leads'),
  ]


  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <LeadsTable />
      
    </AppPage>


  )
}
