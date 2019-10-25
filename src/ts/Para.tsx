import * as React from 'react'
import Typography, {TypographyProps} from '@material-ui/core/Typography'
import {
  MuiThemeProvider,
  Theme,
  createMuiTheme,
  createStyles,
  makeStyles,
  styled,
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

// with styled-components API
const ParaStyledBase = ({children, ...other}: TypographyProps) => (
  <Typography {...other}>{children}</Typography>
)

export const ParaStyled = styled(ParaStyledBase)(styles)

// with child theme
const childTheme = createMuiTheme({
  props: {
    MuiTypography: {
      paragraph: true,
    },
  },
})

export const ParaTheme = ({children, ...other}: TypographyProps) => (
  <MuiThemeProvider theme={childTheme}>
    <Typography {...other}>{children}</Typography>
  </MuiThemeProvider>
)
