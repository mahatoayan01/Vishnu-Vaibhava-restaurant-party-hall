import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UtensilsCrossed } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-amber-200 space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <UtensilsCrossed className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-4xl font-extrabold font-serif-heading text-amber-700">
            404
          </span>
          <h1 className="font-serif-heading font-bold text-2xl text-gray-900">
            Page Not Found
          </h1>
          <p className="text-xs text-gray-500">
            The page you requested does not exist or has been moved.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

