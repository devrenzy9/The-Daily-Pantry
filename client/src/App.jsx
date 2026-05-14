import React from 'react'
import Home from './pages/Home'
import { CartProvider } from './context/CartContext'


const App = () => {
  return (
    <CartProvider>
      <div className='max-w-[1600px] mx-auto overflow-x-hidden'>
        <Home/>
      </div>
    </CartProvider>
  )
}

export default App
