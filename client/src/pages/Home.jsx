import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Bestseller from '../components/Bestseller'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'


const Home = () => {
  return (
    
    <div className='mt-10'>
        <Banner/>
        <Categories/>
        <Bestseller/>
        <BottomBanner/>
        <Testimonial/>
        <Newsletter/>
        <CallToAction/>
    </div>
  )
}

export default Home