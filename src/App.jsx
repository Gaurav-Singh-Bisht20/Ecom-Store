import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { Provider } from 'react-redux'
import Store from './store/store'
import OrderPlaced from './pages/OrderPlaced'

function App() {
  return (
    <Provider store={Store}>
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/wishlist' element={<WishlistPage/>}></Route>
        <Route path='/wishlist' element={<WishlistPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/product/:id' element={<ProductDetailPage/>}></Route>
        <Route path='/cart/order' element={<OrderPlaced/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  )
}

export default App
