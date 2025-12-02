import { AppPage } from '../../components/layout/appPage'
import { PageDataT, sidebarPages } from '../../components/layout/appSidebarPages'



export default function DashboardPage() {

  const breadCrumb: PageDataT[] = [
    sidebarPages().getByPath('/dashboard'),
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
