import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Banknote,
  Utensils,
  Truck,
  Package,
  AlertTriangle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SafeImage from '../components/SafeImage';

export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    gstAmount,
    packagingFee,
    grandTotal,
  } = useCart();

  const { addOrder } = useAuth();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Dine-in',
    tableNumber: 'Table 3',
    address: '',
    notes: '',
  });

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [fakeUpiId, setFakeUpiId] = useState('customer@okhdfcbank');
  const [fakeCard, setFakeCard] = useState({
    number: '•••• •••• •••• 4242',
    name: 'DEMO CARDHOLDER',
    exp: '12/28',
    cvv: '•••',
  });

  const [errors, setErrors] = useState({});
  const [placedOrder, setPlacedOrder] = useState(null);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    if (formData.orderType === 'Delivery' && !formData.address.trim())
      newErrors.address = 'Delivery address is required for home delivery.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Generate random demo order
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const demoOrder = {
      id: `VV-2026-${randomSuffix}`,
      customerName: formData.name,
      phone: formData.phone,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      orderType: formData.orderType,
      tableNo: formData.orderType === 'Dine-in' ? formData.tableNumber : undefined,
      address: formData.orderType === 'Delivery' ? formData.address : undefined,
      amount: grandTotal,
      paymentMethod:
        paymentMethod === 'UPI'
          ? `UPI (${fakeUpiId})`
          : paymentMethod === 'Card'
          ? 'Debit/Credit Card (Demo)'
          : 'Cash on Counter / COD',
      paymentStatus: paymentMethod === 'Cash' ? 'Pending' : 'Paid',
      orderStatus: 'New',
      date: new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      notes: formData.notes || 'None',
      isSample: false,
    };

    // Save order in AuthContext/localStorage
    addOrder(demoOrder);
    setPlacedOrder(demoOrder);
    clearCart();
  };

  // 1. ORDER SUCCESS SCREEN
  if (placedOrder) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border-2 border-emerald-300 space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demo Order Placed Successfully!
            </span>
            <h1 className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-gray-900 pt-2">
              Order #{placedOrder.id}
            </h1>
            <p className="text-xs text-gray-500">
              Placed on {placedOrder.date} • {placedOrder.orderType}
            </p>
          </div>

          <div className="p-4 bg-warm-100 rounded-2xl border border-amber-200 text-left text-xs space-y-2">
            <div className="flex justify-between font-bold text-gray-900 border-b border-amber-200/60 pb-2">
              <span>Customer:</span>
              <span>{placedOrder.customerName} ({placedOrder.phone})</span>
            </div>
            <div className="space-y-1 py-1">
              {placedOrder.items.map((it, idx) => (
                <div key={idx} className="flex justify-between text-gray-700">
                  <span>{it.quantity}x {it.name}</span>
                  <span>₹{it.price * it.quantity}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-extrabold text-amber-900 border-t border-amber-200/60 pt-2 text-sm">
              <span>Grand Total:</span>
              <span>₹{placedOrder.amount}</span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-600 pt-1">
              <span>Payment:</span>
              <span className="font-semibold text-emerald-700">{placedOrder.paymentMethod} ({placedOrder.paymentStatus})</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200 text-left">
            ⭐ <strong>Live Integration Preview:</strong> This order has been automatically persisted in localStorage and synced into the <strong>Owner Dashboard</strong>!
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/owner-dashboard"
              className="px-5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              View in Owner Dashboard
            </Link>
            <Link
              to="/menu"
              className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Order More Items
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. EMPTY CART SCREEN
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
          Your Cart is Empty
        </h1>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Craving authentic Mysore Masala Dosa, Ghee Thatte Idlis, Gobi Manchurian, or a wholesome South Indian Thali?
        </p>
        <div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md transition-colors"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu & Add Dishes</span>
          </Link>
        </div>
      </div>
    );
  }

  // 3. CART & CHECKOUT FORM
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Demo Checkout
        </span>
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl text-gray-900">
          Your Order Summary
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Review items, specify dining preferences, and experience our instant checkout flow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 className="font-serif-heading font-bold text-lg text-gray-900">
                Cart Items ({cartItems.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-xs text-red-600 hover:text-red-700 font-semibold"
              >
                Clear All
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-50 flex-shrink-0 border border-amber-200">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        category={item.category}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-heading font-bold text-sm text-gray-900 leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">₹{item.price} each</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-amber-200 rounded-lg p-0.5 bg-amber-50">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded bg-white text-gray-700 flex items-center justify-center hover:bg-amber-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="font-bold text-sm text-gray-900 w-16 text-right">
                      ₹{item.price * item.quantity}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-2.5 text-xs sm:text-sm">
            <h3 className="font-serif-heading font-bold text-base text-gray-900 pb-2 border-b border-gray-100">
              Bill Breakdown
            </h3>
            <div className="flex justify-between text-gray-600">
              <span>Items Subtotal</span>
              <span className="font-semibold text-gray-900">₹{cartSubtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Demo Restaurant GST (5%)</span>
              <span className="font-semibold text-gray-900">₹{gstAmount}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Packaging / Container Charge</span>
              <span className="font-semibold text-gray-900">₹{packagingFee}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-amber-900 pt-2 border-t border-gray-200">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Form & Demo Payment */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handlePlaceOrder} className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border-2 border-amber-300 space-y-5">
            <h3 className="font-serif-heading font-bold text-xl text-gray-900 pb-1 border-b border-gray-100">
              Customer Details & Dining Mode
            </h3>

            {/* Order Type Toggle */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Select Order Type *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Dine-in', label: 'Dine-in', icon: Utensils },
                  { id: 'Takeaway', label: 'Takeaway', icon: Package },
                  { id: 'Delivery', label: 'Delivery', icon: Truck },
                ].map((type) => {
                  const Icon = type.icon;
                  const active = formData.orderType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: type.id })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 border transition-all ${
                        active
                          ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                          : 'bg-warm-50 text-gray-700 border-gray-200 hover:bg-amber-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Customer Name & Phone */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suhas Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {formData.orderType === 'Dine-in' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Table Number (Optional)
                  </label>
                  <select
                    value={formData.tableNumber}
                    onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                  >
                    <option value="Table 1">Table 1 (Ground Floor)</option>
                    <option value="Table 2">Table 2 (Ground Floor)</option>
                    <option value="Table 3">Table 3 (Family Section)</option>
                    <option value="Table 4">Table 4 (Family Section)</option>
                    <option value="Table 8">Table 8 (AC Dining)</option>
                    <option value="Counter Token">Counter Order (Tiffin)</option>
                  </select>
                </div>
              )}

              {formData.orderType === 'Delivery' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    rows="2"
                    required
                    placeholder="House/Flat number, Building name, Street, Landmark"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                  ></textarea>
                  {errors.address && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.address}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kitchen Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Less spicy, extra sambar, crisp dosas"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* STRICT DEMO PAYMENT SECTION */}
            <div className="pt-3 border-t border-gray-200 space-y-3">
              <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-red-900 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">DEMO PAYMENT:</span> No real money is charged. Never enter real financial or bank credentials.
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Select Demo Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'UPI', label: 'Demo UPI', icon: Smartphone },
                    { id: 'Card', label: 'Demo Card', icon: CreditCard },
                    { id: 'Cash', label: 'Cash / COD', icon: Banknote },
                  ].map((pm) => {
                    const Icon = pm.icon;
                    const active = paymentMethod === pm.id;
                    return (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 border transition-all ${
                          active
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{pm.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fake Payment Inputs */}
              {paymentMethod === 'UPI' && (
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2 text-xs">
                  <span className="font-semibold text-emerald-950 block">Demo UPI ID</span>
                  <input
                    type="text"
                    value={fakeUpiId}
                    onChange={(e) => setFakeUpiId(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-emerald-300 bg-white font-mono text-xs"
                  />
                  <span className="text-[10px] text-emerald-800">Simulates instant Google Pay / PhonePe settlement</span>
                </div>
              )}

              {paymentMethod === 'Card' && (
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-2 text-xs">
                  <span className="font-semibold text-gray-900 block">Fake Demo Card</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      disabled
                      value={fakeCard.number}
                      className="col-span-2 px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-100 font-mono text-xs"
                    />
                    <input
                      type="text"
                      disabled
                      value={fakeCard.exp}
                      className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-100 font-mono text-xs"
                    />
                    <input
                      type="text"
                      disabled
                      value={fakeCard.cvv}
                      className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-100 font-mono text-xs"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'Cash' && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  💵 Pay with cash directly at the counter or to the delivery partner upon arrival.
                </div>
              )}
            </div>

            {/* Place Order CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Place Demo Order (₹{grandTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

