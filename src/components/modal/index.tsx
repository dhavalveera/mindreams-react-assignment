import { FC, ReactElement, Ref, forwardRef } from 'react'

// MUI
import { Button, Dialog, DialogContent, DialogContentText, Slide, Typography, useMediaQuery, useTheme } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

type BuySellModalProps = {
  openModal: boolean
  onClose: () => void
  btnSelected: string
  data: string
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<string, string>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const BuySellModal: FC<BuySellModalProps> = props => {
  const { btnSelected, data, onClose, openModal } = props

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      aria-describedby="but-sell-dialog-modal"
      fullScreen={fullScreen}
      transitionDuration={1500}
      fullWidth
      maxWidth="md"
      onClose={onClose}
      keepMounted
    >
      <DialogContent sx={{ textAlign: 'center' }}>
        <DialogContentText>
          {btnSelected === 'buy' ? 'You want to Buy?' : 'You want to Sell?'}

          <Typography sx={{ my: 5, fontWeight: 600, mb: 0 }}>{data}</Typography>
        </DialogContentText>

        <Button variant="outlined" color={btnSelected === 'buy' ? 'success' : 'error'} onClick={onClose} type="button" sx={{ mt: 5 }}>
          OK
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default BuySellModal
