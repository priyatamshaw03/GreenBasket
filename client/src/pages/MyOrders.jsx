import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, user, axios } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");

      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
  <div className="mt-16 pb-16">
    <div className="flex flex-col items-end w-max mb-8">
      <p className="text-2xl font-medium uppercase">My Orders</p>
      <div className="w-16 h-1 bg-green-500 rounded-full"></div>
    </div>

    {/* ✅ Show message if there are no orders */}
    {myOrders.length === 0 ? (
      <p className="text-green-500 text-lg md:text-5xl flex justify-center text-center min-h-50 items-center ">No orders yet!</p>
    ) : (
      myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
            <span>OrderId : {order._id}</span>
            <span>Payment : {order.paymentType}</span>
            <span className="text-green-500 text-lg font-medium">
              Total Amount : {currency}
              {order.amount}
            </span>
          </p>

          {order.items.map((item, index) =>
            item.product ? (
              <div
                key={index}
                className={`relative bg-white text-gray-500/70 ${
                  order.items.length !== index + 1 && "border-b"
                } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <img
                      src={item.product.image?.[0] || "https://via.placeholder.com/100?text=No+Image"}
                      alt={item.product.name || "Product"}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.product.name}
                    </h2>
                    <p>Category : {item.product.category}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                  <p>Quantity : {item.quantity || "1"}</p>
                  <p>Status : {order.status}</p>
                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="text-black/60 text-lg font-medium">
                  Amount : {currency}
                  {item.product.offerPrice * item.quantity}
                </p>
              </div>
            ) : null
          )}
        </div>
      ))
    )}
  </div>
);

};

export default MyOrders;
