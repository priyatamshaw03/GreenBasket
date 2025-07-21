import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const Bestseller = () => {
    const {products} = useAppContext();
  return (
    <div id='bestseller' className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Bestseller</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
        {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
            <ProductCard key={index} product={product}/>
        ))}
        
        </div>
    </div>
  )
}

export default Bestseller