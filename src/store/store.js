import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"
import WishlistReducer from "./WishlistSlice"

const Store = configureStore({
    reducer:{
        cart:CartReducer,
        wishlist:WishlistReducer
    }
})

export default Store;