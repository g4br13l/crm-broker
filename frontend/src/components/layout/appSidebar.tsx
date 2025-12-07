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
  SidebarTrigger,
  useSidebar,
} from '@/components/base/sidebar'


import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/base/tooltip'
import { Logo } from '../base/logo'
import { ThemeButton } from '../base/themeButton'
import { UserNavButton } from '../ui/userNavButton'
import { sidebarItems } from './appSidebarItems'
import { cn } from '../../shared/utils/shadcnUtils'



export function AppSidebar() {

  const { open } = useSidebar()
  const items = sidebarItems().all

  return (
    
    <Sidebar variant="sidebar" collapsible="icon">
      
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="f-row-center justify-between">
            
            <div className="flex flex-row items-center gap-2">
              <Logo />
              {open && (<h3>CRM Broker</h3>)}
            </div>

            <SidebarTrigger
              className={cn(
                'hidden md:flex',
                !open && 'md:-mr-9 bg-sidebar! rounded-l-none border-l-0 border-sidebar-border/50!',
              )}
              variant="outline"
              /* size="icon" */
            />

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-extralight">
            gestão de atendimentos
          </SidebarGroupLabel>
          <SidebarMenu>
            
            {items.map((item) => (
              
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.path}>
                    {open ? (<item.icon strokeWidth={2.6} />) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <item.icon className="size-5!" />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <span className="text-sm">{item.title}</span>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    <span className="text-base">{item.title}</span>
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
            avatar: 'https://github.com/shadcn.png',
          }}
        />
      </SidebarFooter>

    </Sidebar>

  )
}
