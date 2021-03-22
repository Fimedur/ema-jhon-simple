import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const{img, name, seller,price,stock} = props.product;
    return (
        <div className="Product">          
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small></small></p>
                <br/>
                <p><small>Only {stock} left in stock- Order soon.</small></p>
                <button className="add-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
        
    );
};
 
export default Product;