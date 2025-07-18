import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Bestseller from '../components/Bestseller'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <div className='mt-10'>
        <Banner/>
        <Categories/>
        <Bestseller/>
        <BottomBanner/>
        <Testimonial/>
        <Newsletter/>
    </div>
  )
}

export default Home