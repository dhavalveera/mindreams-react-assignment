import { FC } from 'react'

// MUI
import { Box } from '@mui/material'

// Apexcharts
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const ChartSection: FC = () => {
  const series: Array<number> = [200, 50]
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
    labels: ['Mutual Funds', 'ETFs'],
  }

  return (
    <Box>
      <Chart type="donut" series={series} options={options} />
    </Box>
  )
}

export default ChartSection
