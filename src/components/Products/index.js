import React, { useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productActions';
import Loader from '../UI/Loader';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from '../UI/ProductCard';

/**
* @author
* @function Products
**/

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Products = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchProducts(props.page, props.data));

  },[dispatch])

  return(
    <Container>
      {
        props.loading ? <Loader /> :
        props.data && (props.data.length > 0) ?

        <Grid container py={3} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
          {props.data.map((item, idx) => (
            <Grid item xs={1} sm={2} md={3} key={item.id}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
        : <Typography >No Products Avialable</Typography>
      }
    </Container>
   )

 }

 const mapStateToProps = state => {
  const { data, page, hasMore, loading, error } = state.Product;
  return { data, page, hasMore, loading, error };
};

export default connect(mapStateToProps,null)(Products);