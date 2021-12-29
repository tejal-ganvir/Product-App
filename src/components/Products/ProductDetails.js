import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../redux/products/productActions';
import {Container, Box, Divider, Rating} from '@mui/material';
import Loader from '../UI/Loader';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

/**
* @author
* @function ProductDetails
**/

const ProductDetails = (props) => {

  const {details ,productLoading, error} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails(id))
  },[id])

  return(
    <Container>
      {
        productLoading ? <Loader /> :
        details ? (
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1, }}
          >
            <Card sx={{ maxWidth: 600, padding: 2 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500], display: 'none' }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </>
                }
                style={{textTranform:'uppercase'}}
                title={<b>{details.title}</b>}
                subheader={<p style={{ margin: 0, textTransform: 'capitalize' }}>{details.category}</p>}
              />
              <CardMedia
                component="img"
                className="product-details-image"
                // height="254"
                // width="100%"
                image={details.image}
                alt={details.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {details.description}
                </Typography>
                <p style={{color: 'rgb(250, 41, 41)', fontSize: '22px', fontWeight: '700'}}>${details.price} 
                  <Button sx={{float:'right'}} variant="contained" size="small">
                    Buy Now
                  </Button>
                </p>
              </CardContent>
              <Divider />
              <Box pt={2}>
                <Rating name="read-only" value={details.rating && details.rating.rate} readOnly size="small" />
                <span style={{float:'right'}}>{details.rating && details.rating.count}</span>
              </Box>
            </Card>
          </Box>
        )
        :
        JSON.stringify(error)
      }
    </Container>
   )

 }

const mapStateToProps = state => {
  const {details ,productLoading, error } = state.Product;
  return { details ,productLoading, error};
};

export default connect(mapStateToProps,null)(ProductDetails);