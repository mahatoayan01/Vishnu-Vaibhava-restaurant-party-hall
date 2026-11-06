import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  Minus,
  Sparkles,
  ShoppingBag,
  Info,
  CheckCircle2,
  UtensilsCrossed,
  Coffee,
  Flame,
  ChefHat,
  Soup,
  GlassWater
} from 'lucide-react';
import { menuItems, categories, menuNotice } from '../data/menu';
import { useCart } from '../context/CartContext';
import SafeImage from '../components/SafeImage';
import { Link } from 'react-router-dom';

export default function Menu() {
  const { addToCart, updateQuantity, getItemQuantity, cartCount, grandTotal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping for categories
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'tiffins':
        return <Coffee className="w-4 h-4" />;
      case 'starters':
        return <Flame className="w-4 h-4" />;
      case 'north-indian':
        return <ChefHat className="w-4 h-4" />;
      case 'rice-meals':
        return <Soup className="w-4 h-4" />;
      case 'beverages':
        return <GlassWater className="w-4 h-4" />;
      case 'party-catering':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          100% Pure Vegetarian Kitchen
        </div>
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Our Authentic Menu
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Fresh morning tiffins from 6:00 AM, sizzling starters, traditional South Indian thalis, and tandoori specials.
        </p>

        {/* Visible Notice Required by Specification */}
        <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2 text-left sm:text-center">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>{menuNotice}</span>
        </div>
      </div>

      {/* Sticky Category Bar & Search Bar */}
      <div className="sticky top-20 z-30 bg-warm-50/95 backdrop-blur-md py-3 border-y border-amber-200/80 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'bg-white text-gray-700 hover:bg-amber-100/70 border border-amber-200/60'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Dosa, Manchurian)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-amber-200 p-8 space-y-3">
          <UtensilsCrossed className="w-12 h-12 text-gray-400 mx-auto" />
          <h3 className="font-serif-heading font-bold text-lg text-gray-900">
            No dishes found matching "{searchQuery}"
          </h3>
          <p className="text-xs text-gray-500">
            Try searching for another dish, or click 'All Items' above.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-amber-100 flex flex-col justify-between transition-hover"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full bg-amber-50 overflow-hidden">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      category={item.category}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-amber-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}
                    {item.isRealPrice && (
                      <span className="absolute bottom-3 left-3 bg-gray-900/85 text-emerald-300 font-medium text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                        Verified Price
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        {/* Pure Veg Green Badge */}
                        <span className="w-3.5 h-3.5 rounded border border-emerald-600 p-0.5 flex items-center justify-center flex-shrink-0" title="Pure Veg">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        </span>
                        <h3 className="font-serif-heading font-bold text-base text-gray-900 leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-bold text-base text-amber-800 whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Cart Action */}
                <div className="p-4 pt-0">
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-800 border border-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-amber-100/80 rounded-xl p-1 border border-amber-300">
                      <button
                        onClick={() => updateQuantity(item.id, qty - 1)}
                        className="w-8 h-8 rounded-lg bg-white text-amber-800 flex items-center justify-center font-bold hover:bg-amber-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-sm text-amber-900 px-3">
                        {qty} in cart
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, qty + 1)}
                        className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold hover:bg-amber-700 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Bottom Cart Bar (if items in cart) */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-md bg-gray-900 text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between border border-amber-400 animate-slideUp">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
              {cartCount}
            </div>
            <div>
              <p className="text-xs text-gray-300 font-medium">Cart Subtotal</p>
              <p className="font-bold text-base text-amber-300">₹{grandTotal}</p>
            </div>
          </div>
          <Link
            to="/cart"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Checkout Demo
          </Link>
        </div>
      )}
    </div>
  );
}

