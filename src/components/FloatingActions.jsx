import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${restaurantData.whatsapp.number}?text=${encodeURIComponent(
    restaurantData.whatsapp.defaultMessage
  )}`;

  const callUrl = `tel:${restaurantData.phone.primary.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end pointer-events-none">
      {/* Mobile Prominent Call Button */}
      <a
        href={callUrl}
        aria-label="Call Vishnu Vaibhava Restaurant"
        className="pointer-events-auto flex md:hidden items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs shadow-lg shadow-emerald-900/30 hover:bg-emerald-700 active:scale-95 transition-all duration-200 border-2 border-emerald-400"
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span>Call Restaurant</span>
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Vishnu Vaibhava"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 hover:bg-emerald-600 active:scale-95 transition-all duration-200 border-2 border-white"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none">
          Enquire on WhatsApp
        </span>
      </a>
    </div>
  );
}

