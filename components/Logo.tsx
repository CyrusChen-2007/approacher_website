import React from 'react';

interface LogoProps {
  className?: string;
  color?: string; // Color of the 'A'
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", color = "currentColor" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Approacher Studio Logo">
      {/* The Serif 'A' */}
      <text
        x="50"
        y="88"
        fontSize="110"
        fontFamily="'Playfair Display', serif"
        fontWeight="900"
        textAnchor="middle"
        fill={color}
        style={{ letterSpacing: '-0.05em' }}
      >
        A
      </text>
      
      {/* The Orange Arrow shaft */}
      <rect x="15" y="52" width="65" height="8" fill="#FF3B30" />
      
      {/* The Arrow Head */}
      <path d="M78 46 L95 56 L78 66 V46 Z" fill="#FF3B30" />
    </svg>
  );
};