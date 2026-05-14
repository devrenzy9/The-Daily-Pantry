import React, { useRef, useState, useEffect } from 'react';
import FruitItems from '../components/HomePageComponent/FruitItems';
import cat1 from '../assets/HomePageAssets/cat-1.png';
import cat2 from '../assets/HomePageAssets/cat-2.png';
import cat3 from '../assets/HomePageAssets/cat-3.png';
import cat4 from '../assets/HomePageAssets/cat-4.png';
import cat5 from '../assets/HomePageAssets/cat-5.png';
import cat6 from '../assets/HomePageAssets/cat-9.png';
import cat7 from '../assets/HomePageAssets/cat-11.png';
import cat8 from '../assets/HomePageAssets/cat-12.png';
import cat9 from '../assets/HomePageAssets/cat-13.png';
import cat10 from '../assets/HomePageAssets/cat-14.png';
import cat11 from '../assets/HomePageAssets/cat-15.png';
import FeatureFruitCard from '../components/HomePageComponent/FeatureFruitCard';
import banner1 from '../assets/HomePageAssets/banner-1.png'
import banner2 from '../assets/HomePageAssets/banner-2.png'
import banner3 from '../assets/HomePageAssets/banner-3.png'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

const FeaturedSection = () => {
  

  const sliderRef = useRef(null);
  const slideWidthRef = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideTop = useRef();
  const mainDiv = useRef();

  const itemsRef = useRef([]);
  
  const addToItemsRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const cardRef = useRef();

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate heading
    gsap.from(slideTop.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: slideTop.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true // for debugging
      }
    });

    // Animate fruit items (grid cards)
    if (itemsRef.current.length > 0) {
      gsap.from(itemsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: slideTop.current,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true
        },
      });
    }

    // Animate 3 feature cards below
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 1.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainDiv.current, // Trigger first card
          start: "top 110%",
          toggleActions: "play none none none",
          // markers: true,
        }
      });

  }, mainDiv);

  return () => ctx.revert();  // ye clean up ky lie hota hy jab mount hojye pura element to animation hat jye 
}, []);


  // yaha sy upper ka code animatioon ka hy 

  // nichy ka functionality ka hy slider wagaira ka 
  useEffect(() => {
    const firstChild = sliderRef.current?.children[0];
    if (firstChild) {
      const style = window.getComputedStyle(firstChild);
      const gap = parseFloat(style.marginRight || '0');
      slideWidthRef.current = firstChild.offsetWidth + gap;
    }
  }, []);

  const handleNext = () => {
    if (isAnimating) return;

    const container = sliderRef.current;
    if (!container) return;

    const slideWidth = slideWidthRef.current;

    setIsAnimating(true);
    container.style.transition = 'transform 0.4s ease-in-out';
    container.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      const first = container.children[0];
      container.appendChild(first);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    const container = sliderRef.current;
    if (!container) return;

    const slideWidth = slideWidthRef.current;
    const children = container.children;
    const last = children[children.length - 1];
    container.insertBefore(last, children[0]);

    container.style.transition = 'none';
    container.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
      setIsAnimating(true);
      container.style.transition = 'transform 0.4s ease-in-out';
      container.style.transform = 'translateX(0)';
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const items = [
    { img: cat1, head: 'Cake & Milk', quantity: '26 items', color: 'green' },
    { img: cat2, head: 'Organic kiwi', quantity: '19 items', color: 'red' },
    { img: cat3, head: 'Peach', quantity: '34 items', color: 'cream' },
    { img: cat4, head: 'Red Apple', quantity: '15 items', color: 'green' },
    { img: cat5, head: 'Snacks', quantity: '28 items', color: 'red' },
    { img: cat6, head: 'Vegetables', quantity: '22 items', color: 'cream' },
    { img: cat7, head: 'Strawberry', quantity: '13 items', color: 'green' },
    { img: cat8, head: 'Black Plum', quantity: '31 items', color: 'red' },
    { img: cat9, head: 'Custard Apple', quantity: '16 items', color: 'cream' },
    { img: cat10, head: 'Coffee & Tea', quantity: '21 items', color: 'green' },
    { img: cat11, head: 'Headphones', quantity: '12 items', color: 'red' },
  ];

  return (
    <div ref={mainDiv} className='px-4 lg:px-6 mt-10 text-[#6B4423]'>
      <div ref={slideTop}  className='md:flex md:justify-between md:items-center' >
        <h2 className='text-[2rem] font-semibold lg:text-[2.3rem] md:whitespace-nowrap'>Featured Categories</h2>
        <div className='mt-3 flex justify-between items-center lg:items-end md:mt-0 md:w-[100%] '>
          <ul className='flex text-sm w-[18rem] justify-between lg:whitespace-nowrap lg:gap-2 md:ml-4'>
            <li className='border-r-1 px-2 pl-0 text-center cursor-pointer lg:px-3'>Cake & Milk</li>
            <li className='border-r-1 px-2 text-center cursor-pointer lg:px-3'>Coffee & Teas</li>
            <li className='px-2 text-center cursor-pointer'>Pet Foods Vegetables</li>
          </ul>
          <div className='flex gap-2'>
            <div
              onClick={handlePrev}
              className='h-8 w-8 rounded-full bg-[#F9E6DE] flex justify-center items-center cursor-pointer'
            >
              <i className="ri-arrow-right-line rotate-180 text-[#D17A5F]"></i>
            </div>
            <div
              onClick={handleNext}
              className='h-8 w-8 rounded-full bg-[#F9E6DE] flex justify-center items-center cursor-pointer'
            >
              <i className="ri-arrow-right-line text-[#D17A5F]"></i>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-7 overflow-hidden'>
        <div
          ref={sliderRef}
          className="w-full grid grid-flow-col gap-4
          auto-cols-[48%] sm:auto-cols-[32%] overflow-hidden md:auto-cols-[18.3%] md:gap-[2.1%] lg:auto-cols-[12.45%] xl:auto-cols-[9.23%] xl:gap-[0.85%]"
        >
          {items.map((i, ind) => (
            <FruitItems
              key={ind}
              ref={addToItemsRef} 
              color={i.color}
              img={i.img}
              head={i.head}
              quantity={i.quantity}
            />
          ))}
        </div>
      </div>
      <div ref={cardRef} className='mt-8 flex flex-col lg:flex-row gap-6 items-center w-full'>
        <FeatureFruitCard head='Everyday Fresh & Clean with our Products' img={banner1} />
        <FeatureFruitCard  head='Make your Breakfast Healthy and Easy' img={banner2} />
        <FeatureFruitCard head='The best organic Products Online' img={banner3} />
      </div>
    </div>
  );
};

