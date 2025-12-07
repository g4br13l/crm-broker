import { ReactNode } from 'react'
import { SidebarProvider } from '../../../components/base/sidebar'
import { cookies } from 'next/headers'



type AppSidebarProviderPropsT = {
  children: ReactNode
}


export async function AppSidebarProvider({ children }: AppSidebarProviderPropsT) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
  
    <SidebarProvider defaultOpen={defaultOpen}>
      {children}
    </SidebarProvider>

  )
}
