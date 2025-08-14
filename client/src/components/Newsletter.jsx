import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Newsletter = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email format check
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate subscription API or logic
    toast.success('Subscribed successfully!');
    setEmail(''); 
  };

  return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-16 pb-12">
            <h1 className="md:text-4xl text-3xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input 
                    className="border border-green-500 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="email"
                    value={email}
                    placeholder="Enter your email id"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-green-500 hover:bg-green-600 transition-all cursor-pointer rounded-md rounded-l-none">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Newsletter