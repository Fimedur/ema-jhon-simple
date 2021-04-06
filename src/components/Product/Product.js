import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props.product);
    const{img, name, seller,price,stock,key} = props.product;
    return (
        <div className="Product">          
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small></small></p>
                <br/>
                <p><small>Only {stock} left in stock- Order soon.</small></p>
                { props.showAddToCart && <button className="add-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
        
    );
};
 
export default Product;