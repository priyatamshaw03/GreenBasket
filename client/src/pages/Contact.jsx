import React from 'react'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='mt-16 flex flex-col-reverse md:flex-row justify-between'>
        <form className="flex flex-col items-center text-sm text-slate-800 ">
            <p className="text-sm bg-green-200 text-green-600 font-medium px-4 py-2 rounded-full">Contact Us</p> 
            <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
                Or just reach out manually to us at <a href="#" className="text-green-600 hover:underline">greenbasket@gmail.com</a>
            </p>
            
            <div className="max-w-96 w-full px-4">
                <label htmlFor="name" className="font-medium">Full Name</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
                    <img src={assets.user_icon} alt="" />
                    <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
                </div>
        
                <label htmlFor="email-address" className="font-medium mt-4">Email Address</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
                    <img src={assets.email_icon} alt="" />
                    <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                </div>
        
                <label htmlFor="message" className="font-medium mt-4">Message</label>
                <textarea rows="4" className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-green-400 transition-all" placeholder="Enter your message" required></textarea>
                
                <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-green-500 hover:bg-green-600 text-white py-2.5 w-full rounded-full transition">
                    Submit
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </form>
        <img src={assets.contact_us} alt="contact" className='md:mr-16 mb-16 md:mt-0 sm:w-1/2 md:max-w-xl' />
    </div>
    );
}

export default Contact