import React from 'react'
import Footer from './Footer';
import Header from './Header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
        <Header />
            {props.children}
        <Footer />
    </React.Fragment>
   )

 }

 export default Layout;