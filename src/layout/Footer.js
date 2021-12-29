import React from 'react'
import {AppBar, Container, Toolbar, Typography} from '@mui/material';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <AppBar position="static" color="primary">
        <Container maxWidth="md">
            <Toolbar style={{display: 'block', textAlign: "center"}}>
                <Typography pt={2.5}>
                    © {new Date().getFullYear()} Pesto Tech
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
   )

 }

 export default Footer