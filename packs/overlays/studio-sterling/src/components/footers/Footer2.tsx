import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
          <h3 className="font-black text-sm uppercase tracking-tighter">RESUME CONTACT MATRIX // ARCHIVE</h3>
          <span className="text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-0.5">DOC-END</span>
        </div>
        <div className="border border-black divide-y divide-black text-xs uppercase tracking-wider">
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-bold text-neutral-500">PRACTITIONER</span>
            <span className="font-black">Marcus Sterling, Design Director</span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-bold text-neutral-500">ELECTRONIC MAIL</span>
            <span>studio@marcussterling.com</span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-bold text-neutral-500">TELEPHONE LINE</span>
            <span>+44 (0)20 7946 0912</span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-bold text-neutral-500">LEGAL COPYRIGHT</span>
            <span>© 2014–2026 Studio Sterling. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
