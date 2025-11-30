import React from 'react';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wider py-3 px-6 transition-transform active:translate-x-[2px] active:translate-y-[2px] border-2 border-black focus:outline-none";
  
  const variants = {
    primary: "bg-[#0047BB] text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-[#FF3B30] text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-white text-black hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
