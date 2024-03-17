import React, { useState } from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromCart, clearCart,decreaseQuantity,increaseQuantity} from "../store/CartSlice"
import { FcEmptyTrash } from "react-icons/fc";

const CartCard = ({id,firstImage,title,price,quantity}) => {
  const dispatch = useDispatch();
  function handleAdd(){
    dispatch(increaseQuantity(id))
  }
  function handleMinus(){
      dispatch(decreaseQuantity(id))
  }
  function handleRemove(){
    dispatch(removeFromCart(id))
  }
  return (
    <div >
        <div className=' w-full h-52 flex  gap-5 bg-amber-50  border border-black rounded-md relative '>
                <FcEmptyTrash className='absolute top-2 right-2 text-3xl ' onClick={handleRemove}/>
                <div className='h-full '>
                    <img src={firstImage} alt="product image" className='max-w-full h-full object-cover' />
                </div>
                <div className=' flex flex-col w-6/12 gap-2'>
                    <span className='text-base font-bold'>{title}</span>
                    <span>${price*quantity}</span>
                    <div className='flex gap-2 items-center   '>
                      <FaPlus onClick={handleAdd} className='text-xl '></FaPlus>
                      <span className='text-xl '>{quantity}</span>
                      <FaMinus onClick={handleMinus} className='text-xl '></FaMinus>
                    </div>
                </div>
           </div>
    </div>
  )
}

export default CartCard