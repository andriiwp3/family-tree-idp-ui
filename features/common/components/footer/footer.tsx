import { Box, styled } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Container component='footer'>
      <a
      href="https://github.com/andriiwp3"
      target="_blank"
      rel="noopener noreferrer"
      >
        Powered by Andrii Herchykov
      </a>
    </Container>
  )
}

const Container = styled(Box)(({ theme }) => ({
  height: 60, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  borderTop: `1px solid ${theme.palette.divider}`
}))