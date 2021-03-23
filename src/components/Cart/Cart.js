import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);
    let shipping = 0;
    if(totalPrice>35){
        shipping =0;
    }
    else if(totalPrice>15 ){
        shipping = 4.99
    }
    else if(totalPrice>0)
    {
        shipping =12.99
    }
    const tax = (totalPrice*.15);
    const GT = totalPrice + shipping +tax;
    return (
        <div>       
            <h3>Order Summary</h3>
            <p>Item Orderd:   {cart.length}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax + VAT:     {tax}</p>
            <p>Tolat Pric:    {totalPrice}</p>
            <hr/>
            <p>Grand Total:   {GT}</p>
        </div>
    );
};

export default Cart;