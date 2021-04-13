import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import Cart from '../Cart/Cart';
import './Review.css';
const Review = () => {
    const [cart, setCart] = useState([])

    const romoveProduct = (productKey) =>{
        console.log('romove click',productKey );
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
    }
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
        //console.log(cart);
    }, [])
    
     
    return (
        <div className="R-container">
            <div className="product-container">
                <h1>This is review{cart.length}</h1>
                {
                    cart.map(pd => <ReviewProduct romoveProduct={romoveProduct} product={pd}></ReviewProduct>)
                }
            </div>
            <div cclassName="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
       
    );
};

export default Review;