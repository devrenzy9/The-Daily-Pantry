import React from 'react'
import logo from '../../assets/HomePageAssets/logo.svg'

const Logo = () => {
  return (
    <img 
      src={logo} 
      alt="The Daily Pantry Logo" 
      className="h-16 w-auto flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105" 
    />
  )
}

export default Logo
