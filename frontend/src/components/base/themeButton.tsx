'use client'

import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/base/button'
import { useSidebar } from '@/components/base/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/base/tooltip'
import { useAppTheme } from '@/shared/react/providers/appThemeProvider'



export function ThemeButton() {

  const { theme, setTheme } = useAppTheme()
  const [compMounted, setCompMounted] = React.useState(false)
  const { open: isSidebarOpen } = useSidebar()
  const isDark = theme === 'dark'

  // Avoid hydration mismatch
  React.useEffect(() => { setCompMounted(true) }, [])

  if (!compMounted) return (
    <Button variant="ghost" size="icon" className="size-9" aria-label="Toggle theme" disabled />
  )

  const button = (
    <Button
      variant="outline"
      size="icon"
      className="size-9"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 transition-all" />
      ) : (
        <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 dark:rotate-90 scale-100 transition-all" />
      )}
    </Button>
  )

  if (isSidebarOpen) return button

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {button}
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</p>
      </TooltipContent>
    </Tooltip>
  )
}

