import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Box >
      <AppBar position='relative'
  elevation={0} 
  sx={{ 
    backgroundColor: 'black', 
    boxShadow: 0,
    width: '100%',
    zIndex: 1
  }}>
        <Toolbar>
          <img width={'70px'} src="https://i.pinimg.com/474x/d2/a4/7b/d2a47bc6021db28067a973c9901d2b65.jpg" alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-decoration-none text-white' >FUTUREVISION</Link>
          </Typography>
          <a href="#home" className='text-decoration-none text-white me-3'>HOME</a>
          <a href="#about" className='text-decoration-none text-white me-3'>ABOUT</a>
          <a href="#services" className='text-decoration-none text-white me-3'>SERVICES</a>
          <a href="#project-1" className='text-decoration-none text-white me-3'>PROJECTS</a>
          <a href="#contact" className='text-decoration-none text-white me-3'>CONTACT</a>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header