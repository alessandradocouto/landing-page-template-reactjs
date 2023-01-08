import { Link } from '@mui/material'
import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href="#"
    variant='p'
    component='a'
    sx={{
      fontSize: '0.9rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#414141',
      textTransform: 'capitalize',
      "&:hover": {
        color: '#1c2859',
      }
    }}
    >
      {text}
    </Link>
  )
}

export default FooterLink