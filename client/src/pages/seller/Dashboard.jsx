import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";


const Dashboard = () => {
  const { axios, currency } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    paidOrders: 0,
  });

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);

        // Calculate dashboard stats
        const totalOrders = data.orders.length;
        const totalRevenue = data.orders.reduce(
          (sum, order) => sum + order.amount,
          0
        );
        const pendingOrders = data.orders.filter((o) => !o.isPaid).length;
        const paidOrders = data.orders.filter((o) => o.isPaid).length;

        setStats({ totalOrders, totalRevenue, pendingOrders, paidOrders });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Bookings */}
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 border border-gray-100">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <img src={assets.cart_icon} alt="orders" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Total Orders</p>
            <h2 className="text-xl font-bold">{stats.totalOrders}</h2>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 border border-gray-100">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <img src={assets.money} alt="money" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold">{currency}{stats.totalRevenue}</h2>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 border border-gray-100">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
            <img src={assets.user} alt="Dashboard Icon" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Paid Orders</p>
            <h2 className="text-xl font-bold">{stats.paidOrders}</h2>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 border border-gray-100">
          <div className="bg-red-100 text-red-600 p-3 rounded-full">
            <img src={assets.pendingicon} alt="Dashboard Icon" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Pending Orders</p>
            <h2 className="text-xl font-bold">{stats.pendingOrders}</h2>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
        <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          {/* You can integrate Recharts or Chart.js here */}
          Chart will be updated soon!
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
