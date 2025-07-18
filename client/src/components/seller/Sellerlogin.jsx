import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Sellerlogin = () => {
  const { isSeller, setIsSeller, navigate, axios} = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmithandler = async (e) =>{
    try {
      e.preventDefault();
      const {data} = await axios.post('/api/seller/login', {email, password})
      if(data.success){
        setIsSeller(true)
        toast.success('Logged in')
        navigate('/seller')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (isSeller){
      navigate('/seller')
    }
  }, [isSeller])

  return !isSeller && (
      <form onSubmit={onSubmithandler}
        className="min-h-screen flex items-center text-sm text-gray-600">
        <div className="flex flex-col gap-4 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-xl shadow-xl border border-gray-200 bg-white/40">
          <p className="text-3xl font-medium m-auto">
            <span className="text-green-500">Seller </span>Login
          </p>
          <p className="flex items-center justify-center px-4">Welcome back! Please login to continue</p>
        <div className="w-full mt-6">
          <p className="px-2">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="enter your email"
            className="border border-gray-200 rounded-full w-full px-4 py-2.5 mt-1 outline-green-500"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p className="px-2">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
            className="border border-gray-200 rounded-full w-full px-4 py-2.5 mt-1 outline-green-500"
            type="password"
            required
          />
        </div>
        <button className="bg-green-500 hover:bg-green-600 transition-all text-white w-full mt-6 py-3 rounded-full cursor-pointer ">Login</button>
        </div>

      </form>
    )
};

export default Sellerlogin;
