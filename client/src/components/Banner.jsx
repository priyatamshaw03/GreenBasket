import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative'>
        <img src={assets.hero} alt="" className='w-full rounded-2xl hidden md:block '/>
        <img src={assets.hero1} alt="" className='w-full rounded-2xl md:hidden -mt-6'/>

        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            <h1 className='text-4xl md:text-3xl lg:text-5xl font-bold text-center md:text-left max-w-78 md:max-w-70 lg:max-w-135 leading-tight lg:leading-16 '>Fresh Groceries For A Healthy Lifestyle!</h1>
            <p className='text-sm md:text-md bg-green-100 text-green-600 font-medium px-4 py-2 rounded-full text-center mt-4 mb-1'>Discover a World of flavours at your Fingertips.</p>
       
        <div className='flex items-center mt-6 font-medium'>
            <Link to='/products' className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 transition rounded-full text-white cursor-pointer'>Shop now
            <img src={assets.white_arrow_icon} alt="" className='md:hidden transition group-focus:translate-x-1'/>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Banner