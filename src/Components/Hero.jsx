import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section>
        <div className='container mx-auto p-6 flex flex-col-reverse lg:p-1 lg:max-w-[1126px] lg:max-h-[1688px] mt-7 lg:flex-row '>
            <div className='flex flex-col items-start mt-10 lg:mt-24'>
                <p className='font-san font-bold text-[19px] leading-[29.9px]'>Chase the new Flavour</p>
                <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
                <h1 className=' font-bold text-[70px] leading-[100px] mt-[5px] mb-[10px] text-lightBrown lg:text-[90px] lg:leading-[117px] lg:mt-[10px] lg:mb-[20px]'>The Key To <br className='hidden lg:block' /> Fine Dining</h1>
                <p className='leading-[28px] text-[#AAAAAA] '>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Link to='/explore' className='mt-[20px] shadow-lg px-[30px] py-[8px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>Explore Menu</Link>
            </div>
            <img className='w-full h-[300px] object-cover border-lightBrown border-r-[15px] border-b-[15px] lg:h-[600px]' src="/khloe-arledge-ND3edEmzcdQ-unsplash2.png" alt="Food-hero" />
        </div>
    </section>
  )
}

export default Hero