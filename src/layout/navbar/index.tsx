import { FC } from 'react'

// MUI
import { Box, Container, Typography } from '@mui/material'

const Navbar: FC = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography sx={{ py: 2 }}>Mindreams React Assignment</Typography>
      </Container>
    </Box>
  )
}

export default Navbar
