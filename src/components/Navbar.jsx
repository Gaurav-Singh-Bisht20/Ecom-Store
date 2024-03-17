import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className= 'w-full bg-yellow-300 shadow-md  '>
          <div className=' w-10/12 mx-auto flex justify-between items-center'>
            <div>
               <Link to={'/'}> <h1 className='px-8 py-8'>Logo</h1></Link>
            </div>
            <div className='flex'>
            <Link to={"/cart"} className='px-8 py-8 '><p>Cart</p></Link> 
            <Link to={"/wishlist"}  className='px-8 py-8'><p>wishlist</p></Link>
            <Link to={"/login"}  className='px-8 py-8'><p>login</p></Link>
            </div>
          </div>
        </div>
    
  )
}

export default Navbar