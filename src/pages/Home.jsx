import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Users,
  Clock,
  MapPin,
  CalendarCheck,
  ChevronDown,
  ShoppingBag,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Utensils,
  Car,
  X,
  ExternalLink,
  ShieldCheck,
  Plus,
  Minus
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { menuItems } from '../data/menu';
import { offersData } from '../data/offers';
import { reviewsData } from '../data/reviews';
import { galleryItems } from '../data/gallery';
import { instagramData } from '../data/instagram';
import { faqData } from '../data/faq';
import { useCart } from '../context/CartContext';
import SafeImage from '../components/SafeImage';

export default function Home() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  // Gallery Lightbox state
  const [activeImage, setActiveImage] = useState(null);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Table Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    request: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingErrors, setBookingErrors] = useState({});

  // Popular dishes: select 6 highlighted dishes
  const popularDishes = menuItems.filter((item) => item.isPopular).slice(0, 6);

  // Today's day index (0 = Sunday, 1 = Monday, etc.)
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayKey = dayNames[new Date().getDay()];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!bookingForm.name.trim()) errors.name = 'Please provide your name.';
    if (!bookingForm.phone.trim() || bookingForm.phone.length < 10)
      errors.phone = 'Please provide a valid 10-digit phone number.';
    if (!bookingForm.date) errors.date = 'Please pick a booking date.';

    if (Object.keys(errors).length > 0) {
      setBookingErrors(errors);
      return;
    }

    setBookingErrors({});
    setBookingSuccess(true);
  };

  const getWhatsAppBookingLink = () => {
    const text = `Hello Vishnu Vaibhava! I would like to reserve a table:%0A- Name: ${encodeURIComponent(
      bookingForm.name || 'Guest'
    )}%0A- Phone: ${encodeURIComponent(bookingForm.phone || '')}%0A- Date: ${encodeURIComponent(
      bookingForm.date || 'Today'
    )}%0A- Time: ${encodeURIComponent(bookingForm.time)}%0A- Guests: ${encodeURIComponent(
      bookingForm.guests
    )}%0A- Note: ${encodeURIComponent(bookingForm.request || 'None')}`;
    return `https://wa.me/${restaurantData.whatsapp.number}?text=${text}`;
  };

  const getWhatsAppHallEnquiryLink = () => {
    const text = `Hello Vishnu Vaibhava! I would like to enquire about Party Hall booking for an upcoming celebration/event. Please share hall availability and catering packages.`;
    return `https://wa.me/${restaurantData.whatsapp.number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-warm-100 to-warm-50 pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-amber-200/50">
        <div className="absolute inset-0 bg-heritage-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Rating and Pure Veg Badge */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-xs font-semibold shadow-xs">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{restaurantData.rating.score} ★ on Google</span>
                  <span className="text-amber-700/60 font-normal">({restaurantData.rating.totalReviews}+ reviews)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  100% Pure Vegetarian
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.15] tracking-tight">
                Authentic Taste, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800">
                  Joyful Celebrations.
                </span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to <strong className="font-semibold text-gray-900">Vishnu Vaibhava</strong> on Kenchena Halli Road, Rajarajeshwari Nagar. Famed for crisp morning tiffins, authentic multi-cuisine vegetarian dining, and a dedicated banquet party hall for 300–500 guests.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-amber-600/30 hover:shadow-amber-600/40 active:scale-95 transition-all"
                >
                  <Utensils className="w-4 h-4" />
                  View Menu & Prices
                </Link>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-800/25 active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online Demo
                </Link>

                <a
                  href="#book-table"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-gray-800 font-semibold text-sm sm:text-base border border-amber-300 shadow-sm transition-all"
                >
                  <CalendarCheck className="w-4 h-4 text-amber-700" />
                  Book Table
                </a>
              </div>

              {/* Quick Verified Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-200/60 max-w-2xl mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xs text-gray-500">Opens Daily</span>
                  <span className="font-semibold text-sm text-gray-900">6:00 AM – 10:30 PM</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xs text-gray-500">Party Hall</span>
                  <span className="font-semibold text-sm text-gray-900">Up to 500 Guests</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xs text-gray-500">Price for Two</span>
                  <span className="font-semibold text-sm text-gray-900">₹300 – ₹500</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xs text-gray-500">Parking</span>
                  <span className="font-semibold text-sm text-gray-900">Available on Site</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-3xl blur-sm opacity-30 transform -rotate-1"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-amber-200">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80"
                    alt="South Indian Special Dosa at Vishnu Vaibhava"
                    title="Authentic South Indian Tiffins"
                    category="Breakfast"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                  <div className="p-5 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                        Signature Special
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        Fresh from 6:00 AM
                      </span>
                    </div>
                    <h3 className="font-serif-heading font-bold text-lg text-gray-900">
                      Bengaluru Ghee Thatte Idlis & Crispy Dosas
                    </h3>
                    <p className="text-xs text-gray-600">
                      Served with hot vegetable sambar, thick coconut chutney and our freshly ground spiced chutney podi.
                    </p>
                    <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                      <span className="text-gray-500">⭐ 4.1 Rating</span>
                      <Link to="/menu" className="font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                        Explore Full Menu <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-amber-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Local Restaurant & Banquet
              </div>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                A Neighborhood Tradition of Taste & Festivity in RR Nagar
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Situated conveniently on <strong className="text-gray-900 font-medium">Kenchena Halli Road (Halagevaderahalli Road)</strong> in BEML Layout / Janankshi Layout 5th Stage, <strong>Vishnu Vaibhava</strong> is widely cherished by Rajarajeshwari Nagar residents as an honest, pure-vegetarian haven.
                </p>
                <p>
                  From steaming Thatte Idlis and crispy Masala Dosas served with traditional filter coffee early in the morning to wholesome South Indian Thali meals, North Indian paneer curries, and sizzled Chinese starters in the evening—every dish is prepared 100% vegetarian with reliable quality.
                </p>
                <p>
                  Upstairs, our versatile <strong className="text-gray-900 font-medium">Party Hall</strong> accommodates up to 500 guests, equipped with in-house buffet catering for naming ceremonies, birthdays, thread ceremonies, and family gatherings.
                </p>
              </div>

              {/* Strict Rule: Clearly marked placeholder for unverified history */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Note for Restaurant Owner:</span>{' '}
                  <span className="text-amber-800">
                    Proprietor details and exact founding story are marked as placeholders ({restaurantData.placeholders.ownerName}) and can be customized anytime in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">src/data/restaurant.js</code>.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-warm-100 border border-amber-200 text-center">
                <span className="font-serif-heading text-3xl font-extrabold text-amber-700">4.1★</span>
                <p className="text-xs text-gray-600 mt-1 font-medium">Google Rating</p>
                <p className="text-[11px] text-gray-500">1,900+ reviews</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="font-serif-heading text-3xl font-extrabold text-emerald-800">500</span>
                <p className="text-xs text-gray-600 mt-1 font-medium">Hall Capacity</p>
                <p className="text-[11px] text-gray-500">Guests max</p>
              </div>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                <span className="font-serif-heading text-3xl font-extrabold text-amber-800">6 AM</span>
                <p className="text-xs text-gray-600 mt-1 font-medium">Morning Tiffins</p>
                <p className="text-[11px] text-gray-500">Every single day</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="font-serif-heading text-3xl font-extrabold text-emerald-800">100%</span>
                <p className="text-xs text-gray-600 mt-1 font-medium">Pure Vegetarian</p>
                <p className="text-[11px] text-gray-500">No meat, pure satvik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR DISHES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-1">
              Customer Favorites
            </div>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900">
              Popular Dishes & Real Prices
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            <span>View Full Menu ({menuItems.length} items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-amber-100 flex flex-col justify-between transition-hover"
              >
                <div>
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

                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded border border-emerald-600 p-0.5 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        </span>
                        <h3 className="font-serif-heading font-bold text-base text-gray-900 leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-bold text-base text-amber-800">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

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
      </section>

      {/* 4. PARTY HALL AND EVENTS SECTION */}
      <section id="party-hall" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lifted relative overflow-hidden border-2 border-emerald-700/50">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-amber-300 border border-emerald-600 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Celebration Banquets & Events
              </div>

              <h2 className="font-serif-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Vishnu Vaibhava Party Hall: <br />
                <span className="text-amber-300">Host Up to 300 – 500 Guests</span>
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Make your family milestones and celebrations hassle-free with our dedicated party hall in Rajarajeshwari Nagar. Featuring customized pure vegetarian buffet spreads, traditional banana leaf service, celebration lighting, and convenient parking.
              </p>

              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  Ideal for Every Auspicious Gathering:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-200">
                  {restaurantData.partyHall.eventsSupported.map((evt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-xs text-emerald-200">
                <span className="font-semibold text-amber-200">Package Details Placeholder:</span>{' '}
                {restaurantData.partyHall.packagesNote}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getWhatsAppHallEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-950/50 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-emerald-400/30 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  Call: {restaurantData.phone.primary}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border-2 border-emerald-600/50 shadow-2xl bg-gray-900">
                <SafeImage
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                  alt="Party Hall Setup at Vishnu Vaibhava"
                  title="Spacious Party Hall Setup"
                  category="Party Hall"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-emerald-950/80 border-t border-emerald-800 text-xs space-y-2">
                  <div className="flex items-center justify-between text-amber-300 font-semibold">
                    <span>Capacity: 300 – 500 Guests</span>
                    <span>⭐ 3.9/5 Venue Rating</span>
                  </div>
                  <p className="text-gray-300 text-[11px]">
                    Includes stage, dining tables, clean washrooms, and lift accessibility.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                  <span className="block text-amber-300 font-bold text-sm">Pure Veg</span>
                  <span className="text-gray-300 text-[11px]">Buffet or Banana Leaf</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                  <span className="block text-amber-300 font-bold text-sm">Ample Parking</span>
                  <span className="text-gray-300 text-[11px]">2-Wheelers & Cars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAMPLE OFFERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-1">
            Special Value
          </div>
          <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900">
            Current Promotional Offers
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            * Clearly labeled sample offer cards for demo presentation. The owner can update codes and validity in <code className="bg-gray-100 px-1 py-0.5 rounded">src/data/offers.js</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className={`rounded-2xl p-6 bg-gradient-to-br ${offer.color} text-white shadow-card flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="space-y-3 relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/30">
                  {offer.tag}
                </span>
                <h3 className="font-serif-heading font-bold text-xl text-white">
                  {offer.title}
                </h3>
                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between relative z-10 text-xs">
                <div>
                  <span className="block text-[10px] text-amber-200">Use Code:</span>
                  <span className="font-mono font-bold text-sm tracking-wider text-white">
                    {offer.code}
                  </span>
                </div>
                <span className="text-[11px] text-white/80 italic">
                  {offer.validity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-1">
            Visual Experience
          </div>
          <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900">
            Glimpses of Food & Celebration
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Click on any photo to inspect high-resolution preview and details.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-soft bg-gray-100 relative h-48 sm:h-60 transition-transform duration-200 hover:-translate-y-1"
            >
              <SafeImage
                src={item.src}
                alt={item.title}
                title={item.title}
                category={item.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                  {item.category}
                </span>
                <p className="text-xs font-semibold font-serif-heading line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] bg-black flex items-center justify-center">
                <SafeImage
                  src={activeImage.src}
                  alt={activeImage.title}
                  title={activeImage.title}
                  category={activeImage.category}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 bg-gray-950 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeImage.category}
                </span>
                <h3 className="font-serif-heading font-bold text-lg text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 7. TABLE BOOKING FORM */}
      <section id="book-table" className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border-2 border-amber-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Dine-in Reservation
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900 mt-2">
              Book a Table at Vishnu Vaibhava
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Reserve seats for family lunches, breakfast gatherings, or dinner. For large gatherings, also enquire about our Party Hall.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-heading font-bold text-xl text-emerald-950">
                Reservation Request Recorded!
              </h3>
              <p className="text-sm text-emerald-900 max-w-md mx-auto">
                Thank you, <strong>{bookingForm.name}</strong>. Your request for{' '}
                <strong>{bookingForm.guests} guest(s)</strong> on{' '}
                <strong>{bookingForm.date}</strong> at{' '}
                <strong>{bookingForm.time}</strong> has been logged in this demo.
              </p>
              <div className="p-3 bg-white/80 rounded-xl text-xs text-gray-600 max-w-md mx-auto border border-emerald-200">
                ⭐ Front-end demo: to confirm live availability instantly with the restaurant manager, tap the WhatsApp confirmation button below:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingForm({
                      name: '',
                      phone: '',
                      date: '',
                      time: '19:30',
                      guests: '2',
                      request: '',
                    });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs"
                >
                  Make Another Booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                  {bookingErrors.name && (
                    <p className="text-[11px] text-red-600 mt-1">{bookingErrors.name}</p>
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
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                  {bookingErrors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{bookingErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, date: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                  {bookingErrors.date && (
                    <p className="text-[11px] text-red-600 mt-1">{bookingErrors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={bookingForm.time}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, time: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  >
                    <option value="07:30">07:30 AM (Breakfast Tiffins)</option>
                    <option value="09:00">09:00 AM (Morning Tiffins)</option>
                    <option value="12:30">12:30 PM (Lunch Meals)</option>
                    <option value="13:30">01:30 PM (Lunch Meals)</option>
                    <option value="19:30">07:30 PM (Dinner & Tandoor)</option>
                    <option value="20:30">08:30 PM (Dinner & Tandoor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4 Persons (Family Table)</option>
                    <option value="6">6 Persons</option>
                    <option value="8+">8+ Persons (Group Seating)</option>
                    <option value="Hall (50+)">50+ Guests (Party Hall Enquiry)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Special Requests / Dietary Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. High chair for toddler, less spicy food, quiet corner table"
                  value={bookingForm.request}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, request: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Submit Table Reservation (Demo)
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  * No server required: submitting this demo will show instant confirmation and pre-fill a WhatsApp message.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 8. OPENING HOURS TABLE WITH TODAY HIGHLIGHTED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-100 rounded-3xl p-6 sm:p-10 border border-amber-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Verified Daily Timings
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900 mt-2">
              Opening Hours for All 7 Days
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Serving Rajarajeshwari Nagar all seven days of the week. Today's day is highlighted below.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-amber-50/80 border-b border-amber-200 text-amber-900 font-semibold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Operating Hours</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Object.entries(restaurantData.openingHours).map(([day, val]) => {
                  if (day === 'summary') return null;
                  const isToday = day === todayKey;
                  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
                  return (
                    <tr
                      key={day}
                      className={
                        isToday
                          ? 'bg-amber-100/70 font-semibold text-amber-950'
                          : 'text-gray-700 hover:bg-gray-50'
                      }
                    >
                      <td className="py-3 px-4 flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                        )}
                        <span>{capitalizedDay}</span>
                        {isToday && (
                          <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-full font-bold ml-1">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {val.display}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-emerald-700 font-semibold text-xs">
                          Open
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. REAL CUSTOMER REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-1">
              Customer Feedback
            </div>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900">
              Reviews & Experiences
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-extrabold text-amber-700 text-lg">
                {reviewsData.overallRating} ★
              </span>
              <span className="text-xs text-gray-600 font-medium">
                Overall score across {reviewsData.totalReviewsCount} ratings
              </span>
            </div>
          </div>
          <a
            href={restaurantData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-amber-50 text-amber-800 border border-amber-300 font-semibold text-xs shadow-xs"
          >
            <span>Read more reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-5 border flex flex-col justify-between ${
                rev.isReal
                  ? 'bg-white border-amber-100 shadow-soft'
                  : 'bg-amber-50/40 border-dashed border-amber-300'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-900 font-bold text-sm flex items-center justify-center">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        {rev.name}
                      </h4>
                      <span className="text-[10px] text-gray-500">
                        {rev.source}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">
                  {rev.tag}
                </span>
                {rev.isReal ? (
                  <span className="text-emerald-700 font-medium">Verified Customer</span>
                ) : (
                  <span className="text-amber-800 font-mono">Sample Card</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. INSTAGRAM POSTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-amber-700 mb-1">
              Social Visuals
            </div>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900">
              On Our Social Feed
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              * Note: {instagramData.handleNote}
            </p>
          </div>
          <a
            href={instagramData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 text-white font-semibold text-xs shadow-md hover:opacity-95"
          >
            <span>Follow us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramData.posts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl overflow-hidden aspect-square bg-gray-100 shadow-xs border border-gray-200"
            >
              <SafeImage
                src={post.image}
                alt="Instagram post from Vishnu Vaibhava"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gray-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-between text-white text-[11px]">
                <p className="line-clamp-4 leading-snug">{post.caption}</p>
                <div className="flex items-center justify-between text-[10px] text-amber-300 font-semibold pt-1 border-t border-white/20">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Got Questions?
          </span>
          <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-gray-900 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Answers based on verified operational facts for Vishnu Vaibhava.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-amber-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 hover:text-amber-800"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-700 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-amber-50 pt-3 bg-warm-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-amber-100">
              Pure Veg • Open Daily 6:00 AM – 10:30 PM
            </span>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-white">
              Ready to Taste or Celebrate?
            </h2>
            <p className="text-sm sm:text-base text-amber-100">
              Visit our family restaurant on Kenchena Halli Road or enquire about our spacious 500-guest party hall today.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/menu"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-sm shadow-md transition-colors"
            >
              Order Online Demo
            </Link>
            <a
              href="#book-table"
              className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm border border-emerald-500 shadow-md transition-colors"
            >
              Book a Table
            </a>
            <a
              href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 rounded-xl bg-amber-900/80 hover:bg-amber-950 text-white font-semibold text-sm border border-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

