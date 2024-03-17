import React from 'react'

const CartCard = ({firstImage,title,price,quantity}) => {
  return (
    <div >
        <div className=' w-8/12 h-40 flex  '>
                <div className='w-8/12 h-full'>
                    <img src={firstImage} alt="product image" className='max-w-full h-full object-cover' />
                </div>
                <div className=' flex flex-col w-4/12'>
                    <span>{title}</span>
                    <span>{price}</span>
                    <span>{quantity}</span>
                </div>
           </div>
    </div>
  )
}

export default CartCard