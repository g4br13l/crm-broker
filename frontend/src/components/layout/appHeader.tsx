import { ReactNode } from 'react'
import { Separator } from '../base/separator'
import { SidebarTrigger } from '../base/sidebar'



type AppHeaderPropsT = {
  children?: ReactNode
}

export function AppHeader({ children }: AppHeaderPropsT) {

  return (

    <header className="flex items-center gap-2 h-16 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 transition-[width,height] ease-linear shrink-0">

      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden -ml-1" variant="ghost" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {children}
      </div>
      
    </header>

  )
}
