type OtherColumns = {
  label: string
  value: number
}

export type MFETFType = {
  scrip: string
  price: number
  secondColumn: OtherColumns[]
  thidColumn: OtherColumns[]
  fourthColumn: OtherColumns[]
  percent_of_portfolio_value: number
  minus: boolean
}

export type ChartValueType = {
  label: string
  value: number
}

export const MFETFData: MFETFType[] = [
  {
    scrip: 'AADR',
    price: 50.3,
    secondColumn: [
      { label: 'Quantity', value: 430 },
      { label: 'Avg Cost', value: 41.75 },
      { label: 'Invested Amt', value: 17952.07 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 21629 },
      { label: '% of Portfolio Value', value: 22.06 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 3676.93 },
      { label: '% Return', value: 20.48 },
    ],
    percent_of_portfolio_value: 22.06,
    minus: false,
  },
  {
    scrip: 'MFEM',
    price: 23.2,
    secondColumn: [
      { label: 'Quantity', value: 210 },
      { label: 'Avg Cost', value: 22.5 },
      { label: 'Invested Amt', value: 4725.84 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 4872 },
      { label: '% of Portfolio Value', value: 5.81 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 146.16 },
      { label: '% Return', value: 3.09 },
    ],
    percent_of_portfolio_value: 5.81,
    minus: false,
  },
  {
    scrip: 'JPEM',
    price: 52.5,
    secondColumn: [
      { label: 'Quantity', value: 328 },
      { label: 'Avg Cost', value: 56.7 },
      { label: 'Invested Amt', value: 18597.6 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 17220 },
      { label: '% of Portfolio Value', value: 22.86 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 1377.6 },
      { label: '% Return', value: 7.41 },
    ],
    percent_of_portfolio_value: 22.86,
    minus: true,
  },
  {
    scrip: 'KEMQ',
    price: 20.4,
    secondColumn: [
      { label: 'Quantity', value: 801 },
      { label: 'Avg Cost', value: 22.24 },
      { label: 'Invested Amt', value: 17811.04 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 16340.4 },
      { label: '% of Portfolio Value', value: 21.89 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 1470.64 },
      { label: '% Return', value: 8.26 },
    ],
    percent_of_portfolio_value: 21.89,
    minus: true,
  },
  {
    scrip: 'KLDW',
    price: 32.9,
    secondColumn: [
      { label: 'Quantity', value: 523 },
      { label: 'Avg Cost', value: 26.32 },
      { label: 'Invested Amt', value: 13765.36 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 17206.7 },
      { label: '% of Portfolio Value', value: 16.92 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 3441.32 },
      { label: '% Return', value: 25.0 },
    ],
    percent_of_portfolio_value: 16.92,
    minus: false,
  },
  {
    scrip: 'KOIN',
    price: 25.4,
    secondColumn: [
      { label: 'Quantity', value: 335 },
      { label: 'Avg Cost', value: 25.4 },
      { label: 'Invested Amt', value: 8509.0 },
    ],
    thidColumn: [
      { label: 'Market Value', value: 8509 },
      { label: '% of Portfolio Value', value: 10.46 },
    ],
    fourthColumn: [
      { label: 'Unrealized P/L', value: 0 },
      { label: '% Return', value: 0.0 },
    ],
    percent_of_portfolio_value: 10.46,
    minus: false,
  },
]

export const ChartValueData: ChartValueType[] = [
  { label: 'Mutual Funds', value: 143.19 },
  { label: 'ETFs', value: 51.72 },
]
