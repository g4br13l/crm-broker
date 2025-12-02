import { ReactNode } from 'react'
import { AppBreadCrumb } from '../ui/appBreadcrumb'
import { AppHeader } from './appHeader'
import { PageDataT } from './appSidebarPages'



type AppPagePropsT = {
  children: ReactNode
  breadCrumbItems?: PageDataT[]
}

export function AppPage({ children, breadCrumbItems }: AppPagePropsT) {

  return (
    
    <div className="f-col flex-1 gap-4 mx-8 mb-8">

      <AppHeader>
        {breadCrumbItems && breadCrumbItems?.length > 0 && (
          <AppBreadCrumb items={breadCrumbItems} />
        )}
      </AppHeader>
  
      {children}

    </div>

  )
}
