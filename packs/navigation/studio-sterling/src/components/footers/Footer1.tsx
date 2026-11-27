import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-b border-black py-8 mb-8 text-center">
          <div className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            STUDIO STERLING
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs uppercase tracking-wider">
          <div>
            <span className="font-bold block mb-1">LONDON STUDIO</span>
            14 Great Portland Street, Fitzrovia, London W1W 8QP
          </div>
          <div>
            <span className="font-bold block mb-1">ZURICH STUDIO</span>
            Limmatquai 112, 8001 Zürich, Switzerland
          </div>
          <div>
            <span className="font-bold block mb-1">COMMUNICATIONS</span>
            studio@marcussterling.com / +44 20 7946 0912
          </div>
        </div>
      </div>
    </footer>
  );
}
