import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative'>
        <img src={assets.main_banner_bg} alt="" className='w-full rounded-xl hidden md:block'/>
        <img src={assets.main_banner_bg_sm} alt="" className='w-full md:hidden'/>

        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-78 md:max-w-80 lg:max-w-135 leading-tight lg:leading-16 '>Freshness you can Trust, Savings You will Love!</h1>
       
        <div className='flex items-center mt-6 font-medium'>
            <Link to='/products' className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 transition rounded-full text-white cursor-pointer'>Shop now
            <img src={assets.white_arrow_icon} alt="" className='md:hidden transition group-focus:translate-x-1'/>
            </Link>

            <Link to='/products' className='group md:flex items-center gap-2 px-6 py-3 hidden border cursor-pointer rounded-full mx-4'>Explore deals
            <img src={assets.black_arrow_icon} alt="" className='transition group-hover:translate-x-1'/>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Banner