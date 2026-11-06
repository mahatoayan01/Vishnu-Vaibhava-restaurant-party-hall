import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  ShoppingBag,
  IndianRupee,
  Clock,
  Search,
  Filter,
  LogOut,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Truck,
  Utensils,
  CreditCard,
  Building2,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { demoChartData } from '../data/sampleOrders';

export default function OwnerDashboard() {
  const { logout, orders, transactions, updateOrderStatus, resetOrders } = useAuth();
  const navigate = useNavigate();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'payments' | 'analytics'

  const handleLogout = () => {
    logout();
    navigate('/owner-login');
  };

  // Metrics calculation
  const totalOrdersCount = orders.length;
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === 'Paid')
    .reduce((acc, o) => acc + o.amount, 0);

  const pendingOrdersCount = orders.filter(
    (o) => o.orderStatus === 'New' || o.orderStatus === 'Preparing'
  ).length;

  const todayOrdersCount = orders.filter((o) =>
    o.date.includes('2026-11-06') || o.date.includes(new Date().toISOString().split('T')[0])
  ).length;

  // Filtered orders list
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        order.id.toLowerCase().includes(q) ||
        order.customerName.toLowerCase().includes(q) ||
        (order.phone && order.phone.includes(q));

      const matchesStatus =
        statusFilter === 'All' || order.orderStatus === statusFilter;

      const matchesType =
        typeFilter === 'All' || order.orderType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [orders, searchQuery, statusFilter, typeFilter]);

  // Order status badge colours
  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Preparing':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Out for delivery':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Warning Banner Required by Specification */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-400 text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-semibold">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <span>
            Demo Data Notice: This dashboard displays sample orders and checkout demo orders stored locally in your browser.
          </span>
        </div>
        <button
          onClick={resetOrders}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 hover:bg-amber-100/60 font-semibold text-xs text-amber-900 transition-colors shadow-xs flex-shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Demo Data
        </button>
      </div>

      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
              Vishnu Vaibhava Management Console
            </h1>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
              Live Demo
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            RR Nagar Branch • Real-time order pipeline and daily billing metrics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-gray-800">Branch Manager (Demo)</p>
            <p className="text-[11px] text-gray-500">owner@demo.com</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 text-xs font-semibold transition-colors border border-gray-300"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Orders */}
        <div className="bg-white rounded-2xl p-5 shadow-soft border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Total Orders</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
            {totalOrdersCount}
          </p>
          <p className="text-[11px] text-emerald-700 font-medium">
            Includes checkout test orders
          </p>
        </div>

        {/* Today's Orders */}
        <div className="bg-white rounded-2xl p-5 shadow-soft border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Today's Orders</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-emerald-800">
            {todayOrdersCount}
          </p>
          <p className="text-[11px] text-gray-500">
            Current operating day
          </p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-2xl p-5 shadow-soft border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Total Revenue</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-amber-900">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </p>
          <p className="text-[11px] text-gray-500">
            Settled via UPI, Card & Cash
          </p>
        </div>

        {/* Pending Orders */}
        <div className="bg-white rounded-2xl p-5 shadow-soft border border-gray-200 space-y-2">
          <div className="flex items-center justify-between text-gray-500 text-xs">
            <span>Active / Pending</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-rose-700">
            {pendingOrdersCount}
          </p>
          <p className="text-[11px] text-rose-600 font-medium">
            New & preparing in kitchen
          </p>
        </div>
      </div>

      {/* Lightweight SVG Charts (No heavy chart library required) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Weekly Revenue & Orders Trend (7-day Pure SVG Bar Chart) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-heading font-bold text-base text-gray-900">
                Weekly Orders & Revenue Trend
              </h3>
              <p className="text-xs text-gray-500">Daily business overview (Plain SVG)</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Avg ₹10,650 / Day
            </span>
          </div>

          <div className="h-52 w-full pt-4">
            <svg viewBox="0 0 700 200" className="w-full h-full">
              {/* Background horizontal grid lines */}
              <line x1="40" y1="30" x2="680" y2="30" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="40" y1="80" x2="680" y2="80" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="40" y1="130" x2="680" y2="130" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="40" y1="170" x2="680" y2="170" stroke="#e2e8f0" strokeWidth="1.5" />

              {/* Y Axis labels */}
              <text x="5" y="35" fontSize="10" fill="#94a3b8">₹15k</text>
              <text x="5" y="85" fontSize="10" fill="#94a3b8">₹10k</text>
              <text x="5" y="135" fontSize="10" fill="#94a3b8">₹5k</text>

              {/* Bars for 7 days */}
              {demoChartData.dailyOrders.map((item, idx) => {
                const x = 70 + idx * 88;
                const maxRev = 18000;
                const barHeight = (item.revenue / maxRev) * 130;
                const y = 170 - barHeight;
                const isToday = idx === demoChartData.dailyOrders.length - 1;

                return (
                  <g key={item.day} className="cursor-pointer group">
                    {/* Bar */}
                    <rect
                      x={x - 18}
                      y={y}
                      width="36"
                      height={barHeight}
                      rx="6"
                      fill={isToday ? '#b45309' : '#047857'}
                      className="transition-all duration-200 group-hover:opacity-80"
                    />
                    {/* Revenue text above bar */}
                    <text
                      x={x}
                      y={y - 8}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#334155"
                    >
                      ₹{(item.revenue / 1000).toFixed(1)}k
                    </text>
                    {/* Orders count */}
                    <text
                      x={x}
                      y={y + 15}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#ffffff"
                      fontWeight="600"
                    >
                      {item.orders}
                    </text>
                    {/* Day label */}
                    <text
                      x={x}
                      y="190"
                      textAnchor="middle"
                      fontSize="11"
                      fill={isToday ? '#b45309' : '#64748b'}
                      fontWeight={isToday ? 'bold' : 'normal'}
                    >
                      {item.day}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Channel Distribution */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
          <h3 className="font-serif-heading font-bold text-base text-gray-900">
            Order Channels
          </h3>
          <p className="text-xs text-gray-500">Dine-in vs Takeaway vs Delivery</p>

          <div className="space-y-4 pt-2">
            {demoChartData.typeDistribution.map((t) => (
              <div key={t.type} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-gray-800">
                  <span>{t.type}</span>
                  <span className="text-gray-500">
                    {t.count} orders ({t.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      t.type === 'Dine-in'
                        ? 'bg-amber-600'
                        : t.type === 'Takeaway'
                        ? 'bg-emerald-600'
                        : 'bg-indigo-600'
                    }`}
                    style={{ width: `${t.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-warm-100 rounded-xl border border-amber-200 text-[11px] text-gray-700 mt-4 leading-relaxed">
            💡 Dine-in and morning parcels generate over 80% of daily volume at Vishnu Vaibhava.
          </div>
        </div>
      </div>

      {/* Tabs: Orders Management & Payment History */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'orders'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Orders Pipeline ({filteredOrders.length})
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'payments'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Payment History ({transactions.length})
            </button>
          </div>
        </div>

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Order ID, name, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  <option value="All">All Order Types</option>
                  <option value="Dine-in">Dine-in</option>
                  <option value="Takeaway">Takeaway</option>
                  <option value="Delivery">Delivery</option>
                </select>
              </div>
            </div>

            {/* Orders Table (Responsive with horizontal scrolling) */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Order ID & Date</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items Summary</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Payment</th>
                    <th className="py-3 px-4">Update Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="py-8 text-center text-gray-500">
                        No orders match the current filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-gray-900 block">
                            {order.id}
                          </span>
                          <span className="text-[11px] text-gray-500 block">
                            {order.date}
                          </span>
                          {!order.isSample && (
                            <span className="inline-block mt-0.5 text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                              Live Demo Order
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-semibold text-gray-900 block">
                            {order.customerName}
                          </span>
                          <span className="text-gray-500 text-[11px] block">
                            {order.phone}
                          </span>
                          {order.tableNo && (
                            <span className="text-amber-800 font-semibold text-[10px] block">
                              📍 {order.tableNo}
                            </span>
                          )}
                          {order.address && (
                            <span className="text-gray-500 text-[10px] block line-clamp-1 max-w-[160px]" title={order.address}>
                              🏠 {order.address}
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="space-y-0.5">
                            {order.items.map((it, idx) => (
                              <span key={idx} className="block text-gray-700 line-clamp-1">
                                {it.quantity}x {it.name}
                              </span>
                            ))}
                          </div>
                          {order.notes && order.notes !== 'None' && (
                            <span className="text-[10px] text-amber-700 italic block mt-0.5">
                              Note: {order.notes}
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 font-medium text-gray-700">
                          {order.orderType}
                        </td>

                        <td className="py-3.5 px-4 font-bold text-gray-900">
                          ₹{order.amount}
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="block font-medium text-gray-800">
                            {order.paymentMethod}
                          </span>
                          <span
                            className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                              order.paymentStatus === 'Paid'
                                ? 'bg-emerald-100 text-emerald-800'
                                : order.paymentStatus === 'Refunded'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <select
                            value={order.orderStatus}
                            onChange={(e) =>
                              updateOrderStatus(order.id, e.target.value)
                            }
                            className={`text-xs font-bold rounded-lg px-2.5 py-1 border focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer ${getStatusBadge(
                              order.orderStatus
                            )}`}
                          >
                            <option value="New">New</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PAYMENTS TAB */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
            <div>
              <h3 className="font-serif-heading font-bold text-lg text-gray-900">
                Payment Transactions Ledger
              </h3>
              <p className="text-xs text-gray-500">
                Audit trail of online UPI, card settlements, and cash tokens.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Txn ID</th>
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Method</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono font-semibold text-gray-800">
                        {txn.id}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {txn.date}
                      </td>
                      <td className="py-3 px-4 font-mono text-amber-800 font-medium">
                        {txn.orderId}
                      </td>
                      <td className="py-3 px-4 text-gray-800 font-medium">
                        {txn.method}
                      </td>
                      <td className="py-3 px-4 font-bold text-gray-900">
                        ₹{txn.amount}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                            txn.status === 'Paid'
                              ? 'bg-emerald-100 text-emerald-800'
                              : txn.status === 'Refunded'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

