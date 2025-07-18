import { React, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { auth } from "./firebase";

const Login = () => {

  const {setShowUserLogin, setUser, axios, navigate}=useAppContext()

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //login logic
      const {data} = await axios.post(`/api/user/${state}`, {name, email, password})
      if(data.success){
        setUser(data.user)
        toast.success('Logged in')
        navigate('/')
        setShowUserLogin(false)
      }
      else{
        toast.error(data.message)
      } 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div onClick={()=> setShowUserLogin(false)} className="flex items-center fixed top-0 bottom-0 left-0 right-0 z-30 text-sm text-gray-600 bg-black/50 backdrop-blur-xs">

      <form onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-xl shadow-xl border border-gray-200 bg-white">
        <div className="flex flex-col items-center m-auto">
        <img src={assets.logo} alt="logo" className="h-10"/>
        </div>
        <p className="text-3xl font-medium m-auto">
          <span className="text-green-500">User </span>
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <p className="px-2">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="enter your name"
              className="border border-gray-200 rounded-full w-full px-4 py-2.5 mt-1 outline-green-500"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
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
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-green-500 cursor-pointer"
            >
              signin
            </span>
          </p>
        ) : (
          <p>
            Don’t have an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-green-500 cursor-pointer"
            >
              Signup
            </span>
          </p>
        )}
        <button className="bg-green-500 hover:bg-green-600 transition-all text-white w-full py-2.5 rounded-full cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
        {state === "login" && (
          <>
            <div className="flex items-center gap-4 w-full my-2">
              <div className="w-full h-px bg-gray-300/90"></div>
              <p className="w-full text-nowrap text-sm text-gray-500/90">
                or continue with
              </p>
              <div className="w-full h-px bg-gray-300/90"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center gap-2 justify-center bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 hover:bg-green-500/10 cursor-pointer"
            >
              <img
                className="h-4 w-4 "
                src={assets.googleFavicon}
                alt="googleFavicon"
              />
              Google
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
