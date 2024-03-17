import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Product = ({id, url, title, price }) => {
  return  (
    <Link to={`/product/${id}`} className='w-72 h-60 overflow-hidden bg-amber-50 rounded-md shadow-md hover:cursor-pointer transition-all hover:scale-105 hover:border border-black'>
      <div className='w-full h-3/4'>
        <img src={url} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='p-4 h-1/4 flex flex-col justify-center'>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-lg font-semibold text-gray-900">${price}</p>
      </div>
    </Link>
  );
}

export default Product;
