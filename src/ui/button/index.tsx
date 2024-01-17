import { Button, styled } from '@mui/material'

export const BuyButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  width: 'fit-width',
  height: theme.typography.pxToRem(25),
  color: 'green',
  padding: theme.typography.pxToRem(10),
  border: `${theme.typography.pxToRem(1)} solid #D3D3D3`,
}))

export const SellButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  width: 'fit-width',
  height: theme.typography.pxToRem(25),
  color: 'red',
  padding: theme.typography.pxToRem(10),
  border: `${theme.typography.pxToRem(1)} solid #D3D3D3`,
}))
