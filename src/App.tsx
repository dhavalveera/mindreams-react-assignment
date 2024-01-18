import { FC, useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// MUI
import { Box, Container, Grid } from '@mui/material'

// App Components
import DataTableSection from './components/home/table-data'
import ChartSection from './components/home/chart'
import { RootState } from './reduxStore/reducer'
import { sagaActions } from './reduxStore/actions'

const App: FC = () => {
  const dispatch = useDispatch()

  const data = useSelector((state: RootState) => state.mfETF.data)

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA })
  }, [dispatch])

  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center" spacing={8}>
          <Grid item xs={12} sm={12} md={9}>
            <DataTableSection MFETFData={data} />
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
