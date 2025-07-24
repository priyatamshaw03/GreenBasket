import React from 'react'
import { assets } from '../assets/assets'
import { features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
        <img src={assets.bottom_banner_image} alt="" className='w-full hidden md:block'/>
        <img src={assets.bottom_banner_image_sm} alt="" className='w-full md:hidden'/>
        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-20 lg:pr-52'>
          <div>
            <h1 className='text-2xl md:text2xl lg:text-3xl font-semibold text-green-500 mb-6 md:mb-0'>Why we are the Best ?</h1>
            {features.map((feature, index)=>(
              <div key={index} className='flex items-center gap-4 mt-2'>
                <img src={feature.icon} alt="" className='md:w-9 lg:w-11 w-9'/>
                
                <div>
                <h3 className='text-lg md:text-sm lg:text-xl font-semibold'>{feature.title}</h3>
                <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
              </div>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default BottomBanner