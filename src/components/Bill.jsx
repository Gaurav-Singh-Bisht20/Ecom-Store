import React from 'react'
import { Link } from 'react-router-dom';

const Bill = ({cartItems}) => {
  const totalMRP = cartItems.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1)); 
  }, 0);
  return (
    <div className='w-full p-1  '>
        <div className='w-full h-72   bg-fuchsia-300 rounded-md'>
            <h2 className='text-xl font-bold text-center'>INVOICE</h2>
            <hr  className='h-1 bg-slate-700'/>
            <h3 className='text-lg font-semibold'>Price Details ( {cartItems.length} ) </h3>
            <h3 className='text-base font-semibold'>Total MRP : {totalMRP}</h3>
            <h3 className='text-base font-semibold'>Discount 10% :  {totalMRP/10}</h3>
            <h3 className='text-base font-semibold mt-12'>Total Amount : {totalMRP-(totalMRP/10)}</h3>
            <Link to={"/cart/order"} >
            <button className='bg-cyan-400 w-full  py-2 text-lg font-bold mt-12 hover:bg-cyan-700 text-white transition-all'>Place Order</button>
            </Link>
        </div>
    </div>
  )
}

export default Bill