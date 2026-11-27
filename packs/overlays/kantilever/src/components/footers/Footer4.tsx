import React from 'react';

export const Footer4: React.FC = () => {
  return (
    <footer className="bg-[#14161a] text-[#f7f6f3] pt-24 pb-12 relative overflow-hidden">
      {/* Big watermark wordmark */}
      <div className="absolute left-0 bottom-0 text-[18vw] font-extrabold text-[#f7f6f3] opacity-[0.03] pointer-events-none font-mono select-none leading-none whitespace-nowrap">
        KANTILEVER
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#ffc72c] uppercase">// ARCHITECTURAL PRACTICE</span>
            <h3 className="text-3xl font-extrabold uppercase">KANTILEVER ARCHITECTS</h3>
          </div>
          <div className="font-mono text-xs text-[#f7f6f3]/60">
            ZURICH // TOKYO // LONDON
          </div>
        </div>

        <div className="border-t border-[#f7f6f3]/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#f7f6f3]/50">
          <span>© 2026 KANTILEVER. ALL RIGHTS RESERVED.</span>
          <span>DIAGONAL GEOMETRY SYSTEM</span>
        </div>
      </div>
    </footer>
  );
};
