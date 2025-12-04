import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarItems } from '../../components/layout/appSidebarItems'



export default function DashboardPage() {

  const breadCrumb: PageDataT[] = [
    sidebarItems().getByPath('/dashboard'),
    { title: 'testa', path: '/test' }
  ]  

  return (

    <AppPage breadCrumbItems={breadCrumb}>

      <div>
        <h1>DashboardPage</h1>
      </div>

    </AppPage>


  )
}
