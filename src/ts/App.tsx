import * as React from 'react'
import {StandardProps} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {
  Theme,
  createStyles,
  withStyles
} from '@material-ui/core/styles'

const muiStyles = (theme: Theme) => createStyles({
  title: {
    backgroundColor: theme.palette.primary.light,
  }
})

interface AppBaseProps {
  classes: {
    title: string,
  }
}

const AppBase = ({classes}: AppBaseProps) => (
  <Typography variant={'h1'} className={classes.title}>
    Material-UI Works!
  </Typography>
)

export default withStyles(muiStyles)(AppBase)
