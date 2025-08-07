import React, { useState } from 'react'
import { assets } from '../assets/assets'
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

// Reusable input component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded-lg outline-none text-gray-500 focus:border-green-500 transition mb-4'
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    required
  />
)

const AddAddress = () => {
  const {axios,user,navigate} = useAppContext()
  // Address state
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // Handle form submission
  const Submithandler = async (e) => {
    try {
      e.preventDefault();
      
       const { data } = await axios.post("/api/address/add", {address, userId: user._id});
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, [])
  

  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add Shipping <span className='font-semibold text-green-500'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md border p-10 rounded-2xl border-gray-300'>
          <form onSubmit={Submithandler} className='flex flex-col'>

            <div className='grid grid-cols-2 gap-4'>
            <InputField handleChange={handleChange} address={address} name='firstName' type='text' placeholder='First Name' />
            <InputField handleChange={handleChange} address={address} name='lastName' type='text' placeholder='Last Name' />
            </div>

            <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder='Email' />
            <InputField handleChange={handleChange} address={address} name='phone' type='tel' placeholder='Phone Number' />
            <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder='Street' />

            <div className='grid grid-cols-2 gap-4'>
            <InputField handleChange={handleChange} address={address} name='city' type='text' placeholder='City' />
            <InputField handleChange={handleChange} address={address} name='state' type='text' placeholder='State' />
            </div>

            <div className='grid grid-cols-2 gap-4'>
            <InputField handleChange={handleChange} address={address} name='zipcode' type='text' placeholder='Zipcode' />
            <InputField handleChange={handleChange} address={address} name='country' type='text' placeholder='Country' />
            </div>

            <button type='submit' className='bg-green-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-green-600 transition'>
              Save Address
            </button>
          </form>
        </div>
        <img src={assets.add_address_iamge} alt="Add Address" className='zmb-16 md:mt-0 w-full sm:w-1/2 sm:ml-2 md:max-w-xl' />
      </div>
    </div>
  );
};

export default AddAddress;
