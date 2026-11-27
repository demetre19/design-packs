import React from 'react';

export const Footer3: React.FC = () => {
  return (
    <footer className="bg-[#14161a] text-[#f7f6f3] py-16 border-t border-[#f7f6f3]/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-xs">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-[#ffc72c] transform skew-x-[-12deg]" />
          <span className="font-extrabold uppercase text-sm">KANTILEVER // 44.0</span>
        </div>
        <div className="flex gap-8 uppercase text-[#f7f6f3]/70">
          <a href="#privacy" className="hover:text-[#ffc72c]">Privacy Index</a>
          <a href="#terms" className="hover:text-[#ffc72c]">Terms & Tectonics</a>
          <a href="#press" className="hover:text-[#ffc72c]">Press Kit</a>
        </div>
        <span className="text-[#f7f6f3]/40">© 2026 ZURICH / TOKYO</span>
      </div>
    </footer>
  );
};
