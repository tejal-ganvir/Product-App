import { Box } from '@mui/system';
import React from 'react';
import styles from './style.module.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

/**
* @author
* @function ProductCard
**/

const ProductCard = (props) => {
  return(
      <React.Fragment>
        <div className={styles.product_card_container}>
            <div className={styles.product_card_head}>
                <Link to={`/product/${props.id}`}>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: '100%',
                        }}
                        alt={props.title}
                        src={props.image}
                    />
                </Link>
                <h5>{props.category}</h5>
                <Link to={`/product/${props.id}`}><h4>{props.title}</h4></Link>
                <p>${props.price}</p>
            </div>
                
            <div className={styles.product_card_foot}>
                <Rating name="read-only" value={props.rating.rate} readOnly size="small" />
                <span className={styles.product_card_count}>{props.rating.count}</span>
            </div>
        </div>
      </React.Fragment>
   )

 }

export default ProductCard;