import React, { useEffect, useRef } from 'react'
import banner1 from '../assets/HomePageAssets/banner-5.png'
import banner2 from '../assets/HomePageAssets/banner-6.png'
import banner3 from '../assets/HomePageAssets/banner-7.png'
import banner4 from '../assets/HomePageAssets/banner-8.png'
import DealDayProduct from '../components/HomePageComponent/DealDayProduct'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

const DealDaySection = () => {

  const headingRef = useRef();
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate heading fade-in
    gsap.from(headingRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true
      }
    });

    // Animate deal cards one-by-one
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true,
      }
    });

  });

  return () => ctx.revert();
  }, []);


  return (
    <div className=' mt-10 px-4 lg:px-6'>
        <div className='flex items-center  justify-between'>
            <h2 className='text-[2rem] font-semibold lg:text-[2.3rem] md:whitespace-nowrap'>Deals Of The Day</h2>
            <h6  className='hover:text-[#D17A5F] transition-all duration-200 cursor-pointer h-fit  text-[#A85A3E]'>All Deals <i className="ri-arrow-right-s-line"></i></h6>
        </div>
            <DealDayProduct id={1} ref={addToCardsRef} img={banner1} star='30' name='Organic Quinoa, Brown & Red Rice' rating='4.0' company='Fresh Market' price='32.85' realPrice='33.0' days="400" />
            <DealDayProduct id={2} ref={addToCardsRef} img={banner2} star='20' name='Organic Gluten-Free Chicken' rating='4.0' company='Premium Meats' price='24.42' realPrice='26.0' days="600"/>
            <DealDayProduct id={3} ref={addToCardsRef} img={banner3} star='25' name='Wood-fired Mushroom Pizza' rating='3.0' company='Artisan Foods' price='12.53' realPrice='13.9' days="574"/>
            <DealDayProduct id={4} ref={addToCardsRef} img={banner4} star='18'name='Lemonade with Raspberry' rating='2.0' company='Fresh Beverages' price='15.38' realPrice='16.4' days="364"/>
    </div>
  )
}

export default DealDaySection
