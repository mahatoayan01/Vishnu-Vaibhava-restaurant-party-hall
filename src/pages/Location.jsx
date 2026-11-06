import React from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Clock,
  Car,
  Building,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function Location() {
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayKey = dayNames[new Date().getDay()];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Find Us in RR Nagar
        </span>
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Location & Directions
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Visit Vishnu Vaibhava for fresh family dining or inspect our party hall facilities for your upcoming celebrations.
        </p>
      </div>

      {/* Main Grid: Details & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Address & Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-amber-200 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif-heading font-bold text-lg text-gray-900">
                  Full Address
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1 font-medium">
                  {restaurantData.address.full}
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-warm-100 rounded-xl border border-amber-200/80 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-gray-800">
                <Building className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>
                  <strong>Landmark:</strong> {restaurantData.address.landmark}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <Car className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>
                  <strong>Parking:</strong> {restaurantData.address.parkingInfo}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-amber-50 text-gray-800 font-bold text-xs border border-amber-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-amber-700" />
                Open in Maps
              </a>
            </div>
          </div>

          {/* Quick Contact & Hours Summary */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-amber-200 space-y-4">
            <h3 className="font-serif-heading font-bold text-base text-gray-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              Opening Hours Summary
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Everyday (Mon – Sun)</span>
                <span className="font-semibold text-gray-900">6:00 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Morning Tiffin Counter</span>
                <span className="font-semibold text-emerald-800">Hot from 6:00 AM</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-600">Party Hall Appointments</span>
                <span className="font-semibold text-amber-800">9:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Need immediate help?</span>
              <a
                href={`tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`}
                className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                Call {restaurantData.phone.primary}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Keyless Google Maps Embed */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-3 shadow-card border-2 border-amber-200 overflow-hidden">
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden bg-gray-100">
              <iframe
                title="Vishnu Vaibhava Location Map"
                src={restaurantData.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Interactive Map: Zoom, pan, and view satellite imagery above.
              </span>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-700 hover:underline flex items-center gap-1"
              >
                <span>Verified Place ID: ChIJxQr9MQA_rjsRYCbhpacNGcU</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

