import React from 'react'
import { useSelector } from 'react-redux'
import WishCard from "../components/WishCard";

const WishlistPage = () => {
  const wishlistItems = useSelector((store)=>store.wishlist.items);
  console.log(wishlistItems?.length)

  return wishlistItems?.length > 0 ?(
    <div className='w-full mt-12'>
    <div className='w-10/12 mx-auto flex flex-wrap gap-4 justify-center '>
      {
        wishlistItems?.map((item)=>{
          return(
            <WishCard title={item.title} price={item.price}  id={item.id} url={item.firstImage} key={item.id}></WishCard>
          )
        })
      }
    </div>
    </div>
  ):<div className='w-10/12 mx-auto mt-12' >
    <h1>no wishlist</h1>
  </div>
}

export default WishlistPage