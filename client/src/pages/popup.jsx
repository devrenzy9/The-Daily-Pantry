import React, { useEffect, useRef, useState } from "react";
import popup from "../assets/HomePageAssets/popup-1.png";
const StartAni = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 100,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 100);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const popupBox = useRef();

  const closeHandler = () =>{
    popupBox.current.classList.add("hidden");
  }
  return (
    <div ref={popupBox} className="fixed top-0 left-0 w-screen h-screen z-20 ">
      <div>
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 "></div>
        <div className="absolute top-[17%] rounded-xl left-1/2 translate-x-[-51.2%] translate-y-[-50% ] bg-[#FBF6F1] w-[90%] h-[31rem] md:h-[37rem] md:top-[10%] p-6 md:pl-[5%] lg:w-[53rem] lg:h-[33rem] lg:top-[15%]">
          <div className="w-full flex justify-end">
            <i onClick={closeHandler} class="ri-close-large-line text-lg lg:text-xl cursor-pointer"></i>
          </div>
          <div className="popupContainer relative z-1">
            <h6 className="text-yellow-500 text-lg font-semibold">
              Deal of the Day
            </h6>
            <h1 className="text-4xl font-semibold md:w-[35rem]">
              Organic fruit for your family's health
            </h1>
            <div className="flex mt-5 items-center">
              <h1 className="price text-[3.2rem] text-[#D17A5F] font-bold ">
                ₹38
              </h1>
              <div className="ml-4 ">
                <h6 className="disPrice1 text-yellow-500 leading-none font-semibold text-sm">
                  26% off
                </h6>
                <h4 className="disPrice2 text-zinc-400 text-2xl line-through font-semibold">
                  ₹52
                </h4>
              </div>
            </div>
            <h6 className="hurry text-zinc-400 mt-2">
              Hurry Up! Offer Bid In:
            </h6>

            {/* Countdown Timer Boxes */}
            <div className="flex gap-3 mb-4 mt-3">
               {/* Days */}
              <div className="timerBox w-[60px] h-[60px] border-2 border-[#D17A5F] bg-[#FBF6F1] text-[#D17A5F] rounded-md flex flex-col items-center justify-center">
                <h3 className="timerCount text-xl font-bold leading-4">{timeLeft.days}</h3>
                <span className="timerHead text-sm mt-1 font-semibold text-[#A85A3E]">
                  Days
                </span>
              </div>

               {/* Hours */}
              <div className="timerBox w-[60px] h-[60px] border-2 border-[#D17A5F] bg-[#FBF6F1] text-[#D17A5F] rounded-md flex flex-col items-center justify-center">
                <h3 className="timerCount text-xl font-bold leading-4">
                  {String(timeLeft.hours).padStart(2, "0")}
                </h3>
                <span className="timerHead text-sm mt-1 font-semibold text-[#A85A3E]">
                  Hours
                </span>
              </div>

               {/* Minutes */}
              <div className="timerBox w-[60px] h-[60px] border-2 border-[#D17A5F] bg-[#FBF6F1] text-[#D17A5F] rounded-md flex flex-col items-center justify-center">
                <h3 className="timerCount text-xl font-bold leading-4">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </h3>
                <span className="timerHead text-sm mt-1 font-semibold text-[#A85A3E]">
                  Mins
                </span>
              </div>

               {/* Seconds */}
              <div className="timerBox w-[60px] h-[60px] border-2 border-[#D17A5F] bg-[#FBF6F1] text-[#D17A5F] rounded-md flex flex-col items-center justify-center">
                <h3 className="timerCount text-xl font-bold leading-4">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </h3>
                <span className="timerHead text-sm mt-1 font-semibold text-[#A85A3E]">
                  Secs
                </span>
              </div>
            </div>
            {/* heres timer end   */}
            <div className="stars flex items-center gap-1 mb-4">
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-zinc-300"></i>
              <h6 className="rate text-zinc-400 text-base ml-2">(32 rates)</h6>
            </div>
            <button className="bg-[#D17A5F] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#E75C42] hover:px-6 transition-all duration-200">
              Shop Now<i class="ri-arrow-right-line ml-2 "></i>
            </button>
          </div>
          <img
            src={popup}
            alt="popup Image"
            className="popupImage absolute bottom-21 right-2 w-[70%] sm:w-[25rem] sm:bottom-8 md:w-[37rem] lg:w-[32rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default StartAni;
