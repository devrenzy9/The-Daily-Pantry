import React, { useEffect, useRef } from 'react'
import DailySellProduct from '../components/HomePageComponent/DailySellProduct';
import product1_1 from '../assets/HomePageAssets/product-1-1.jpg';
import product1_2 from '../assets/HomePageAssets/product-1-2.jpg';

import product2_1 from '../assets/HomePageAssets/product-2-1.jpg';
import product2_2 from '../assets/HomePageAssets/product-2-2.jpg';

import product3_1 from '../assets/HomePageAssets/product-3-1.jpg';
import product3_2 from '../assets/HomePageAssets/product-3-2.jpg';

import product4_1 from '../assets/HomePageAssets/product-4-1.jpg';
import product4_2 from '../assets/HomePageAssets/product-4-2.jpg';

import product5_1 from '../assets/HomePageAssets/product-5-1.jpg';
import product5_2 from '../assets/HomePageAssets/product-5-2.jpg';

import product6_1 from '../assets/HomePageAssets/product-6-1.jpg';
import product6_2 from '../assets/HomePageAssets/product-6-2.jpg';

import product7_1 from '../assets/HomePageAssets/product-7-1.jpg';
import product7_2 from '../assets/HomePageAssets/product-7-2.jpg';

import product8_1 from '../assets/HomePageAssets/product-8-1.jpg';
import product8_2 from '../assets/HomePageAssets/product-8-2.jpg';

import product9_1 from '../assets/HomePageAssets/product-9-1.jpg';
import product9_2 from '../assets/HomePageAssets/product-9-2.jpg';

import product10_1 from '../assets/HomePageAssets/product-10-1.jpg';
import product10_2 from '../assets/HomePageAssets/product-10-2.jpg';

import product11_1 from '../assets/HomePageAssets/product-11-1.jpg';
import product11_2 from '../assets/HomePageAssets/product-11-2.jpg';

import product12_1 from '../assets/HomePageAssets/product-12-1.jpg';
import product12_2 from '../assets/HomePageAssets/product-12-2.jpg';

import product13_1 from '../assets/HomePageAssets/product-13-1.jpg';
import product13_2 from '../assets/HomePageAssets/product-13-2.jpg';

import product14_1 from '../assets/HomePageAssets/product-14-1.jpg';
import product14_2 from '../assets/HomePageAssets/product-14-2.jpg';

import product15_1 from '../assets/HomePageAssets/product-15-1.jpg';
import product15_2 from '../assets/HomePageAssets/product-15-2.jpg';

import product16_1 from '../assets/HomePageAssets/product-16-1.jpg';
import product16_2 from '../assets/HomePageAssets/product-16-2.jpg';

import banner from '../assets/HomePageAssets/banner-4.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// yaha react ki slick library ka use kia gaya hy 

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);


