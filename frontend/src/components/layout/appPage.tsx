import { ReactNode } from 'react'
import { AppBreadCrumb } from '../ui/appBreadcrumb'
import { AppHeader } from './appHeader'
import { PageDataT } from './appSidebarItems'



type AppPagePropsT = {
  children: ReactNode
  breadCrumbItems?: PageDataT[]
}

export function AppPage({ children, breadCrumbItems }: AppPagePropsT) {

  return (
    
    <div className="f-col flex-1 gap-4 mx-8 mb-8">
      {/* <div className="f-col flex-1 gap-4 mx-8 mb-8 min-w-0 overflow-x-hidden"> */}

      <AppHeader>
        {breadCrumbItems && breadCrumbItems?.length > 0 && (
          <AppBreadCrumb items={breadCrumbItems} />
        )}
      </AppHeader>
  
      {children}

    </div>

  )
}
