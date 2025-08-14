import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around text-sm border border-gray-200 rounded-2xl m-auto max-w-5xl w-full bg-green-500/10">
                
            <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                <h2 className="md:text-4xl text-2xl font-bold text-gray-800">Boost your productivity.<br />Start using our app today.</h2>
        
                <div className="flex items-center gap-4 mt-6">
                    <Link to='/products' type="button" aria-label="getStarted" className="bg-green-500 hover:bg-green-600 px-7 py-2.5 text-white rounded-full active:scale-95 transition-all">
                        Get started
                    </Link>
                    <Link to='/about' type="button" className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition">
                        Learn more
                        <img src={assets.black_arrow_icon} alt="" className='mt-1 group-hover:translate-x-0.5 transition-all'/>
                    </Link>
                </div>
            </div>
        
            <img className="max-w-[375px] pt-10 md:p-0" src={assets.excitedWomenImage} alt="excitedWomenImage" />
        </div>
  )
}

export default CallToAction