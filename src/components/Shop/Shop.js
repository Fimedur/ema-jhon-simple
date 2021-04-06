import React from 'react';
import fakeData from '../../fakeData'
import  { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    // console.log(fakeData)
    const first10 = fakeData.slice(0,10);
    const[products, setProducs] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (products) =>{
        //console.log("Add product", products);
        const newCart = [...cart, products];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === products.key)
        const count = sameProduct.length;
        addToDatabaseCart(products.key, count);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map( pd => <Product
                        key={pd.key}  
                        showAddToCart={true}
                        handleAddProduct = {handleAddProduct} 
                        product={pd}
                        ></Product>)
                }    
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;