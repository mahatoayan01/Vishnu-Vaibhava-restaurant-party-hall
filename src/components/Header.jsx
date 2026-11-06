import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X, Phone, CalendarCheck, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantData } from '../data/restaurant';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleBookTableClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/#book-table');
      setTimeout(() => {
        const el = document.getElementById('book-table');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('book-table');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Party Hall & Events', path: '/#party-hall', isHash: true },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.isHash) {
      if (window.location.pathname !== '/') {
        navigate(item.path);
        setTimeout(() => {
          const el = document.getElementById('party-hall');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('party-hall');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-emerald-900 text-amber-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily: 6:00 AM – 10:30 PM
            </span>
            <span className="hidden md:inline text-emerald-400/50">|</span>
            <span className="hidden md:inline text-amber-200">
              100% Pure Vegetarian Family Restaurant & Banquet
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>{restaurantData.phone.primary}</span>
            </a>
            <span className="text-emerald-400/50">|</span>
            <Link to="/location" className="hover:text-white transition-colors flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-300" />
              <span>RR Nagar, Bengaluru</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform duration-200 border-2 border-amber-400">
              <span className="font-serif-heading font-bold text-2xl tracking-tighter">VV</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-heading font-bold text-lg sm:text-xl text-gray-900 group-hover:text-amber-700 transition-colors">
                  Vishnu Vaibhava
                </span>
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 rounded border border-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1"></span>
                  PURE VEG
                </span>
              </div>
              <p className="text-[11px] text-gray-500 tracking-wide hidden sm:block">
                Restaurant & Party Hall • Rajarajeshwari Nagar
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.isHash) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-amber-800 bg-amber-100/70 font-semibold'
                        : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50/70'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Table Booking CTA */}
            <button
              onClick={handleBookTableClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg shadow-xs transition-colors"
            >
              <CalendarCheck className="w-4 h-4 text-emerald-700" />
              Book Table
            </button>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2.5 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-amber-100 bg-white/98 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                if (item.isHash) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="text-left px-3 py-2.5 text-base font-medium text-gray-800 hover:bg-amber-50 rounded-lg"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 text-base font-medium rounded-lg ${
                        isActive
                          ? 'text-amber-800 bg-amber-100/70 font-semibold'
                          : 'text-gray-800 hover:bg-amber-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={handleBookTableClick}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-700 text-white font-semibold text-sm shadow hover:bg-emerald-800 transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book a Table / Enquiry
                </button>
                <Link
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-600 text-white font-semibold text-sm shadow hover:bg-amber-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View Cart ({cartCount} items)
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

