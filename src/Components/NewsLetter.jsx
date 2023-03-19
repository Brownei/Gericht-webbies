import React, { useState } from 'react'

const NewsLetter = () => {

  const [mail, setMail] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setMail('');
  }

  return (
    <section className='container mx-auto p-6 w-fit bg-[#0C0C0C]'>
        <div className='flex flex-col space-y-1 justify-center items-center px-6 py-3 lg:py-6 lg:px-[100px]'>
            <p className='font-san font-bold text-[19px] leading-[29.9px]'>Newsletter</p>
            <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
            <h3 className=' font-semibold text-[30px] leading-[83.2px] mt-[5px] mb-[10px] text-lightBrown lg:text-[50px] lg:leading-[117px]'>Subscribe To Our Newsletter</h3>
            <p className='leading-[28px] text-[#AAAAAA]'>And never miss latest Updates!</p>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-1 items-center justify-center space-x-3 lg:flex-row lg:space-x-3 lg:space-y-0'>
                <input className='w-[300px] h-[40px] p-5 border bg-transparent font-san lg:w-[600px]' type="email" placeholder='Email Address' value={mail} onChange={(e) => setMail(e.target.value)} />
                <button className='mt-[20px] shadow-lg px-[30px] py-[6px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default NewsLetter;