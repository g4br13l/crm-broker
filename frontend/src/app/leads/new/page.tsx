import { AppPage } from '../../../components/layout/appPage'
import { PageDataT, sidebarItems } from '../../../components/layout/appSidebarItems'
import LeadForm from '../_ui/leadForm'



export default function LeadsNewPage() {

  console.log('(LeadsPage)')
  const breadCrumb: PageDataT[] = [
    sidebarItems().getByPath('/leads'),
    { path: '/new', title: 'Novo Lead' },
  ]

  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <LeadForm />

    </AppPage>

  )
}
