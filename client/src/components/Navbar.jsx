import React, { useEffect} from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
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

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
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
        <NavLink className="hover:text-green-500 transition" to="/contact">
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-4 rounded-full focus-within:ring-1 focus-within:ring-green-400 transition-all">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

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
      <div className="flex gap-6 items-center sm:hidden">
        <div className="max-w-30 flex items-center justify-center">
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
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="menu" />
        </button>
      </div>

      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-md md:hidden z-50`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Products
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact us
          </NavLink>

          {user && (
            <>
            <NavLink to="/my-orders" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
            <NavLink to="/edit-profile" onClick={() => setShowDropdown(false)}>
              Edit Profile
            </NavLink>
            </>
          )}
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-1.5 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-md"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
