import React from 'react'
import { GiSpoon } from 'react-icons/gi'

const Belief = () => {
  return (
    <section className='bg-[#0C0C0C]'>
      <div  className='container mx-auto p-6 flex flex-col-reverse mt-[100px] lg:p-1 lg:max-h-[1126px] w-full bg-[#040404] space-x-5 lg:flex-row-reverse lg:mt-[150px]'>
        <div className='flex flex-col space-y-5 space-x-0 mt-[10px] lg:mt-[15px] lg:items-start lg:ml-[50px] lg:space-x-3 lg:space-y-0'>
          <p className='font-san font-bold text-[19px] leading-[29.9px]'>Chef’s Word</p>
          <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
          <h3 className=' font-semibold text-[30px] leading-[83.2px] mt-[5px] mb-[10px] text-lightBrown lg:text-[50px] lg:leading-[117px] lg:mt-[10px] lg:mb-[20px]'>What We Believe In</h3>
          <div className='flex'>
            <img className='w-[60px] h-full object-cover' src="/“.png" alt="comma" />
            <p className='leading-[28px] text-[#AAAAAA] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className='leading-[28px] text-[#AAAAAA] font-thin'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          <h2 className='mt-[50px] mb-[10px] text-[17px] lg:text-[20px] text-lightBrown'>Kevin Luo</h2>
          <p className='leading-[28px] text-[#AAAAAA] font-thin mb-[50px]'>Chef & Founder</p>
          <img className='w-[200px] object-cover' src="/Kevin Luo.png" alt="Kevin-Luo-Signature" />
        </div>
        <img className='w-full h-[300px] object-cover border-lightBrown border-l-[15px] border-b-[15px] lg:h-[500px] lg:w-[500px]' src="/pexels-ron-lach-8879653 1.png" alt="Main-Chef" />
      </div>
    </section>
  )
}

export default Belief;