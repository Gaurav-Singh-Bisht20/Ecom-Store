import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  return (
        <div className= 'w-full bg-yellow-300 shadow-md  '>
          <div className=' w-10/12 mx-auto flex justify-between items-center'>
            <div>
               <Link to={'/'}> <h1 className='px-8 py-8'>Logo</h1></Link>
            </div>
            <div className='flex'>
            <Link to={"/cart"} className='px-8 py-8 flex items-center gap-1'>
              <p>Cart</p>
              <span className='mb-2 bg-violet-500 text-white rounded-full px-2 text-center '>{cartItems?.length}</span>
            </Link> 
            <Link to={"/wishlist"}  className='px-8 py-8'><p>wishlist</p></Link>
            <Link to={"/login"}  className='px-8 py-8'><p>login</p></Link>
            </div>
          </div>
        </div>
    
  )
}

export default Navbar