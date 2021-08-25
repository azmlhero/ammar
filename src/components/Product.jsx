import React from 'react';
import "./public.css";

const Product = ({title,price,onAddToCart,count}) => {
    // console.log(props)
    var title = title;
    var  priceClass = price <= 500 ? "green" : "red";
    return ( 
    <div> 
        <h1 className="colorT">{title}</h1> 
     
           {count}
    <div className = {priceClass }> 
      <b >Price :</b> {price}
     
      <button
      onClick={()=> { onAddToCart(title)}}
      > Add to Cart</button>
     </div>
     
        <hr />
        </div> );
}
 
export default Product;