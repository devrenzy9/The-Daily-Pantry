import React, { useEffect, useRef, useState } from "react";
import slider1 from "../assets/HomePageAssets/slider-1.png";
import slider2 from "../assets/HomePageAssets/slider-2.png";
import { api } from "../utilities/api";
import gsap from "gsap";
const HeroSection = () => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [sub1Status, setSub1Status] = useState('idle'); // idle | loading | success
  const [sub2Status, setSub2Status] = useState('idle');

  const handleSubscribe1 = async (e) => {
    e.preventDefault();
    if (!email1.trim()) return;
    setSub1Status('loading');
    try {
      await api.subscribeNewsletter(email1);
      setSub1Status('success');
      setEmail1('');
      setTimeout(() => setSub1Status('idle'), 3000);
    } catch { setSub1Status('idle'); }
  };

  const handleSubscribe2 = async (e) => {
    e.preventDefault();
    if (!email2.trim()) return;
    setSub2Status('loading');
    try {
      await api.subscribeNewsletter(email2);
      setSub2Status('success');
      setEmail2('');
      setTimeout(() => setSub2Status('idle'), 3000);
    } catch { setSub2Status('idle'); }
  };
  let firstSlider = useRef();
  let secondSlider = useRef();

  let btn1 = useRef();
  let btn2 = useRef();

  const [active, setactive] = useState(1);

  const [Switch, setSwitch] = useState(false);

  const sliderAni = useRef(null); 

  const sliderAniFunction = () => {
    sliderAni.current = setInterval(() => {
      setSwitch((prev) => !prev);
    }, 3000);
  };

  useEffect(() => {
    sliderAniFunction(); // 🟡 Mount pe chalu
    return () => clearInterval(sliderAni.current);
  }, []);

  const mouseEnterHandler = () =>{
    clearInterval(sliderAni.current);
  }

  const mouseLeaveHandler = () =>{
    sliderAniFunction();
  } 

