import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing1() {
  const plans = [
    {
      name: "Boutique Audit",
      price: "$4,500",
      period: "one-time",
      desc: "Ideal for established clinics seeking a focused brand and patient journey review.",
      features: [
        "Complete clinical brand audit",
        "Patient touchpoint analysis",
        "Spatial acoustics & lighting review",
        "Actionable strategic roadmap"
      ],
      popular: false
    },
    {
      name: "Clinical Ecosystem",
      price: "$12,800",
      period: "per quarter",
      desc: "Comprehensive transformation for practices scaling their longevity offerings.",
      features: [
        "Full brand identity architecture",
        "Bespoke longevity protocols",
        "Digital patient intake redesign",
        "Quarterly staff training workshops",
        "Dedicated strategic advisor"
      ],
      popular: true
    },
    {
      name: "Enterprise Sanctuary",
      price: "Custom",
      period: "annual retainer",
      desc: "For multi-location medical centers and executive longevity institutes.",
      features: [
        "Multi-site spatial architecture",
        "Custom clinical software integration",
        "Executive health retreat curation",
        "24/7 priority advisory board access"
      ],
      popular: false
    }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Investment Tiers
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Transparent partnership engagements.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-[28px] p-8 flex flex-col justify-between transition-all ${
                p.popular
                  ? 'bg-[#1d4f47] text-[#faf6f0] shadow-2xl ring-2 ring-[#2a7a6d] scale-105'
                  : 'bg-[#e8f0ec] text-[#122420] shadow-sm'
              }`}
            >
              <div>
                {p.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#2a7a6d] text-[#faf6f0] text-xs uppercase tracking-widest font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
                <p className={`text-sm font-light mb-6 ${p.popular ? 'text-[#faf6f0]/80' : 'text-[#122420]/80'}`}>{p.desc}</p>
                <div className="mb-6">
                  <span className="font-serif text-4xl font-bold">{p.price}</span>
                  <span className={`text-xs ml-2 uppercase tracking-wider ${p.popular ? 'text-[#faf6f0]/70' : 'text-[#122420]/70'}`}>/ {p.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm">
                      <Check className={`w-4 h-4 ${p.popular ? 'text-[#e8f0ec]' : 'text-[#2a7a6d]'}`} />
                      <span className={p.popular ? 'text-[#faf6f0]/90' : 'text-[#122420]/90'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#select"
                className={`w-full py-3.5 rounded-full text-center text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  p.popular
                    ? 'bg-[#faf6f0] text-[#1d4f47] hover:bg-[#faf6f0]/90'
                    : 'bg-[#1d4f47] text-[#faf6f0] hover:bg-[#153b34]'
                }`}
              >
                <span>Select Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
