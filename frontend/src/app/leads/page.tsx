import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarItems } from '../../components/layout/appSidebarItems'
import { LeadsResultCards } from './_ui/leadsResultCards'
import LeadsTable from './_ui/leadsTable'



export default function Page() {

  console.log('(LeadsPage)')
  const breadCrumb: PageDataT[] = [
    sidebarItems().getByPath('/leads'),
  ]


  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <LeadsResultCards />

      <LeadsTable />
      
    </AppPage>


  )
}
