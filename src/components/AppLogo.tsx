import React, { useState } from 'react';

interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  size = 'md',
  showText = false,
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);

  const dimensionClasses = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`relative ${dimensionClasses} shrink-0 rounded-2xl overflow-hidden bg-white shadow-sm border border-emerald-100 flex items-center justify-center p-0.5`}>
        {!imgError ? (
          <img
            src="/logo.jpg"
            alt="Pharmacie - Santé Conseil Proximité"
            className="w-full h-full object-contain rounded-xl"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High quality SVG vector replica matching user's logo */
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Circular Swoosh */}
            <path
              d="M 100 20 A 80 80 0 1 1 35 140"
              stroke="#2E7D32"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Natural Green Leaves at bottom left */}
            <path
              d="M 40 145 C 20 140 15 115 35 110 C 45 125 45 135 40 145 Z"
              fill="#4CAF50"
            />
            <path
              d="M 48 152 C 40 135 55 120 70 128 C 65 145 55 150 48 152 Z"
              fill="#81C784"
            />
            {/* Green Pharmacy Cross */}
            <path
              d="M 85 45 H 115 V 75 H 145 V 105 H 115 V 135 H 85 V 105 H 55 V 75 H 85 Z"
              fill="#2E7D32"
              rx="4"
            />
            {/* White Bowl of Hygieia (Caduceus) */}
            <path
              d="M 75 80 Q 100 80 125 80 Q 120 98 100 100 Q 80 98 75 80 Z"
              fill="#FFFFFF"
            />
            {/* Stem & Base */}
            <rect x="97" y="100" width="6" height="22" fill="#FFFFFF" />
            <path d="M 85 122 H 115 V 126 H 85 Z" fill="#FFFFFF" />
            {/* Snake coiling */}
            <path
              d="M 100 120 Q 90 110 100 100 Q 110 90 98 80 Q 94 72 105 70"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
        
        {/* Small Côte d'Ivoire flag tag */}
        <div className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-3.5 overflow-hidden rounded-xs border border-white shadow-xs">
          <span className="w-1/3 bg-[#FF8200]" />
          <span className="w-1/3 bg-white" />
          <span className="w-1/3 bg-[#009A44]" />
        </div>
      </div>

      {showText && (
        <div className="leading-tight">
          <span className="font-extrabold text-slate-900 block tracking-tight text-base sm:text-lg">
            Pharmacies <span className="text-[#1F7A4D]">CI</span>
          </span>
          <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wider block">
            Santé • Conseil • Proximité
          </span>
        </div>
      )}
    </div>
  );
};
