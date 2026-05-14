import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/HomePageAssets/logo.svg'
import FooterCompo from '../components/HomePageComponent/FooterCompo'
import { api } from '../utilities/api'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  let block1 = useRef();
  let block2 = useRef();
  let block3 = useRef();
  let block4 = useRef();
  let mainContainer = useRef();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    try {
      await api.subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      console.error('Subscription failed:', err);
    } finally {
      setSubscribing(false);
    }
  };

  useEffect(()=>{
    let blocks = [block1.current, block2.current, block3.current, block4.current]

    const ctx = gsap.context(()=>{
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "-50% top",
        }
      });

      blocks.forEach((block, i)=>{
        tl.from(block,{
          y: 80,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        },'a')
      })

    },mainContainer.current)

    return ()=> ctx.revert();
  },[])

  return (
    <footer ref={mainContainer} className='bg-[#FBF6F1] border-t border-[#E8DDD5]'>
      {/* Main Footer Grid */}
      <div className='max-w-7xl mx-auto px-4 lg:px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

          {/* Column 1: About */}
          <div ref={block1} className='flex flex-col gap-4'>
            <img className='w-32' src={logo} alt='Daily Pantry Logo' />
            <p className='text-sm text-slate-600 leading-relaxed'>
              Quality fresh groceries delivered to your doorstep. Your trusted partner for everyday essentials and premium products.
            </p>
                <div className='flex flex-col gap-3 text-sm mt-2'>
                <div className='flex items-start gap-3'>
                  <i className="text-[#D17A5F] text-lg ri-map-pin-line flex-shrink-0 mt-0.5"></i>
                  <span className='text-slate-600'>5171 W Campbell Ave, Kent, Utah 53127 United States</span>
                </div>
                <div className='flex items-center gap-3'>
                  <i className="text-[#D17A5F] text-lg ri-customer-service-line flex-shrink-0"></i>
                  <span className='text-slate-600'>Contact us for support</span>
                </div>
                <div className='flex items-center gap-3'>
                  <i className="text-[#D17A5F] text-lg ri-mail-line flex-shrink-0"></i>
                  <span className='text-slate-600'>Email us for inquiries</span>
                </div>
                <div className='flex items-center gap-3'>
                  <i className="text-[#D17A5F] text-lg ri-time-line flex-shrink-0"></i>
                  <span className='text-slate-600'>10:00 - 18:00, Mon-Sat</span>
                </div>
              </div>
            </div>

          {/* Column 2: Quick Links */}
          <div ref={block2} className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-[#6B4423]'>Quick Links</h4>
            <FooterCompo 
              item1="About Us" item2="Delivery Information" item3="Privacy Policy" 
              item4="Terms & Conditions" item5="Support Center" item6="Careers"
            />
          </div>

          {/* Column 3: Categories */}
          <div ref={block3} className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-[#6B4423]'>Categories</h4>
            <FooterCompo 
              item1="Milks & Dairies" item2="Coffee & Teas" item3="Pet Foods" 
              item4="Meats" item5="Vegetables" item6="Fruits" item7="Beverages"
            />
          </div>

          {/* Column 4: Social */}
          <div ref={block4} className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-[#6B4423]'>Follow Us</h4>
            <p className='text-sm text-slate-600'>Stay connected with us on social media for the latest updates and offers.</p>
            <div className='flex items-center gap-3 mt-2'>
              <a href="#" aria-label="Facebook" className='w-11 h-11 bg-[#D17A5F] rounded-full flex items-center justify-center text-white hover:bg-[#C86A50] transition-all duration-200'>
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" aria-label="Instagram" className='w-11 h-11 bg-[#D17A5F] rounded-full flex items-center justify-center text-white hover:bg-[#C86A50] transition-all duration-200'>
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" aria-label="Twitter" className='w-11 h-11 bg-[#D17A5F] rounded-full flex items-center justify-center text-white hover:bg-[#C86A50] transition-all duration-200'>
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" aria-label="YouTube" className='w-11 h-11 bg-[#D17A5F] rounded-full flex items-center justify-center text-white hover:bg-[#C86A50] transition-all duration-200'>
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
            <div className='mt-4'>
              <h5 className='text-sm font-medium text-[#6B4423] mb-2'>Newsletter</h5>
              <form onSubmit={handleSubscribe} className='flex'>
                <input 
                  type='email' 
                  placeholder={subscribed ? 'Subscribed!' : 'Your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-4 py-2 rounded-l-lg border outline-none text-sm transition-colors ${
                    subscribed ? 'border-green-400 bg-green-50' : 'border-[#E8DDD5] focus:border-[#D17A5F]'
                  }`}
                  disabled={subscribing}
                />
                <button 
                  type="submit"
                  disabled={subscribing}
                  className='px-4 py-2 bg-[#D17A5F] text-white rounded-r-lg hover:bg-[#C86A50] transition-colors disabled:opacity-50'
                >
                  <i className={`${subscribing ? 'ri-loader-4-line animate-spin' : 'ri-send-plane-line'}`}></i>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-[#F9E6DE] py-4'>
        <div className='max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div>
            <p className='text-sm text-[#6B4423]'>
              &copy; 2025, <span className='text-[#D17A5F] font-semibold'>The Daily Pantry</span> - All Rights Reserved
            </p>
          </div>
          <div className='flex flex-wrap gap-6 text-sm'>
            <a href="#" className='text-[#6B4423] hover:text-[#D17A5F] transition-colors'>Privacy Policy</a>
            <a href="#" className='text-[#6B4423] hover:text-[#D17A5F] transition-colors'>Terms of Service</a>
            <a href="#" className='text-[#6B4423] hover:text-[#D17A5F] transition-colors'>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