export default FeaturedSection;

// is slider ki logic aysy banaye hy grid ki madad sy mn ny ak container banay hy osko apny hisaab sy responsive kia then os ky andar map krdye items sray os ky bad next and previous arrow ko handle kia 

// handle previous mn ye hua --- hum ny ak array jo banaya tha os ka last elemnt nikala osko insert krdia conatiner ky 0 eleemnt sy pehlay to wo agay sy hat gaya pichy agaya 

// handle next mn ye ua wo agay 0 elemnt jo hy wo hide ho rha hy click par apend kia ja rha hy osko last mn takay wo infiinite chalta rhy 

// element ki width and gap ki basis par hum ny onko set kra hy takay animtion properly chal sakay

// animation ki detail

// 1. animation  main hum ny gsap context use kia hy takay hum react mn jab useref wagaira use kren or animation lagaye to kabhi jo aysy maslaa araha tha react reference ni ly rha tha wo na aye 

// 2. hum hum use krty hain aysy ref kisi function component par to aysy directly reacy access ni krny dyta to os ky lie hum os component ko forward ref method ky through allow krty allow krty hain ky wo hamay ref ko use krny dy outside sy aye hue ref ko   

//  means dusray component mn directly jab ref lagana ho reference ky lie  to hum forward ref use krty hian takay reference ly saakay component ka 