import React from 'react';

export function Faq2() {
  const faqs = [
    { q: 'Battery Chemistry', a: 'High-density lithium-pouch cells with silicon-anode composition.' },
    { q: 'Regenerative Braking', a: 'Configurable across 5 distinct levels via handlebar switch cluster.' },
    { q: 'Chassis Geometry', a: 'Fully adjustable rake angle from 23.5° to 25.0° for track tuning.' },
    { q: 'Firmware Updates', a: 'Over-the-air (OTA) encrypted delivery via 5G telemetry module.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// SYSTEM FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL SPECIFICATION FAQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner">
              <h3 className="font-display font-extrabold text-xl text-white mb-3 text-[#ff5a1f]">// {item.q}</h3>
              <p className="font-mono-spec text-xs text-neutral-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
