import React from 'react';

export function Navbar2() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <a href="#" className="font-light text-2xl tracking-tight lowercase">
          atelier nera<span className="text-black/40">.</span>
        </a>
        <nav className="flex items-center gap-8 text-xs font-light lowercase text-black/70">
          <a href="#" className="hover:text-black transition-colors">selected works</a>
          <a href="#" className="hover:text-black transition-colors">exhibitions</a>
          <a href="#" className="hover:text-black transition-colors">monograph</a>
          <a href="#" className="hover:text-black transition-colors">office</a>
        </nav>
      </div>
    </header>
  );
}
