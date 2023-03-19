import React from 'react'
import { Link } from 'react-router-dom'

const FindUs = () => {
  return (
    <section className='container mx-auto p-6'>
    <div className='flex flex-col-reverse space-y-5 items-center justify-center mt-[100px] lg:mt-[150px] lg:flex-row lg:space-x-[100px]'>
      <div className='p-6'>
        <p className='font-san font-bold text-[19px] leading-[29.9px]'>Contact</p>
        <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
        <h2 className='font-semibold text-[50px] leading-[83.2px] text-lightBrown mb-[30px]'>Find Us</h2>
        <p className='leading-[28px] text-[#AAAAAA] '>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h4 className='font-semibold text-[16px] leading-[83.2px] text-lightBrown'>Opening Hours</h4>
        <p className='leading-[28px] text-[#AAAAAA] '>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='leading-[28px] text-[#AAAAAA] mb-[20px]'>Sat - Sun: 10:00 am - 03:00 am</p>
        <Link to='/book-table' className='mt-[20px] shadow-lg px-[30px] py-[10px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>View More</Link>
      </div>
      <img className='w-full h-[300px] object-cover border-lightBrown border-l-[15px] border-b-[15px] lg:h-[500px] lg:w-[500px]' src="/vitor-pinto-bYSpfD0Wn04-unsplash 1.png" alt="" />
    </div>
  </section>
  )
}

export default FindUs;