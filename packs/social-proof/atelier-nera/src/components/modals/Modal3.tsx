import React from 'react';

export function Modal3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">modal 03 / image monograph viewer</div>
      <div className="border border-black/10 p-8 max-w-xl mx-auto bg-white space-y-6">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-black/40">
          <span>plate viewer [iv]</span>
          <span>[×]</span>
        </div>
        <div className="w-full h-72 bg-neutral-100 p-2 border border-black/10">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Viewer" className="w-full h-full object-cover grayscale contrast-125" />
        </div>
        <div className="flex justify-between items-baseline text-xs font-light">
          <span className="lowercase">portrait of space no. 09</span>
          <span className="text-black/50">gelatin silver print</span>
        </div>
      </div>
    </section>
  );
}
