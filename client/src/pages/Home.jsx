import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../pages/HeroSection'
import FeaturedSection from '../pages/FeaturedSection'
import PopularProducts from './PopularProducts'
import DailySells from './DailySellsSection'
import DealDaySection from './DealDaySection'
import Footer from './Footer'
import ProductCategory from './ProductCategory'
import StartAni from './popup'

const Home = () => {

  return (
    <div>
      <StartAni/>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection />
      <PopularProducts />
      <DailySells/>
      <DealDaySection/>
      <ProductCategory/>
      <Footer/>
    </div>
  )
}

export default Home
