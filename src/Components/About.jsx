import React from 'react';

const About = () => {
  return (
    <section className='relative'>
      <div className='flex flex-col justify-center space-x-6 container mx-auto p-6 items-center mt-[100px] lg:mt-[150px] lg:p-1 lg:max-w-[1126px] lg:max-h-[1688px] lg:flex-row'>
        <div className='p-4 flex flex-col items-center lg:items-end lg:text-end'>
          <h2 className='font-semibold text-[50px] leading-[83.2px] text-lightBrown'>About Us</h2>
          <img className='w-[35px]' src="Vector2.png" alt="spoon" />
          <p className='my-[20px] text-[#AAAAAA] leading-[28px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='mt-[20px] shadow-lg px-[30px] py-[8px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>Know More</button>
        </div>
        <img className='hidden h-[603px] lg:block' src="/savernake-knives-f4jl2ezowuM-unsplash 2.png" alt="big-knife" />
        <div className='p-4 flex flex-col items-center lg:items-start lg:text-start'>
          <h2 className='font-semibold text-[50px] leading-[83.2px] text-lightBrown'>Our History</h2>
          <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
          <p className='my-[20px] text-[#AAAAAA] leading-[28px] text-[14px]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button className='mt-[20px] shadow-lg px-[30px] py-[8px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>Know More</button>
        </div>
        <img className='absolute -z-10 h-[403px]' src="/G.png" alt="Giant-logo-G" />
      </div>
    </section>
  )
}

export default About