import React from 'react'

const PhotoGallery = () => {
  return (
    <section className='container mx-auto p-6'>
      <div className='flex items-center space-x-3 mt-[100px] lg:mt-[150px]'>
        <div className='border lg:max-w-[400px] p-6'>
          <p className='font-san font-bold text-[19px] leading-[29.9px]'>Instagram</p>
          <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
          <h2 className='font-semibold text-[50px] leading-[83.2px] text-lightBrown mb-[30px]'>Photo Gallery</h2>
          <p className='leading-[28px] text-[#AAAAAA] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <a href='/' className='shadow-lg px-[40px] py-[10px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>View More</a>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default PhotoGallery;