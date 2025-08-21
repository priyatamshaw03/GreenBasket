import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false); // mobile profile dropdown
  const profileRef = useRef(null); // reference for profile dropdown

  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
      {/* Logo (Desktop left) */}
      <NavLink to="/" onClick={() => setOpen(false)} className="hidden sm:block">
        <img src={assets.logo} alt="logo" className="h-7 md:h-10" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink className="hover:text-green-500 transition" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-green-500 transition" to="/products">
          All Products
        </NavLink>
        <NavLink className="hover:text-green-500 transition" to="/about">
          About
        </NavLink>
        <NavLink className="hover:text-green-500 transition" to="/contact">
          Contact
        </NavLink>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-4 rounded-full focus-within:ring-1 focus-within:ring-green-400 transition-all">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {/* Profile / Login */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="profile" className="w-10" />
            {/* Desktop hover dropdown */}
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-35 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-green-500/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={() => navigate("edit-profile")}
                className="p-1.5 pl-3 hover:bg-green-500/10 cursor-pointer"
              >
                Edit Profile
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-red-500/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center justify-between sm:hidden w-full">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex items-center"
          >
            <img src={assets.menu_icon} alt="menu" className="w-6 h-6" />
          </button>
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img src={assets.logo} alt="logo" className="h-7" />
          </NavLink>

        </div>

        {/* Center: Search */}
        <div className="flex-1 mx-3">
          <div className="flex items-center border border-gray-300 px-3 rounded-full focus-within:ring-1 focus-within:ring-green-400 transition-all">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none text-sm placeholder-gray-500"
              type="text"
              placeholder="Search"
            />
            <img src={assets.search_icon} alt="search" className="w-4 h-4" />
          </div>
        </div>

        {/* Right: Cart + Profile */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>

          {/* Profile / Login */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer text-sm bg-green-500 text-white px-4 py-1.5 rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative" ref={profileRef}>
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-8 h-8 cursor-pointer"
                onClick={() => setProfileOpen(!profileOpen)}
              />
              {profileOpen && (
                <ul className="absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-35 rounded-md text-sm z-40">
                  <li
                    onClick={() => {
                      navigate("my-orders");
                      setProfileOpen(false);
                    }}
                    className="p-1.5 pl-3 hover:bg-green-500/10 cursor-pointer"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => {
                      navigate("edit-profile");
                      setProfileOpen(false);
                    }}
                    className="p-1.5 pl-3 hover:bg-green-500/10 cursor-pointer"
                  >
                    Edit Profile
                  </li>
                  <li
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                    }}
                    className="p-1.5 pl-3 hover:bg-red-500/10 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
{open && (
  <>
    {/* Overlay (click outside to close) */}
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setOpen(false)}
    ></div>

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-6">
        <img src={assets.logo} alt="logo" className="h-8" />
        <button onClick={() => setOpen(false)}>
          <img src={assets.close_icon} alt="close" className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col py-4 gap-4 text-md">
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Products
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </NavLink>
      </nav>
    </div>
  </>
)}

    </nav>
  );
};

export default Navbar;
