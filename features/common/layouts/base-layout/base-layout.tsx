import React from 'react'
import { Box, styled } from '@mui/material'
import { Footer } from '../../components'

export default function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Box component='main'>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

const Container = styled(Box)(({ theme }) => ({
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'space-between', 
  height: '100vh',
  // height: 60, 
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  // color: theme.palette.text.primary,
  // borderTop: `1px solid ${theme.palette.divider}`
  '& main': {
    flex: '1 1 auto'
  }
}))