import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden border-y-2 border-black bg-[#FF3B30] py-2 flex">
      <div 
        className="animate-marquee whitespace-nowrap flex items-center" 
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First copy of content */}
        <div className="flex shrink-0">
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
        </div>
        {/* Duplicate copy for seamless loop */}
        <div className="flex shrink-0">
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
           <span className="text-xl font-black uppercase text-white mx-8">{text}</span>
        </div>
      </div>
    </div>
  );
};