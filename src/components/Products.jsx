import React from 'react'
import Product from '../components/Product';
import { useProducts } from '../services/api';

const Products = () => {
    const products = useProducts();
  return (
    <div className='w-10/12 mx-auto flex flex-wrap gap-4 justify-center '>{
        products?
           products.map((product)=>{
               return(
                   <Product key={product.id} id={product.id} url={product?.images[0]} description={product.description} title={product.title} price={product.price}/>
               )
           }):"loading..."}
       </div>
  )
}

export default Products