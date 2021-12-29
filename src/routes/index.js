import React from 'react';
import Layout from '../layout';
import { Box } from '@mui/system';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Products from '../components/Products';
import ProductDetails from '../components/Products/ProductDetails';
import Cart from '../components/Products/Cart';

/**
* @author
* @function Routes
**/

const ImpRoutes = (props) => {
  return(
        <Layout>
            <Box minHeight="80vh">
                <Routes>
                    <Route path="/" exact element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/product/cart" exact element={<Cart />} />
                </Routes>
            </Box>
        </Layout>
   )

 }

 export default ImpRoutes;