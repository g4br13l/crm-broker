import { Funnel, LayoutDashboard, LucideProps, MessageSquare, Users, UsersRound } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'



export function sidebarItems() {

  const all = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Funil',
      path: '/funnel',
      icon: Funnel,
    },
    {
      title: 'Leads',
      path: '/leads',
      icon: UsersRound,
    },
    {
      title: 'Clientes',
      path: '/clients',
      icon: Users,
    },
    {
      title: 'WhatsApp',
      path: '/whatsapp',
      icon: MessageSquare,
    },
    /* {
      title: 'Agenda',
      url: '/agenda',
      icon: Calendar,
    }, */
    /* {
      title: 'Estandes',
      url: '/stands',
      icon: MapPinHouse,
    }, */
    /* {
      title: 'Configurações',
      url: '/settings',
      icon: Settings,
    }, */
  ] as const

  
  function getByPath(path: SidebarPagesPathT) {
    return all.find((sidebarPage) => sidebarPage.path === path) as SidebarPageT
  }

  return { all, getByPath }
}


export type SidebarPagesT = Pick<ReturnType<typeof sidebarItems>, 'all'>['all']
export type SidebarPageT = SidebarPagesT[number]
export type SidebarPagesPathT = SidebarPageT['path']

export type PageDataT = {
  title: string
  path: string
  icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
}

