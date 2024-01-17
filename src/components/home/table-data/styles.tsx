import { LinearProgress, Typography, linearProgressClasses, styled } from '@mui/material'

export const PriceText = styled(Typography)(({ theme }) => ({
  color: '#0000ff',
  margin: `${theme.typography.pxToRem(10)} 0 0 0`,
  padding: 0,

  fontSize: theme.typography.pxToRem(30),

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(20),
  },
}))

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))
