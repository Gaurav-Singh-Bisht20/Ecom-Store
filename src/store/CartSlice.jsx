import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    items: [], 
  };

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const { product, count } = action.payload;
            const {id,title, price,images:[firstImage]  } = product;
            const existingItem = state.items.find(item => item.id === id);
      
            if (existingItem) {
              existingItem.quantity += count;
            } else {
              state.items.push({
                firstImage,
                id,
                title,
                price,
                quantity: count,
            });
        }
    }
    }
})

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;