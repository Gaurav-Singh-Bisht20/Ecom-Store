import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../components/CartCard'

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className='w-10/12 bg-slate-300 mx-auto mt-12 flex flex-col gap-4 '>
      {
        cartItems.map((item)=>{
          return(
           <CartCard {...item}/>
          )
        })
      }
    </div>
  )
}

export default CartPage