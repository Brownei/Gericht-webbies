import React from 'react';
import { Link } from 'react-router-dom';

const Specials = () => {
  return (
    <section className='container relative mx-auto p-6'>
      <div className='mt-[100px] lg:mt-[150px]'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-san font-bold text-[19px] leading-[29.9px]'>Menu That Fits You Palatte</p>
          <img className='w-[35px]' src="/Vector2.png" alt="spoon" />
          <h2 className='font-semibold text-[50px] leading-[83.2px] text-lightBrown mb-[50px]'>Today’s Special</h2>
          <div className='flex flex-col justify-center items-center space-x-10 lg:flex-row'>
            <div className='flex flex-col space-y-[15px]'>
              <h3 className='leading-[58.5px] font-semibold text-[30px] text-center'>Wine & Beer</h3>
                <div className='flex flex-col justify-start'>
                  <div className='flex items-center justify-between space-x-10'>
                    <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Chapel Hill Shiraz</h5>
                    <div className='border bg-[#FAFAFA] w-[90px]'/>
                    <span className='font-bold text-[17px]'>$56</span>
                  </div>
                  <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>AU | Bottle</p>
                </div>
                <div className='flex flex-col justify-start'>
                  <div className='flex items-center justify-between space-x-10'>
                    <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Catena Malbec</h5>
                    <div className='border bg-[#FAFAFA] w-[90px]'/>
                    <span className='font-bold text-[17px]'>$59</span>
                  </div>
                  <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>AR | Bottle</p>
                </div>
                <div className='flex flex-col justify-start'>
                  <div className='flex items-center justify-between space-x-10'>
                    <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>La Vieille Rosé</h5>
                    <div className='border bg-[#FAFAFA] w-[90px]'/>
                    <span className='font-bold text-[17px]'>$44</span>
                  </div>
                  <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>FR | 750 ml</p>
                </div>
                <div className='flex flex-col justify-start'>
                  <div className='flex items-center justify-between space-x-10'>
                    <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Rhino Pale Ale</h5>
                    <div className='border bg-[#FAFAFA] w-[90px]'/>
                    <span className='font-bold text-[17px]'>$31</span>
                  </div>
                  <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>CA | 750 ml</p>
                </div>
                <div className='flex flex-col justify-start'>
                  <div className='flex items-center justify-between space-x-10'>
                    <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Irish Guinness</h5>
                    <div className='border bg-[#FAFAFA] w-[90px]'/>
                    <span className='font-bold text-[17px]'>$26</span>
                  </div>
                  <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>IE | 750 ml</p>
                </div>
            </div>
            <img className='hidden h-[444px] object-cover lg:block' src="/3596233 1.png" alt="cocktails" />
            <div className='flex flex-col space-y-[15px]'>
              <h3 className='leading-[58.5px] font-semibold text-[30px] text-center'>Cocktails</h3>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-between space-x-10'>
                  <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Aperol Spritz</h5>
                  <div className='border bg-[#FAFAFA] w-[90px]'/>
                  <span className='font-bold text-[17px]'>$20</span>
                </div>
                <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
              </div>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-between space-x-10'>
                  <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Dark 'N' Stormy</h5>
                  <div className='border bg-[#FAFAFA] w-[90px]'/>
                  <span className='font-bold text-[17px]'>$16</span>
                </div>
                <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>Dark rum | Ginger beer | Slice of lime.</p>
              </div>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-between space-x-10'>
                  <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Daiquiri</h5>
                  <div className='border bg-[#FAFAFA] w-[90px]'/>
                  <span className='font-bold text-[17px]'>$10</span>
                </div>
                <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>Rum | Citrus juice | Sugar</p>
              </div>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-between space-x-10'>
                  <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Old Fashioned</h5>
                  <div className='border bg-[#FAFAFA] w-[90px]'/>
                  <span className='font-bold text-[17px]'>$31</span>
                </div>
                <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>Bourbon | Brown sugar | Angostura Bitters</p>
              </div>
              <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-between space-x-10'>
                  <h5 className='text-lightBrown font-san font-bold text-[19px] leading-[29.9px]'>Negroni</h5>
                  <div className='border bg-[#FAFAFA] w-[90px]'/>
                  <span className='font-bold text-[17px]'>$26</span>
                </div>
                <p className='text-[13px] leading-[28px] text-[#AAAAAA]'>Gin | Sweet Vermouth | Campari | Orange garnish</p>
              </div>
            </div>
          </div>
          <Link to='/explore' className='mt-[35px] shadow-lg px-[30px] py-[8px] text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80'>View More</Link>
        </div>
      </div>
    </section>
  )
}

export default Specials;