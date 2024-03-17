import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../services/api';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/CartSlice';

const ProductDetailPage = () => {
    const [count,setCount] = useState(1);
    const {id} = useParams();
    console.log(id);
    const products = useProducts();

    function handleAdd(){
        setCount(count =>count+1)
    }
    function handleMinus(){
        if (count > 1) {
        setCount(count => count - 1);
        }
    }
    if (!products) {
        return <div>Loading...</div>; // Or any loading indicator
    }
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
    }
     
    /*dispatching */
    const dispatch = useDispatch();
    function handleAddToCart(){
        if (product && product.id) {
            dispatch(addToCart({ product: product, count: count }));
            console.log("product is dispatch to store");
        } else {
            console.error("Product is undefined or missing ID.");
        }
    }

    return (
        <div className='w-10/12   mx-auto mt-12 flex gap-8 '>
        
        <div className='w-1/2  '>
        
        <img src={product.images[0]} alt="" className='w-full h-full object-cover rounded-md' />
        
        </div>
        
        <div className='p-4 h-full w-1/2 flex flex-col gap-4 '>
        
        <p className="text-2xl font-bold ">{product.title}</p>
        
        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
        <p className="text-lg text-justify text-gray-900">Description :{" "}{product.description}</p>
        <div className='flex gap-4 items-center  '>
            <FaPlus onClick={handleAdd} className='text-3xl m-2'></FaPlus>
            <span className='text-3xl m-2'>{count}</span>
            <FaMinus onClick={handleMinus} className='text-3xl m-2'></FaMinus>
        </div>
        <button className='bg-violet-500 rounded-md py-2 text-lg text-white font-semibold' onClick={handleAddToCart}>Add To  Cart</button>
      </div>
        </div>
    );
}

export default ProductDetailPage