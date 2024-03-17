import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../components/CartCard'
import Bill from '../components/Bill';
import Designer from "../assets/Designer.png"
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items)
  return cartItems?.length > 0?(
    <div className='w-8/12 mx-auto flex gap-1 bg-slate-700 mt-12 '>
      <div className='w-7/12 bg-slate-300   flex flex-col gap-1 p-1 '>
        {
          cartItems.map((item)=>{
            return(
             <CartCard {...item}/>
            )
          })
        }
      </div>
      <div className='w-5/12 bg-slate-300 '>
        <Bill cartItems={cartItems}/>
      </div>
    </div>
  ):<div  className='w-10/12 h-screen mx-auto mt-12'>
    <Link to={"/"} className='flex items-center gap-2 '>
      <FaArrowLeft/>
      <h3>Back</h3>
    </Link>
    <h3 className='text-center text-lg font-bold mb-4'>Your cart is empty please add something in your cart first</h3>
    <div className='w-4/12 h-[500px] mx-auto'>
      <img src={Designer} alt="empty cart " className=' h-full object-' />
    </div>
    </div>
}

export default CartPage