import * as React from 'react'
import Container from '@material-ui/core/Container'
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import {ParaMui, ParaStyled, ParaTheme} from './Para'
import Heading from './Heading'

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
      <Heading>Child Theme</Heading>
      <ParaTheme>Child Theme!</ParaTheme>
      <ParaTheme className={classes.paramui}>Child Theme!</ParaTheme>
      <ParaTheme>Child Theme!</ParaTheme>
    </Container>

    <Container className={classes.container}>
      <Heading>ParaMui</Heading>
      <ParaMui>Mui!</ParaMui>
      <ParaMui className={classes.paramui}>Mui!</ParaMui>
      <ParaMui>Mui!</ParaMui>
    </Container>

    <Container className={classes.container}>
      <Heading>ParaStyled</Heading>
      <ParaStyled>Styled!</ParaStyled>
      <ParaStyled className={classes.paramui}>Styled!</ParaStyled>
      <ParaStyled>Styled!</ParaStyled>
    </Container>
  </>)
}

export default App
