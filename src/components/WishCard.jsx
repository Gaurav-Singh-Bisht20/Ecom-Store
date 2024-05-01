import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from "react-icons/fa";
import { toggleWishlist } from '../store/WishlistSlice';
import { useDispatch } from 'react-redux';

const WishCard = ({id, url, title, price}) => {
  const dispatch = useDispatch();
  function handleRemoveWishlist(){
      dispatch(toggleWishlist(id))
  }
  return (
    <Link to={`/product/${id}`} className='w-72 h-60 overflow-hidden bg-amber-50 rounded-md shadow-md hover:cursor-pointer transition-all hover:scale-105 hover:border border-black' onClick={handleRemoveWishlist}>
      <div className='w-full h-3/4 relative'>
        <FaHeartBroken className='text-2xl text-red-600 absolute top-2 right-2'/>
        <img src={url} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='p-4 h-1/4 flex flex-col justify-center'>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-lg font-semibold text-gray-900">${price}</p>
      </div>
    </Link>
  )
}

export default WishCard