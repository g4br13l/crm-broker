'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme as useNextTheme } from 'next-themes'



export type ThemeT = 'light' | 'dark'

type AppThemeProviderPropsT = {
  children: React.ReactNode
} & Omit<ThemeProviderProps, 'storageKey'| 'attribute' | 'enableSystem' | 'themes'>


export function AppThemeProvider({ children, ...props }: AppThemeProviderPropsT) {
  return (
    <NextThemesProvider
      storageKey="crmBrokerTheme"
      attribute="class"
      enableSystem
      themes={['light', 'dark']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

/**
 * Typed wrapper for useTheme hook that returns ThemeT instead of string
 */
export function useAppTheme() {
  const { theme, setTheme, resolvedTheme, ...rest } = useNextTheme()
  
  return {
    ...rest,
    theme: theme as ThemeT | undefined,
    resolvedTheme: resolvedTheme as ThemeT | undefined,
    setTheme: setTheme as React.Dispatch<React.SetStateAction<ThemeT>>,
  }
}

