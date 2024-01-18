import { FC, useEffect } from 'react'

// MUI
import { Box } from '@mui/material'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { RootState } from '../../../reduxStore/reducer'
import { sagaActions } from '../../../reduxStore/actions'

// Apexcharts
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const ChartSection: FC = () => {
  const dispatch = useDispatch()

  const ChartData = useSelector((state: RootState) => state.chart.data)

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_CHART_DATA_SAGA })
  }, [dispatch])

  const series: Array<number> = ChartData.map(item => item.value)
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
    labels: ChartData.map(item => item.label),
  }

  return (
    <Box>
      <Chart type="donut" series={series} options={options} />
    </Box>
  )
}

export default ChartSection
