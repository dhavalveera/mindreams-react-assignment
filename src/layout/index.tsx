import { FC, PropsWithChildren } from 'react'

// MUI
import { Box } from '@mui/material'

// Navbar
import Navbar from './navbar'

const Layout: FC<PropsWithChildren> = props => {
  const { children } = props

  return (
    <Box>
      <Navbar />

      {children}
    </Box>
  )
}

export default Layout
