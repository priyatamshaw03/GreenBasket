import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Dashboard = () => {
  const { axios, currency } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    unpaidOrders: 0,
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
        const unpaidOrders = data.orders.filter((o) => !o.isPaid).length;
        const paidOrders = data.orders.filter((o) => o.isPaid).length;

        setStats({ totalOrders, totalRevenue, unpaidOrders, paidOrders });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

// Group orders by month for sales trend
const salesData = orders.reduce((acc, order) => {
  const month = new Date(order.createdAt).toLocaleString("default", { month: "short" });
  if (!acc[month]) acc[month] = { month, revenue: 0, orders: 0 };
  acc[month].revenue += order.amount;
  acc[month].orders += 1;
  return acc;
}, {});
const chartData = Object.values(salesData);

// Pie chart data (Paid vs Unpaid)
const paymentData = [
  { name: "Paid Orders", value: stats.paidOrders },
  { name: "Unpaid Orders", value: stats.unpaidOrders },
];

// Bar chart data (Overview)
const overviewData = [
  { name: "Orders", value: stats.totalOrders },
  { name: "Revenue", value: stats.totalRevenue },
  { name: "Paid", value: stats.paidOrders },
  { name: "Unpaid", value: stats.unpaidOrders },
  // If you later fetch products/customers, add here:
  // { name: "Products", value: totalProducts },
  // { name: "Customers", value: totalCustomers },
];

const COLORS = ["#4F46E5", "#22C55E", "#F43F5E", "#F59E0B"];


  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[93vh] overflow-y-scroll">
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Bookings */}
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 border border-gray-100">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <img src={assets.parcel_icon} alt="orders" className="w-6 h-6" />
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
            <h2 className="text-xl font-bold">{currency} {stats.totalRevenue}</h2>
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
            <p className="text-gray-500">Unpaid Orders</p>
            <h2 className="text-xl font-bold">{stats.unpaidOrders}</h2>
          </div>
        </div>
      </div>

      {/* Chart Section */}

{/* Charts Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
  {/* Line Chart - Revenue Trend */}
  <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
    <h2 className="text-lg font-bold mb-4">Revenue Trend</h2>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} />
          <Line type="monotone" dataKey="orders" stroke="#22C55E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Pie Chart - Paid vs Unpaid */}
  <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
    <h2 className="text-lg font-bold mb-4">Payment Breakdown</h2>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={paymentData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {paymentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Bar Chart - Overview */}
  <div className="bg-white shadow rounded-xl p-6 border border-gray-100 col-span-1 lg:col-span-2">
    <h2 className="text-lg font-bold mb-4">Overview Metrics</h2>
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={overviewData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#22C55E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>


    </div>
    </div>
  );
};

export default Dashboard;
