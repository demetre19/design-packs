import React from 'react';

export function ContactForm3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-2xl mx-auto border border-black p-8">
        <div className="text-center mb-8 border-b border-black pb-4">
          <h2 className="text-2xl font-black uppercase tracking-tighter">MINIMAL INQUIRY FORM</h2>
          <p className="text-[10px] uppercase tracking-widest text-neutral-600 mt-1">DIRECT TRANSMISSION TO MARCUS STERLING</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-xs uppercase tracking-wider">
          <div>
            <label className="font-bold block mb-1">NAME / ENTITY</label>
            <input type="text" placeholder="ENTER NAME" className="w-full border border-black p-2.5 bg-neutral-50" />
          </div>
          <div>
            <label className="font-bold block mb-1">ELECTRONIC MAIL</label>
            <input type="email" placeholder="ENTER EMAIL" className="w-full border border-black p-2.5 bg-neutral-50" />
          </div>
          <div>
            <label className="font-bold block mb-1">MESSAGE SPECIFICATION</label>
            <textarea rows={3} placeholder="ENTER MESSAGE..." className="w-full border border-black p-2.5 bg-neutral-50"></textarea>
          </div>
          <button type="submit" className="w-full border border-black bg-black text-white font-bold py-3 hover:bg-neutral-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