//   ye mouse enter and leave slider par hover krny par animation ko rokny ky lie banaya gaya hy
  useEffect(() => {
    if (!firstSlider.current || !secondSlider.current) return;
    
    if (Switch) {
      gsap.set(firstSlider.current, { display: "flex" }); // manually set display
      gsap.set(secondSlider.current, { display: "none" });
      gsap.to(firstSlider.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      setactive(1);
    } else {
      gsap.set(firstSlider.current, { display: "none" });
      gsap.set(secondSlider.current, { display: "flex" });
      gsap.to(firstSlider.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      setactive(2);
    }
  }, [Switch]);

  // ye upper animation ky lie use effect banaya hy is mn animation ka code hy jo slider par chal rhi hy

  const clickHandle = (val) => {
    if (!firstSlider.current || !secondSlider.current) return;
    
    setactive(val);
    if (val == 1) {
      firstSlider.current.style.display = "flex";
      secondSlider.current.style.display = "none";
      gsap.to(firstSlider.current, {
        opacity: 1,
        duration: 0.3,
        ease: "ease-in-out",
      });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.3,
        ease: "ease-in-out",
      });
    } else {
      firstSlider.current.style.display = "none";
      secondSlider.current.style.display = "flex";
      gsap.to(firstSlider.current, {
        opacity: 0,
        duration: 0.2,
        ease: "ease-in-out",
      });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.2,
        ease: "ease-in-out",
      });
    }
  };
  //  upper ka code mobile device ky lie hy
  const [arrow, setarrow] = useState(1);
  const arrowHandle = () => {
    if (!firstSlider.current || !secondSlider.current) return;
    
    const ActiveArrow = arrow == 1 ? 2 : 1;
    setarrow(ActiveArrow);

    if (ActiveArrow == 1) {
      (firstSlider.current.style.display = "flex"),
        (secondSlider.current.style.display = "none"),
        gsap.to(firstSlider.current, {
          opacity: 1,
          duration: 0.3,
          ease: "ease-in-out",
        });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.3,
        ease: "ease-in-out",
      });
    } else {
      (firstSlider.current.style.display = "none"),
        (secondSlider.current.style.display = "flex"),
        gsap.to(firstSlider.current, {
          opacity: 0,
          duration: 0.2,
          ease: "ease-in-out",
        });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.2,
        ease: "ease-in-out",
      });
    }
  };

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="px-4 lg:px-6 mt-10 relative">
      <div className="hidden md:flex absolute top-1/2 left-0 w-full z-10 justify-between px-6 -translate-y-1/2">
          <div
            onClick={() => arrowHandle()}
            className="relative right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#FBF6F1] shadow-md cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-2xl text-[#6B4423]"></i>
          </div>
          <div
            onClick={() => arrowHandle()}
            className="relative left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#FBF6F1] shadow-md cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-2xl text-[#6B4423]"></i>
          </div>
      </div>
      {/* ye upper ka code arrow ka hy  */}

      <div
        ref={firstSlider}
        className=" w-full h-[25rem] lg:h-[32rem] flex relative rounded-3xl overflow-hidden  bg-cover bg-no-repeat bg-center  flex-col justify-center "
        style={{ backgroundImage: `url(${slider1})` }}
      >
        <div className="relative z-2 p-4 flex flex-col sm:w-[37rem] sm:p-10 lg:px-12  gap-6 text-[#6B4423]">
          <h1 className="heroHead text-[3.2rem] w-[80%] lg:text-[4rem] lg:w-[100%] leading-none font-semibold">
            Don't miss amazing grocery deals
          </h1>
          <h4 className="heroHead2 text-[1.5rem] text-zinc-600 lg:text-[1.6rem]">
            Sign up for daily newsletter
          </h4>
          <form onSubmit={handleSubscribe1} className="mt-1 bg-[#FBF6F1] flex justify-between items-center rounded-full h-15 lg:mt-5">
            <div className="ml-4 flex gap-2 items-center w-[60%]">
              <i className="ri-send-plane-line text-xl"></i>
              <input
                type="email"
                placeholder={sub1Status === 'success' ? 'Subscribed!' : 'Your email address'}
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                disabled={sub1Status === 'loading' || sub1Status === 'success'}
                className={`w-[130%] outline-none bg-transparent ${sub1Status === 'success' ? 'text-green-600' : ''}`}
              />
            </div>
            <button
              type="submit"
              disabled={sub1Status === 'loading' || sub1Status === 'success'}
              className="heroButton bg-[#D17A5F] text-lg text-white h-full w-34 cursor-pointer rounded-full hover:bg-[#E75C42] transition-all duration-200 disabled:opacity-70"
            >
              {sub1Status === 'loading' ? 'Sending...' : sub1Status === 'success' ? 'Done ✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div
        ref={secondSlider}
        className=" w-full h-[25rem] lg:h-[32rem] relative rounded-3xl overflow-hidden bg-cover  opacity-0 bg-no-repeat bg-center flex-col justify-center hidden"
        style={{ backgroundImage: `url(${slider2})` }}
      >
        <div className="relative z-2 p-4 lg:px-12 flex flex-col gap-6 text-[#6B4423] sm:w-[37rem] sm:p-10 ">
          <h1 className="heroHead text-[3.2rem] lg:text-[4rem] lg:w-[100%] leading-none font-semibold">
            Fresh Vegetables Big Discount
          </h1>
          <h4 className="heroHead2 text-[1.5rem] text-zinc-600 lg:text-[1.7rem]">
            Save up to 50% off on your first order
          </h4>
          <form onSubmit={handleSubscribe2} className="mt-1 bg-[#FBF6F1] flex justify-between items-center rounded-full h-15 lg:mt-5">
            <div className="ml-4 flex gap-2 items-center w-[60%]">
              <i className="ri-send-plane-line text-xl"></i>
              <input
                type="email"
                placeholder={sub2Status === 'success' ? 'Subscribed!' : 'Your email address'}
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
                disabled={sub2Status === 'loading' || sub2Status === 'success'}
                className={`w-[130%] outline-none bg-transparent ${sub2Status === 'success' ? 'text-green-600' : ''}`}
              />
            </div>
            <button
              type="submit"
              disabled={sub2Status === 'loading' || sub2Status === 'success'}
              className="heroButton bg-[#D17A5F] text-lg text-white h-full w-34 cursor-pointer rounded-full hover:bg-[#E75C42] transition-all duration-200 disabled:opacity-70"
            >
              {sub2Status === 'loading' ? 'Sending...' : sub2Status === 'success' ? 'Done ✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="slideButtons w-full absolute z-2 bottom-3 left-[48%] flex gap-2 md:hidden">
        <div
          onClick={() => {
            clickHandle(1);
          }}
          ref={btn1}
          className={`rounded-full w-4 h-4 ${
            active == 1 ? "bg-[#D17A5F]" : "border-2 border-zinc-600"
          } cursor-pointer`}
        ></div>
        <div
          onClick={() => {
            clickHandle(2);
          }}
          ref={btn2}
          className={`rounded-full w-4 h-4 ${
            active == 2 ? "bg-[#D17A5F]" : "border-2 border-zinc-600"
          } cursor-pointer`}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
