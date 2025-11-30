import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', grid = false, noPadding = false }) => {
  return (
    <section id={id} className={`border-b-2 border-black ${grid ? 'bg-black gap-0.5' : 'bg-white'} ${className}`}>
      {title && (
        <div className="border-b-2 border-black p-6 bg-white sticky top-0 z-10">
          {/* Added text-black to ensure title is visible even if section has text-white */}
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">{title}</h2>
        </div>
      )}
      <div className={`${(grid || noPadding) ? 'h-full w-full' : 'p-6'}`}>
        {children}
      </div>
    </section>
  );
};