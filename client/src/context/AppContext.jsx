import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showuserlogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartitems, setCartitems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  //fetch seller status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  //fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // fetch user auth status ,user Data and cart items
  const fetchUser = async () => {
    try {
            const {data} = await axios.get('/api/user/is-auth');
            if(data.success){
              setUser(data.user)
              setCartitems(data.user.cartitems)
            }
        } catch (error) {
            setUser(null)
            
        } 
  }
  
  //add product to cart
  const addTocart = (itemId) => {
    let cartData = structuredClone(cartitems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartitems(cartData);
    toast.success("Added to Cart");
  };
  //update cart item quantity
  const updateCartitem = (itemId, quantity) => {
    let cartData = structuredClone(cartitems);
    cartData[itemId] = quantity;
    setCartitems(cartData);
    toast.success("Cart updated");
  };
  //add product to cart
  const removeFromcart = (itemId) => {
    let cartData = structuredClone(cartitems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart");
    setCartitems(cartData);
  };
  //cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartitems) {
      totalCount += cartitems[item];
    }
    return totalCount;
  };
  //cart total amount
  const getCartamount = () => {
    let totalAmount = 0;
    for (const items in cartitems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartitems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartitems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchSeller();
    fetchProducts();
    fetchUser();
  }, []);

  // update database cart items
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartitems })
        if (!data.success) {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

    if (user) {
      updateCart()
    }
  }, [cartitems])

  const value = {navigate, user, setUser, setIsSeller, isSeller,
    showuserlogin, setShowUserLogin, products, currency, addTocart, updateCartitem, removeFromcart, cartitems, searchQuery, setSearchQuery, getCartamount, getCartCount, axios, fetchProducts, setCartitems}

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
