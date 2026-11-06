import React, { useState } from 'react';
import { Utensils, Sparkles, Building2 } from 'lucide-react';

export default function SafeImage({
  src,
  alt = 'Restaurant Item',
  className = '',
  title = '',
  category = 'food',
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const isHall = category.toLowerCase().includes('hall') || category.toLowerCase().includes('ambience');
    return (
      <div
        className={`flex flex-col items-center justify-center p-4 text-center select-none ${
          isHall
            ? 'bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-200'
            : 'bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-amber-100'
        } ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
          {isHall ? (
            <Building2 className="w-6 h-6 text-amber-300" />
          ) : (
            <Utensils className="w-6 h-6 text-amber-300" />
          )}
        </div>
        <span className="font-semibold text-xs tracking-wider uppercase opacity-90">
          {category || 'Vishnu Vaibhava'}
        </span>
        <span className="font-display font-medium text-sm mt-1 line-clamp-1 px-2 text-white">
          {title || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
}

