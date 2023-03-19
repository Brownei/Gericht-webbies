import React from 'react'

const Laurels = () => {
  return (
   <section className='bg-[#0C0C0C] mt-[100px] lg:mt-[150px]'>
    <div className='container mx-auto p-6'>
      <video className='max-h-[500px] w-full object-cover' autoPlay muted loop controls>
        <source src='/pexels-bonus-studio-5498709.mp4' type='video/mp4' />
      </video>
      <div className='relative mt-[100px] lg:mt-[150px]'>
        <div className='flex flex-col-reverse items-center space-x-[150px] mt-[40px] lg:mt-[20px] lg:flex-row'>
          <div>
            <p className='font-san font-bold text-[19px] leading-[29.9px]'>Awards & Recognition</p>
            <img className='w-[35px]' src="/public/Vector2.png" alt="spoon" />
            <h3 className='font-semibold leading-[83.2px] text-[50px] text-lightBrown'>Our Laurels</h3>
            <div className='max-h-[300px] max-w-[500px] p-5 grid grid-cols-2 items-center gap-4'>
              <div className='flex space-x-3 items-center'>
                <span className='p-5 rounded-full text-[22px]'>2</span>
                <div>
                  <h6 className='text-lightBrown text-[17px] font-bold'>Bib Gourmond</h6>
                  <p className='text-[#AAAAAA] text-[14px] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div className='flex space-x-3 items-center'>
                <span className='p-5 rounded-full text-[22px]'>5</span>
                <div>
                  <h6 className='text-lightBrown text-[17px] font-bold'>AA Hospitality</h6>
                  <p className='text-[#AAAAAA] text-[14px] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div className='flex space-x-3 items-center'>
                <span className='p-5 rounded-full text-[22px]'>1</span>
                <div>
                  <h6 className='text-lightBrown text-[17px] font-bold'>Rising Star</h6>
                  <p className='text-[#AAAAAA] text-[14px] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div className='flex space-x-3 items-center'>
                <span className='p-5 rounded-full text-[22px]'>3</span>
                <div>
                  <h6 className='text-lightBrown text-[17px] font-bold'>Outstanding Chef</h6>
                  <p className='text-[#AAAAAA] text-[14px] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img className='w-full h-[300px] object-cover border-lightBrown lg:h-[600px]' src="/mgg-vitchakorn-J5ZivsKiu9c-unsplash 2.png" alt="Teaser-food" />
            <img className='absolute top-[100px] left-3 lg:top-[230px] lg:-left-[50px]' src="/G-white.png" alt="" />
          </div>
        </div>
        <div className='absolute top-3 left-2'>
          <div className='relative'>
            <img src="/Vector.png" alt="" />
            <img className='absolute top-0' src="/Vector3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Laurels;