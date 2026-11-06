import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, ShieldAlert, Heart, Instagram, Facebook } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Pure Veg Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-serif-heading font-bold text-xl border border-amber-400">
                VV
              </div>
              <div>
                <h3 className="font-serif-heading font-bold text-lg text-white">
                  Vishnu Vaibhava
                </h3>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Pure Vegetarian
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Pure vegetarian family restaurant & celebration party hall situated in Rajarajeshwari Nagar, Bengaluru. Authentic South Indian tiffins, multi-cuisine dining & banquet facilities for up to 500 guests.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={restaurantData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram (Placeholder link)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook (Placeholder link)"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif-heading font-semibold text-white text-base mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-400 transition-colors">
                  Full Menu & Prices
                </Link>
              </li>
              <li>
                <Link to="/#party-hall" className="hover:text-amber-400 transition-colors">
                  Party Hall & Banquets
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-amber-400 transition-colors">
                  Location & Map Directions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Table Reservation
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-400 transition-colors">
                  Online Demo Order Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Verified Hours */}
          <div>
            <h4 className="font-serif-heading font-semibold text-white text-base mb-4 tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Opening Hours
            </h4>
            <div className="bg-gray-900/80 rounded-xl p-3 border border-gray-800 text-xs space-y-1.5">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Monday – Friday</span>
                <span className="text-amber-300 font-medium">6:00 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Saturday</span>
                <span className="text-amber-300 font-medium">6:00 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Sunday</span>
                <span className="text-amber-300 font-medium">6:00 AM – 10:30 PM</span>
              </div>
            </div>
            <p className="text-[11px] text-emerald-400 mt-2 font-medium">
              * Morning breakfast tiffins commence hot at 6:00 AM every day.
            </p>
          </div>

          {/* Col 4: Verified Address & Contact */}
          <div>
            <h4 className="font-serif-heading font-semibold text-white text-base mb-4 tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Find Us
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-2 mb-4">
              <p>{restaurantData.address.full}</p>
              <p className="text-xs text-amber-200/80">
                {restaurantData.address.landmark}
              </p>
            </address>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`} className="text-white hover:text-amber-400">
                  {restaurantData.phone.primary}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Alt:</span>
                <a href={`tel:${restaurantData.phone.secondary.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                  {restaurantData.phone.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Demo Notice and Owner Login */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/60 font-medium">
              DEMO WEBSITE
            </span>
            <span>
              Crafted for Vishnu Vaibhava Restaurant & Party Hall.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={restaurantData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <span className="text-gray-700">•</span>

            <Link
              to="/owner-login"
              className="text-amber-500 hover:text-amber-300 underline font-medium transition-colors"
            >
              Owner Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

