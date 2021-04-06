import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewProduct from '../ReviewProduct/ReviewProduct';
const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        //Cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProduct = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
        });
       
        setCart(cartProduct);
        //console.log(cartProduct);
        console.log(cart);
    }, [])
    return (
        <div>
            <h1>This is review{cart.length}</h1>
           {
               cart.map(pd => <ReviewProduct product={pd}></ReviewProduct>)
           } 
            
            
        </div>
    );
};

export default Review;