const DailySells = () => {

  const sliderHead = useRef();
  const sliderAni = useRef();

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(sliderHead.current, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sliderHead.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true
      },
    });

    gsap.from(sliderAni.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sliderAni.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true
      },
    });
  });

  return () => ctx.revert();
}, []);

  // yaha upper animation ka code hy

  const sliderRef = useRef();

  useEffect(() => {
  setTimeout(() => {
    sliderRef.current?.slickGoTo(0, true); // force re-render / reset position
  }, 200);
  }, []);

    const PrevArrow = ({ onClick }) => (
      <div
        onClick={onClick}
        className='h-8 w-8 rounded-full bg-[#F9E6DE] flex justify-center items-center cursor-pointer mr-2'
      >
        <i className="ri-arrow-left-line text-[#D17A5F]"></i>
      </div>
    );

    const NextArrow = ({ onClick }) => (
      <div
        onClick={onClick}
        className='h-8 w-8 rounded-full bg-[#F9E6DE] flex justify-center items-center cursor-pointer'
      >
        <i className="ri-arrow-right-line text-[#D17A5F]"></i>
      </div>
    );

  const settings = {
    infinite: true,          // 🔁 loop
    speed: 500,              // ⚡ slide animation speed
    slidesToShow: 4,         // 👀 lg screens (default)
    slidesToScroll: 2,       // 👣 lg: slide 3 at a time
    arrows: false,            // ⬅️➡️ show arrows
    nextArrow: <NextArrow />, // 👉 custom next
    prevArrow: <PrevArrow />, // 👈 custom prev
    adaptiveHeight: true,          // ✅ Add this
    waitForAnimate: false,         // ✅ Add this
    swipeToSlide: true,            // ✅ Optional for better user control
    responsive: [
      {
        breakpoint: 1024,    // 👇 below lg (md screens)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,     // 👇 below md (sm screens)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 490,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
     }
    ],
  };

  const items = [
  {
    id: 1,
    deal: "Hot",
    img: product1_1,
    hover: product1_2,
    cat: "Snack",
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    star: "30",
    rating: "(4.0)",
    company: "Fresh Farms",
    realPrice: "28.85",
    price: "32.0",
  },
  {
    id: 2,
    deal: "Hot",
    img: product2_1,
    hover: product2_2,
    cat: "Premium Meats",
    name: "All Natural ItalianStyle Chicken Meatballs",
    star: "20",
    rating: "(3.5)",
    company: "Premium Meats",
    realPrice: "52.85",
    price: "55.0",
  },
  {
    id: 3,
    deal: "New",
    img: product3_1,
    hover: product3_2,
    cat: "Snack",
    name: "Angies Boomchickapop Sweet & Salty Kettle Corn",
    star: "15",
    rating: "(4.0)",
    company: "Snack Co",
    realPrice: "22.85",
    price: "25.0",
  },
  {
    id: 4,
    deal: "Sale",
    img: product4_1,
    hover: product4_2,
    cat: "Vegetables",
    name: "Crispy Classic Buffalo Wings",
    star: "28",
    rating: "(4.5)",
    company: "Fresh Farms",
    realPrice: "19.85",
    price: "22.0",
  },
  {
    id: 5,
    deal: "new",
    img: product5_1,
    hover: product5_2,
    cat: "Pet Foods",
    name: "Almonds Lightly Salted",
    star: "14",
    rating: "(4.2)",
    company: "Fresh Farms",
    realPrice: "15.85",
    price: "17.0",
  },
  {
    id: 6,
    deal: "",
    img: product6_1,
    hover: product6_2,
    cat: "Dairy",
    name: "Greek Yogurt",
    star: "18",
    rating: "(4.0)",
    company: "Dairy Best",
    realPrice: "12.50",
    price: "13.9",
  },
  {
    id: 7,
    deal: "-10%",
    img: product7_1,
    hover: product7_2,
    cat: "Beverages",
    name: "Ginger Ale – 2L Bottle",
    star: "11",
    rating: "(3.8)",
    company: "Beverage Co",
    realPrice: "18.85",
    price: "21.0",
  },
  {
    id: 8,
    deal: "Sale",
    img: product8_1,
    hover: product8_2,
    cat: "Seafood",
    name: "Stuffed Alaskan Salmon",
    star: "12",
    rating: "(4.3)",
    company: "Ocean Harvest",
    realPrice: "26.85",
    price: "28.0",
  },
  {
    id: 9,
    deal: "",
    img: product9_1,
    hover: product9_2,
    cat: "Fruits",
    name: "Fresh Organic Strawberries",
    star: "10",
    rating: "(4.6)",
    company: "Berry Farms",
    realPrice: "10.85",
    price: "12.0",
  },
  {
    id: 10,
    deal: "Hot",
    img: product10_1,
    hover: product10_2,
    cat: "Coffee & Tea",
    name: "Organic Green Tea Bags 100 Count",
    star: "9",
    rating: "(4.4)",
    company: "GreenLife",
    realPrice: "14.99",
    price: "16.5",
  }
];

 
  return (
    <div className='px-4 lg:px-6 mt-10 relative'>
          <div ref={sliderHead} className='lg:flex lg:justify-between'>
            <h2 className='text-[2rem] font-semibold lg:text-[2.3rem] md:whitespace-nowrap'>Daily Best Sells</h2>
              <div className='flex justify-between items-center'>
                <ul className=' flex flex-wrap gap-4 mt-3'>
                    <li className='text-[#D17A5F] hover:translate-y-[-3px] cursor-pointer transition-all duration-200'>Featured</li>
                    <li className='hover:text-[#D17A5F] hover:translate-y-[-3px] transition-all duration-200 cursor-pointer'>Popular</li>
                    <li className='hover:text-[#D17A5F] hover:translate-y-[-3px] transition-all duration-200 cursor-pointer'>New added</li>
                </ul>
                <div className="flex items-center gap-2 sm:hidden">
                  <div
                    onClick={() => sliderRef.current?.slickPrev()}
                    className='h-8 w-8 rounded-full bg-zinc-200 flex justify-center items-center cursor-pointer'
                  >
                    <i className="ri-arrow-left-line text-black"></i>
                  </div>
                  <div
                    onClick={() => sliderRef.current?.slickNext()}
                    className='h-8 w-8 rounded-full bg-zinc-200 flex justify-center items-center cursor-pointer'
                  >
                    <i className="ri-arrow-right-line text-black"></i>
                  </div>
                </div>
              </div>
          </div>
        <div ref={sliderAni} className='relative lg:flex lg:mt-[-5px] items-center'>
            <div className='w-[25%] lg:h-[31rem] mt-[27px] hidden lg:flex lg:flex-col relative overflow-hidden rounded-2xl'>
                  <img src={banner} alt='Banner Image'  className='h-full object-cover absolute z-2'/>
                  <div className='relative z-4 flex flex-col justify-center items-start gap-6 h-full w-full px-8 xl:justify-between xl:py-15'>
                     <h1 className='text-[#6B4423] text-[2.6rem] font-semibold xl:w-[90%]'>Bring nature into your home</h1>
                    <div className=''>
                        <button className='bg-[#D17A5F] w-fit text-white px-3 py-2 rounded-md mt-3 font-semibold text-sm group hover:bg-[#E75C42] transition-all duration-200 cursor-pointer'>Shop Now <i className="group-hover:ml-3 transition-all duration-200 ri-arrow-right-line"></i></button>
                    </div>
                  </div>
              </div>
              <div className=" items-center gap-2 hidden sm:flex absolute z-100 top-1/2 lg:right-0 lg:w-[76%] translate-y-[-50%] w-full justify-between ">
                      <div
                        onClick={() => sliderRef.current?.slickPrev()}
                        className='h-8 w-8 rounded-full bg-zinc-200 flex justify-center items-center cursor-pointer'
                      >
                        <i className="ri-arrow-left-line text-black"></i>
                      </div>
                      <div
                        onClick={() => sliderRef.current?.slickNext()}
                        className='h-8 w-8 rounded-full bg-zinc-200 flex justify-center items-center cursor-pointer'
                      >
                        <i className="ri-arrow-right-line text-black"></i>
                      </div>
                </div>
                <div className='lg:w-[75%]'>
                    <Slider ref={sliderRef} {...settings} className='mt-6'>
                      {items.map((item, index) => (
                        <div key={index} className='px-2'>
                          <DailySellProduct {...item} />
                        </div>
                      ))}
                  </Slider>
            </div>
         </div>
    </div>
  )
}

export default DailySells
