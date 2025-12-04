'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/base/sidebar'


import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/base/tooltip'
import { Logo } from '../base/logo'
import { ThemeButton } from '../base/themeButton'
import { UserNavButton } from '../ui/userNavButton'
import { sidebarItems } from './appSidebarItems'



export function AppSidebar() {

  const { open } = useSidebar()
  const items = sidebarItems().all

  return (
    
    <Sidebar variant="sidebar" collapsible="icon">
      
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            
            <div className="flex flex-row items-center gap-2">
              <Logo />
              {open && (<h3>CRM Broker</h3>)}
            </div>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>gestão de atendimentos</SidebarGroupLabel>
          <SidebarMenu>
            
            {items.map((item) => (
              
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.path}>
                    {open ? (<item.icon />) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <item.icon className="size-5!" />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <span>{item.title}</span>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

            ))}

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-row justify-end">
          <ThemeButton />
        </div>
        <UserNavButton
          user={{
            name: 'Gabriel Lima',
            email: 'gabriel@email.com',
            avatar: 'https://github.com/shadcn.png'
          }}
        />
      </SidebarFooter>

    </Sidebar>

  )
}
