import { FC } from 'react'

// MUI
import { Box, Container, Grid } from '@mui/material'

// App Components
import DataTableSection from './components/home/table-data'
import ChartSection from './components/home/chart'

const App: FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center" spacing={8}>
          <Grid item xs={12} sm={12} md={9}>
            <DataTableSection />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <ChartSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
