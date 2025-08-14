import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import { useAppContext } from "./context/AppContext"
import Login from "./components/Login"
import AllProducts from "./pages/AllProducts"
import ProductCategory from "./pages/ProductCategory"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import AddAddress from "./pages/AddAddress"
import MyOrders from "./pages/MyOrders"
import Contact from "./pages/Contact"
import Sellerlogin from "./components/seller/Sellerlogin"
import SellerLayout from "./pages/seller/SellerLayout"
import AddProduct from "./pages/seller/AddProduct"
import ProductList from "./pages/seller/ProductList"
import Orders from "./pages/seller/Orders"
import EditProfile from "./pages/EditProfile"
import About from "./pages/About"
import Dashboard from "./pages/seller/Dashboard"



function App() {
  
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showuserlogin, isSeller}=useAppContext()

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null: <Navbar/>}
      {showuserlogin ? <Login/> : null}

      <Toaster/>
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/products/:category" element={<ProductCategory/>}/>
          <Route path="/products/:category/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/add-address" element={<AddAddress/>}/>
          <Route path="/my-orders" element={<MyOrders/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/seller" element={isSeller ? <SellerLayout/> : <Sellerlogin/>}>
            <Route index element={isSeller ? <Dashboard/> : null}/>
            <Route path="add-product" element={<AddProduct/>}/>
            <Route path="product-list" element={<ProductList/>}/>
            <Route path="orders" element={<Orders/>}/>
            </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
