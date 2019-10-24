import * as React from 'react'
import Typography, {TypographyProps} from '@material-ui/core/Typography'
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'

const styles = {
  marginBottom: '1rem',
  backgroundColor: '#FFAAAA',
  '&:last-child': {
    marginBottom: 0,
    backgroundColor: '#CCCCFF',
  },
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  para: {
    ...styles,
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

// with MUI
export const ParaMui = ({children, className, ...other}: TypographyProps) => {
  const classes = useStyles()
  return (
    <Typography paragraph className={`${className} ${classes.para}`} {...other}>
      {children}
    </Typography>
  )
}
