import * as React from 'react'
import Typography, {TypographyProps} from '@material-ui/core/Typography'

const Heading = ({children, ...other}: TypographyProps) => (
  <Typography variant='h5' component='h2' {...other}>
    {children}
  </Typography>
)

export default Heading
