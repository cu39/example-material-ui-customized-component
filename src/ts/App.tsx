import * as React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import {ParaMui, ParaStyled} from './Para'

const muiStyles = (theme: Theme) => createStyles({
  container: {
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  paramui: {
    backgroundColor: 'yellow',
  },
})

const useStyles = makeStyles(muiStyles)

const App = () => {
  const classes = useStyles()

  return(<>
    <Container className={classes.container}>
    <Typography variant='h5' component='h2'>ParaMui</Typography>
      <ParaMui className={classes.paramui}>Mui!</ParaMui>
      <ParaMui>Mui!</ParaMui>
      <ParaMui>Mui!</ParaMui>
    </Container>

    <Container className={classes.container}>
    <Typography variant='h5' component='h2'>ParaStyled</Typography>
      <ParaStyled>Styled!</ParaStyled>
      <ParaStyled>Styled!</ParaStyled>
      <ParaStyled>Styled!</ParaStyled>
    </Container>
  </>)
}

export default App
