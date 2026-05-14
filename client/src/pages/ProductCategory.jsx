import React, { useEffect, useRef } from 'react'
import ProductCategoryComponent from '../components/HomePageComponent/ProductCategoryComponent'
import pro1 from '../assets/HomePageAssets/product-16-4.jpg'
import pro2 from '../assets/HomePageAssets/product-16-5.jpg'
import pro3 from '../assets/HomePageAssets/product-16-6.jpg'
import pro4 from '../assets/HomePageAssets/product-16-7.jpg'
import pro5 from '../assets/HomePageAssets/thumbnail-1.jpg'
import pro6 from '../assets/HomePageAssets/thumbnail-2.jpg'
import pro7 from '../assets/HomePageAssets/thumbnail-3.jpg'
import pro8 from '../assets/HomePageAssets/thumbnail-4.jpg'
import pro9 from '../assets/HomePageAssets/thumbnail-5.jpg'
import pro10 from '../assets/HomePageAssets/thumbnail-6.jpg'
import pro11 from '../assets/HomePageAssets/thumbnail-7.jpg'
import pro12 from '../assets/HomePageAssets/thumbnail-8.jpg'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

const ProductCategory = () => {

    const mainContainer = useRef();



 useEffect(() => {
        const ctx = gsap.context(() => {
            // Create animation for each section
            gsap.utils.toArray('.category-section').forEach((section, index) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        // markers: true // Enable for debugging
                    },
                    delay: index * 0.2,
                });
            });
        }, mainContainer); // Scope to main container

        return () => ctx.revert(); // Cleanup animations
    }, []);



  return (
    <div ref={mainContainer} className='px-4 lg:px-6 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-2'>
        <div  className='Cat1 w-full category-section'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[1.8rem] font-semibold'>Top Selling</h2>
                <div className='mainLine border-b-2 border-[#E8DDD5] relative'>
                    <div className='greenLine absolute top-[-1px] left-0 z-3 border-b-2 border-[#D17A5F] w-[25%]'></div>
                </div>
            </div>
            <div className='mt-5 grid gap-2'>
                 <ProductCategoryComponent id={1} img={pro1} head='Premium Coffee Creamer' star='20' rating='4.0'  price='36.42' realPrice='32.1'/>
                 <ProductCategoryComponent id={2} img={pro2} head='Premium Coffee Creamer' star='25' rating='4.0' price='25.99' realPrice='21.24'/>
                 <ProductCategoryComponent id={3} img={pro3} head='Premium Coffee Creamer' star='30' rating='4.0' price='44.22' realPrice='76.88'/>
            </div>
        </div>
        <div  className='Cat2 category-section'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[1.8rem] font-semibold'>Trending Products</h2>
                <div className='mainLine border-b-2 border-[#E8DDD5] relative'>
                    <div className='greenLine absolute top-[-1px] left-0 z-3 border-b-2 border-[#D17A5F] w-[25%]'></div>
                </div>
            </div>
            <div className='mt-5 grid gap-2'>
                <ProductCategoryComponent id={4} img={pro4} head='organic cage free grade a large brown egg' star='23'rating='3.5' price='33.9' realPrice='22.33'/>
                <ProductCategoryComponent id={5} img={pro5} head='seed of change organic quinaa brown & red rice' star='18' price='33.22' realPrice='15.55'/>
                <ProductCategoryComponent id={6} img={pro6} head='seed of change organic quinaa brown & red rice' star='18' price='33.22' realPrice='15.55'/>
            </div>
        </div>
        <div  className='Cat3 category-section'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[1.8rem] font-semibold'>Recently Added</h2>
                <div className='mainLine border-b-2 border-[#E8DDD5] relative'>
                    <div className='greenLine absolute top-[-1px] left-0 z-3 border-b-2 border-[#D17A5F] w-[25%]'></div>
                </div>
            </div>
            <div className='mt-5 grid gap-2'>
                <ProductCategoryComponent id={7} img={pro7} head='peepperidge farm afarmhouse hearty white bread' rating='4.0'  star='19' price='20.22' realPrice='22.32'/>
                <ProductCategoryComponent id={8} img={pro8} head='Oraganic frozen triple berry blend' rating='4.0'  star='19' price='20.22' realPrice='22.32'/>
                <ProductCategoryComponent id={9} img={pro9} head='oroweat country buttermilk bread' rating='4.0'  star='19' price='20.22' realPrice='22.32'/>
            </div>
        </div>
        <div  className='Cat4 category-section'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[1.8rem] font-semibold'>Top Rated</h2>
                <div className='mainLine border-b-2 border-zinc-300 relative'>
                    <div className='greenLine absolute top-[-1px] left-0 z-3 border-b-2 border-[#D17A5F] w-[25%]'></div>
                </div>
            </div>
            <div className='mt-5 grid gap-2'>
                <ProductCategoryComponent id={10} img={pro10} head='foster farms takeout crispy classic buffalo wings' star='3.7' price='19.99' realPrice='23.22'/>
                <ProductCategoryComponent id={1} img={pro11} head='ANgies boomchickapop sweeet & salty kettle corn'star='3.7' price='19.99' realPrice='23.22'/>
                <ProductCategoryComponent id={2} img={pro12} head='all natural italian style chicken meatballs' star='3.7' price='19.99' realPrice='23.22'/>
            </div>
        </div>
    </div>
  )
}

export default ProductCategory