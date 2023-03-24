import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <nav>
      <div className='container mx-auto px-10 py-4 z-20 flex justify-between items-center bg-black/95 shadow-xl text-white'>
        <Link className='text-[30px] font-bold font-san' to='/'>Gerícht</Link>
        <div className='hidden items-center space-x-[32px] text-[14px] leading-[28px] lg:flex'>
         <Link className='hover:scale-105 hover:text-lightBrown focus:text-lightBrown focus:font-semibold focus:scale-105 hover:font-semibold' to='/'> Home</Link>
         <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/explore'> Explore</Link>
         <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/contact-us'> Contact</Link>
         <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/landing'> Landing</Link>
        </div>
        <div className='hidden items-center space-x-[50px] text-[14px] leading-[28px] lg:flex'>
          <div>
            <p className='tracking-wide'>
              <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/sign-in'> Log in</Link>
              <span className='mx-1'>/</span>
              <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/sign-up'> Registration</Link>
            </p>
          </div>
          <div className='p-0.5 bg-slate-700 w-fit h-5 rounded-lg text-[14px] leading-[28px]' />
          <Link className='hover:scale-105 hover:text-lightBrown hover:font-semibold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/book-table'> Book Table</Link>
        </div> 

        {/* Mobile Menu */}
        <div className='flex lg:hidden'>
          {toggleMenu 
            ? < HiBars3BottomLeft fontSize={25} className='cursor-pointer' onClick={() => {setToggleMenu(false)}} />
            : (
              <div className='fixed top-0 right-0 flex flex-col h-screen w-[50vh] text-[14px] leading-[28px] bg-[#0C0C0C] z-20 text-white shadow-2xl duration-300'>
                < RxCross2 fontSize={25} className='fixed right-6 top-5 cursor-pointer' onClick={() => {setToggleMenu(true)}}/>
                <div className='flex flex-col space-y-7 items-center mt-24'>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/' onClick={() => {setToggleMenu(true)}}> Home</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/explore' onClick={() => {setToggleMenu(true)}}> Explore</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/contact-us' onClick={() => {setToggleMenu(true)}}> Contact</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/landing' onClick={() => {setToggleMenu(true)}}> Landing</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/sign-in' onClick={() => {setToggleMenu(true)}}> Log in</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/sign-up' onClick={() => {setToggleMenu(true)}}> Registration</Link>
                  <Link className='font-medium hover:scale-105 hover:text-lightBrown hover:font-bold focus:text-lightBrown focus:font-semibold focus:scale-105' to='/book-table' onClick={() => {setToggleMenu(true)}}> Book Table</Link>
                </div>
              </div>
            )
          }
          {toggleMenu 
            ? ''
            : ( <div className='w-screen h-screen fixed top-0 left-0 bg-black/60'/>)
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;