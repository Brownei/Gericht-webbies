import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp, AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className='p-6 bg-[#0C0C0C] mt-[50px]'>
      <div className='container mx-auto flex flex-col space-y-3 p-3 lg:flex-row lg:space-x-5 lg:mt-[50px] lg:justify-center lg:text-center lg:items-center'>
        <div className='flex flex-col space-y-2 items-center justify-center text-center p-2 lg:hidden'>
            <img src="/Gerícht.png" alt="Logo" />
            <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
            <div className='text-[#AAAAAA] flex space-x-2'>
              <Link to="" className='cursor-pointer hover:scale-105 hover:text-green-600 duration-150'> < AiOutlineWhatsApp fontSize={23} /> </Link>
              <Link to=""  className='cursor-pointer hover:scale-105 hover:text-blue-800 duration-150'> < AiFillFacebook fontSize={23} /> </Link>
              <Link to="https://www.twitter.com/sinnerbrown" className='cursor-pointer hover:scale-105 hover:text-blue-500 duration-150'> < AiOutlineTwitter fontSize={23} /> </Link>
              <Link to="https://instagram.com/davido?igshid=YmMyMTA2M2Y=" className='cursor-pointer hover:scale-105 hover:text-pink-500 duration-150'> < AiFillInstagram fontSize={23} /> </Link>
            </div>
        </div>
        <div className='flex flex-col items-start space-y-5 p-2 lg:items-center'>
          <h4 className='text-[19px]'>Contact Us</h4>
          <div className='text-start lg:text-end'>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
        </div>
        <div className='hidden items-center justify-center p-2 lg:flex lg:flex-col lg:space-y-2'>
          <img src="/Gerícht.png" alt="Logo" />
          <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
          <div className='text-[#AAAAAA] flex space-x-2'>
            <Link to="" className='cursor-pointer hover:scale-105 hover:text-green-600 duration-150'> < AiOutlineWhatsApp fontSize={23} /> </Link>
            <Link to="" className='cursor-pointer hover:scale-105 hover:text-blue-500 duration-150'> < AiFillFacebook fontSize={23} /> </Link>
            <Link to="https://www.twitter.com/sinnerbrown" className='cursor-pointer hover:scale-105 hover:text-blue-500 duration-150'> < AiOutlineTwitter fontSize={23} /> </Link>
            <Link to="https://instagram.com/davido?igshid=YmMyMTA2M2Y=" className='cursor-pointer hover:scale-105 hover:text-pink-500 duration-150'> < AiFillInstagram fontSize={23} /> </Link>
          </div>
        </div>
        <div className='flex flex-col justify-start space-y-5 p-2 lg:items-center'>
          <h4 className='text-[19px]'>Working Hours</h4>
          <div className='text-start lg:text-start'>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <p className='text-center mt-[50px]'>2021 Gerícht. All Rights reserved.</p>
    </section>
  )
}

export default Footer