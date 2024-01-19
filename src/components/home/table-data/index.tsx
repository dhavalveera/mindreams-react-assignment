import { FC, Fragment, useEffect, useState } from 'react'

// MUI
import { Box, Divider, Grid, Stack } from '@mui/material'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Modal
import BuySellModal from '../../modal'

// Redux
import { RootState } from '../../../reduxStore/reducer'
import { sagaActions } from '../../../reduxStore/actions'

// UI
import { BuyButton, SellButton } from '../../../ui/button'
import { BorderLinearProgress, PriceText } from './styles'

const DataTableSection: FC = () => {
  const dispatch = useDispatch()

  const MFETFData = useSelector((state: RootState) => state.mfETF.data)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedBtn, setSelectedBtn] = useState<string>('')

  const handleCloseModal = () => setOpenModal(!openModal)

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA })
  }, [dispatch])

  return (
    <Box>
      {MFETFData.map((data, index) => {
        return (
          <Fragment key={index}>
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ md: 8, xs: 4 }}>
              <Grid item xs={12} sm={4} md={2}>
                <Box>
                  {data?.scrip}

                  <PriceText variant="body2" variantMapping={{ body2: 'p' }}>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(data.price)}
                  </PriceText>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                {data?.secondColumn.map((secondData, indexTwo) => {
                  return (
                    <Fragment key={indexTwo}>
                      <Stack direction="row" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Box>{secondData?.label}</Box>

                        <Box>
                          {secondData?.label === 'Avg Cost' || secondData?.label === 'Invested Amt' ? (
                            <>
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(secondData?.value)}
                            </>
                          ) : (
                            secondData?.value
                          )}
                        </Box>
                      </Stack>
                    </Fragment>
                  )
                })}

                <Box sx={{ width: '100%', mt: 2 }}>
                  <BorderLinearProgress variant="determinate" value={data?.percent_of_portfolio_value} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                {data?.thidColumn.map((thirdData, indexThird) => {
                  return (
                    <Fragment key={indexThird}>
                      <Stack direction="row" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Box>{thirdData?.label}</Box>

                        <Box>
                          {thirdData?.label === 'Market Value' ? (
                            <>
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(thirdData?.value)}
                            </>
                          ) : (
                            <>{thirdData?.value}%</>
                          )}
                        </Box>
                      </Stack>
                    </Fragment>
                  )
                })}

                {data?.thidColumn
                  .filter(lab => lab.label !== 'Market Value')
                  .map((thirdFilterData, indexFilterThird) => {
                    return (
                      <Fragment key={indexFilterThird}>
                        <Box sx={{ width: '100%', mt: 2 }}>
                          <BorderLinearProgress variant="determinate" value={thirdFilterData.value} />
                        </Box>
                      </Fragment>
                    )
                  })}
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                {data?.fourthColumn.map((fourthData, indexFour) => {
                  return (
                    <Fragment key={indexFour}>
                      <Stack direction="row" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Box>{fourthData?.label}</Box>

                        <Box>
                          {fourthData?.label === 'Unrealized P/L' ? (
                            <>
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(fourthData?.value)}
                            </>
                          ) : (
                            <span>
                              <Box component="span" sx={{ color: '#FF0000' }}>
                                {data?.minus ? '-' : null}
                              </Box>
                              <Box component="span" sx={{ color: '#00FF00' }}>
                                {data?.minus === false ? '+' : null}
                              </Box>{' '}
                              {fourthData?.value}%
                            </span>
                          )}
                        </Box>
                      </Stack>
                    </Fragment>
                  )
                })}
              </Grid>

              <Grid item xs={12} sm={4} md={1}>
                <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'row' }, gap: { md: 2, xs: 5 } }}>
                  <BuyButton
                    onClick={() => {
                      setSelectedBtn('buy')
                      setOpenModal(true)
                    }}
                  >
                    Buy
                  </BuyButton>

                  <SellButton
                    onClick={() => {
                      setSelectedBtn('sell')
                      setOpenModal(true)
                    }}
                  >
                    Sell
                  </SellButton>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: { md: 1.5, xs: 3 } }} />
          </Fragment>
        )
      })}

      <BuySellModal btnSelected={selectedBtn} onClose={handleCloseModal} openModal={openModal} />
    </Box>
  )
}

export default DataTableSection
