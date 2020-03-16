import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Card from '../Card/Card'
import './Shop.css';

const Shop = () => {
const first13=fakeData.slice(0,13);
const [products,setProduct]=useState(first13);
const [cart,setCart]=useState([])
const btnadd=(x)=>{
console.log('clicked',x);
const newCart=[...cart,x];
setCart(newCart)
 }

    return (
        <div className="shop-container">
 <div className="product-container">          
{
 products.map(someProduct=><Product 
    btnadd={btnadd}
    prodcutnInfo={someProduct}></Product>)
        }
    </div>
    <div className="cart-container">
      <Card cart={cart}></Card>
    </div>
      </div>
    
    );
};

export default Shop;