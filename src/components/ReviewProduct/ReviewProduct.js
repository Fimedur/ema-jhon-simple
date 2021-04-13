import React from 'react';

const ReviewProduct = (props) => {
    console.log(props)
    const {name, quantity, price, img,key} = props.product;
    const reviewItemStyle ={
        borderBottom: '1px solid lightgry',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft :'200px'
        
    }
    return (
        <div style={reviewItemStyle} className="Review-item">
            <h4>{name}</h4>
            <img src={img} alt=""/>
            <p>Quantity: {quantity} </p>
            <p>Price: {price}</p>
            <button 
            onClick={() => props.romoveProduct(key)}
            className="add-button">Remove</button>
        </div>
    );
};

export default ReviewProduct;