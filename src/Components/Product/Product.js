import React from 'react';
import './Product.css'
const Product = (props) => {
const {name,img,seller,price,stock}=props.prodcutnInfo
    return (
        <div className="allProduct">
    <div>
<img src={img} alt=""/>
    </div>
    <div>
    <h4 className="ProductName">{name}</h4><br/>
<h3>By: {seller}</h3>
<h2>Price {price}$</h2>
<p><small>only {stock} left in stock -order soon</small></p>
<button onClick={()=>props.btnadd(props.prodcutnInfo)}>
Add to cart
</button>


    </div>
            
        </div>
    );
};

export default Product;