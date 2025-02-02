import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component='footer' sx={{ mt: 'auto', backgroundColor: 'primary.main', p: 2  }}>
      <Typography variant='body2' color='white' align='center'>
      © 2023 MUI Master-Detail App
      </Typography>
    </Box>
  )
}

export default Footer