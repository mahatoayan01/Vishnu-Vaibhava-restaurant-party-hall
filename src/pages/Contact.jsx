import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  CalendarCheck,
  Building2,
  Sparkles,
  Instagram,
  Facebook
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please provide your name.';
    if (!form.phone.trim() || form.phone.length < 10)
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const whatsappGeneralUrl = `https://wa.me/${restaurantData.whatsapp.number}?text=${encodeURIComponent(
    restaurantData.whatsapp.defaultMessage
  )}`;

  const whatsappPartyHallUrl = `https://wa.me/${restaurantData.whatsapp.number}?text=${encodeURIComponent(
    restaurantData.whatsapp.partyHallMessage
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Get In Touch
        </span>
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Contact & Event Enquiries
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          We are here to help you reserve tables, plan celebratory gatherings in our party hall, or answer any dining questions.
        </p>
      </div>

      {/* Quick Shortcuts: Table Booking & Party Hall */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Table Booking Shortcut */}
        <div className="bg-gradient-to-br from-amber-50 to-warm-100 rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-soft flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-gray-900">
              Reserve a Dining Table
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Planning breakfast with friends, a family lunch thali, or weekend dinner? Book a table on our home page or confirm instantly via WhatsApp.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/#book-table"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              Go to Booking Form
            </Link>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Party Hall Shortcut */}
        <div className="bg-gradient-to-br from-emerald-900 to-gray-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-700 shadow-lifted flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-white">
              Party Hall & Banquets Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Hosting a birthday, naming ceremony (namakarana), upanayana, or corporate event? Our hall accommodates up to 500 guests with pure veg catering.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={whatsappPartyHallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              Call Manager
            </a>
          </div>
        </div>
      </div>

      {/* Main Form & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-amber-200 space-y-6">
            <h3 className="font-serif-heading font-bold text-xl text-gray-900">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium">Telephone Numbers</span>
                  <a href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`} className="font-bold text-gray-900 hover:text-amber-700 block">
                    {restaurantData.phone.primary}
                  </a>
                  <a href={`tel:${restaurantData.phone.secondary.replace(/\s+/g, '')}`} className="text-xs text-gray-600 hover:text-amber-700 block">
                    Secondary: {restaurantData.phone.secondary}
                  </a>
                  <span className="text-xs text-gray-500 block">
                    Alternate: {restaurantData.phone.alternate}
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium">WhatsApp Assistance</span>
                  <a
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-800 hover:underline block"
                  >
                    {restaurantData.whatsapp.display}
                  </a>
                  <span className="text-[11px] text-gray-500">Quick replies for table bookings and menus</span>
                </div>
              </div>

              {/* Email (Placeholder strictly marked) */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium">Official Email</span>
                  <span className="text-xs text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block font-mono">
                    {restaurantData.email}
                  </span>
                  <span className="text-[10px] text-gray-500">Placeholder: Edit in src/data/restaurant.js</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium">Address</span>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    {restaurantData.address.full}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Landmark: {restaurantData.address.landmark}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium">Operating Schedule</span>
                  <p className="font-semibold text-gray-900">
                    6:00 AM – 10:30 PM (All 7 Days)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-semibold text-gray-700 block">
                Social Profiles (Placeholders)
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={restaurantData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-amber-100 text-gray-700 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-rose-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href={restaurantData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-amber-100 text-gray-700 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact / Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border-2 border-amber-200 space-y-6">
            <div>
              <h3 className="font-serif-heading font-bold text-2xl text-gray-900">
                Send Us a Message
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Have a question regarding bulk catering, party hall availability, or feedback? Drop us a note below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-heading font-bold text-lg text-emerald-950">
                  Message Recorded!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto">
                  Thank you, <strong>{form.name}</strong>. Your enquiry for <strong>{form.enquiryType}</strong> has been logged in this demo.
                </p>
                <div className="p-3 bg-white/80 rounded-xl text-xs text-gray-600 max-w-sm mx-auto border border-emerald-200">
                  * Note: This is a front-end demo. Nothing has been sent to a live server.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      phone: '',
                      email: '',
                      enquiryType: 'General Enquiry',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
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
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="anand@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject / Enquiry Type
                    </label>
                    <select
                      value={form.enquiryType}
                      onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Party Hall Booking">Party Hall Booking (300-500 Guests)</option>
                      <option value="Event Catering">Outdoor / Event Catering</option>
                      <option value="Dining Feedback">Dining Feedback / Review</option>
                      <option value="Bulk Parcel Order">Bulk Parcel Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Message / Specific Requirements *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your event date, number of guests, or food preferences..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry (Demo)</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  * Front-end demo submission: Validates input and presents visual feedback without connecting to a database.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

