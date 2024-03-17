import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
};

const WishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        toggleWishlist:(state,action)=>{
            const {id,title,price,images: [firstImage]} = action.payload;
            const existingItem = state.items.find((item)=>item.id === id);
            if(existingItem){
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                state.items.push({
                  firstImage,
                  id,
                  title,
                  price
                });
              }
            localStorage.setItem('wishlist', JSON.stringify(state.items));
        }
    }
})

export const {toggleWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
