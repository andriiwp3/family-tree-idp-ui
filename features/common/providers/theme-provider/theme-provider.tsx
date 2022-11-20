import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

export default function ThemeProvider({ children }: React.PropsWithChildren) {
    const theme = createTheme({
        palette: {
            background: {
                default: '#22223b'
            },
            text: {
                primary: '#f2e9e4'
            },
            action: {
                active: '#d4a373',
            }
        }
    })

  return (
    <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
  )
}
