import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default Product;