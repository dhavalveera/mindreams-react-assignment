import { FC } from 'react'

// MUI
import { Box, Container, Typography } from '@mui/material'

const Navbar: FC = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography variant="h5" component="h5" sx={{ py: 2, fontWeight: 700, textDecorationLine: 'underline' }}>
          Mindreams React Assignment
        </Typography>
      </Container>
    </Box>
  )
}

export default Navbar
