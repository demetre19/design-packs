import type {SpecimenMeta} from '../utils/fxMath';

export interface SpecimenDefinition extends SpecimenMeta {
  code: string;
}

export const SPECIMENS: SpecimenDefinition[] = [
  {
    id: 'Fx1',
    number: '01',
    title: 'Scroll Progress Bar',
    category: 'Scroll & Layout',
    mechanism: 'Scroll Listener · ScaleX Transform',
    description:
      'Pinned top-of-page reading indicator driven by normalized viewport scroll depth using GPU-composited scaleX.',
    code: `export function Fx1() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-[3px] bg-zinc-200">
      <div className="h-full bg-[#2563EB] origin-left" style={{ transform: \`scaleX(\${progress})\` }} />
    </div>
  );
}`,
  },
  {
    id: 'Fx2',
    number: '02',
    title: 'Scroll-Down Indicator',
    category: 'Scroll & Layout',
    mechanism: 'CSS Keyframes · Mouse & Chevron',
    description:
      'Dual animated downward cues pairing a bouncing mouse scroll wheel with a staggered three-chevron cascade.',
    code: `export function Fx2() {
  return (
    <button onClick={() => window.scrollBy({ top: 420, behavior: 'smooth' })} className="flex flex-col items-center gap-2">
      <span className="flex justify-center w-7 h-11 rounded-full border-2 border-zinc-800">
        <span className="mt-2 w-1 h-2.5 rounded-full bg-[#2563EB] fx-animate-wheel" />
      </span>
    </button>
  );
}`,
  },
  {
    id: 'Fx3',
    number: '03',
    title: 'Animated Counter Stats',
    category: 'Typography',
    mechanism: 'IntersectionObserver · rAF Ease-Out',
    description:
      'Tabular numeric metrics that count up smoothly upon entering the viewport via requestAnimationFrame and cubic easing.',
    code: `export function Fx3({ target = 1480 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - start) / 1100, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <span className="font-mono tabular-nums">{value.toLocaleString()}</span>;
}`,
  },
  {
    id: 'Fx4',
    number: '04',
    title: 'Typewriter Text Effect',
    category: 'Typography',
    mechanism: 'useState · useEffect Timer',
    description:
      'Character-by-character typing and deletion cadence across curated phrases with an animated blinking insertion caret.',
    code: `export function Fx4({ phrases = ['Tactile motion builds trust.'] }) {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setChars((c) => Math.min(c + 1, phrases[0].length)), 52);
    return () => clearTimeout(t);
  }, [chars, phrases]);
  return <p className="font-mono">{phrases[0].slice(0, chars)}<span className="fx-caret">|</span></p>;
}`,
  },
  {
    id: 'Fx5',
    number: '05',
    title: 'Text Reveal on Hover',
    category: 'Typography',
    mechanism: 'Overflow Clip · TranslateY Swap',
    description:
      'Dual-line vertical mask transition that swaps primary copy upward while revealing secondary action copy from below.',
    code: `export function Fx5() {
  return (
    <button className="group px-4 py-3 bg-zinc-50 hover:bg-zinc-900 rounded-lg transition-colors">
      <span className="block h-6 overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">View Case Study</span>
        <span className="block text-white transition-transform duration-300 group-hover:-translate-y-full">Explore Breakdown</span>
      </span>
    </button>
  );
}`,
  },
  {
    id: 'Fx6',
    number: '06',
    title: 'Letter-Spacing Expand',
    category: 'Typography',
    mechanism: 'Tracking Transition · Cubic-Bezier',
    description:
      'Editorial serif headline that opens its kerning smoothly on hover or keyboard focus for quiet emphasis.',
    code: `export function Fx6() {
  return (
    <a href="#fx6" className="group block p-4 border border-zinc-200 rounded-lg">
      <span className="font-serif text-xl tracking-[-0.02em] group-hover:tracking-[0.14em] transition-[letter-spacing] duration-400">
        Architectural Clarity
      </span>
    </a>
  );
}`,
  },
  {
    id: 'Fx7',
    number: '07',
    title: 'Marquee Strip',
    category: 'Scroll & Layout',
    mechanism: 'Dual-Track CSS Keyframe Loop',
    description:
      'Seamless infinite horizontal ticker with edge fade masks, hover-to-pause physics, and direction reversal controls.',
    span: 'wide',
    code: `export function Fx7({ items = ['Nordic Acoustics', 'Helios Optics'] }) {
  return (
    <div className="overflow-hidden fx-marquee-container">
      <div className="flex w-max fx-marquee-track">
        {[0, 1].map((d) => (
          <div key={d} className="flex gap-8 pr-8">{items.map((i) => <span key={i}>{i}</span>)}</div>
        ))}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Fx8',
    number: '08',
    title: 'Hover Lift Cards',
    category: 'Feedback & Cards',
    mechanism: 'TranslateY · Elevation Shadow',
    description:
      'Tactile surface cards that lift 6px on hover with crisp directional shadow depth and subtle corner arrow travel.',
    code: `export function Fx8() {
  return (
    <button className="p-4 rounded-xl border border-zinc-200 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      Starter Kit
    </button>
  );
}`,
  },
  {
    id: 'Fx9',
    number: '09',
    title: 'Magnetic-Feel Button',
    category: 'Buttons & CTA',
    mechanism: 'Pointer Delta · Dual-Layer Translate',
    description:
      'Calculates normalized pointer distance from the button center to attract both container and label smoothly toward the cursor.',
    code: `export function Fx9() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <button
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({ x: ((e.clientX - r.left) / r.width - 0.5) * 24, y: ((e.clientY - r.top) / r.height - 0.5) * 24 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: \`translate3d(\${offset.x}px, \${offset.y}px, 0)\` }}
      className="px-6 py-3 rounded-lg bg-zinc-900 text-white transition-transform duration-200"
    >
      Magnetic Primary CTA
    </button>
  );
}`,
  },
  {
    id: 'Fx10',
    number: '10',
    title: 'Pulse Ring CTA',
    category: 'Buttons & CTA',
    mechanism: 'Concentric Keyframe Ripples',
    description:
      'Staggered dual-ring expansion around a primary call-to-action button for gentle focal attention without visual noise.',
    code: `export function Fx10() {
  return (
    <div className="relative inline-flex">
      <span className="absolute inset-0 rounded-lg border-2 border-[#2563EB] fx-pulse-ring pointer-events-none" />
      <button className="relative z-10 px-6 py-3 rounded-lg bg-[#2563EB] text-white">Request Access</button>
    </div>
  );
}`,
  },
  {
    id: 'Fx11',
    number: '11',
    title: 'Shine Sweep on Buttons',
    category: 'Buttons & CTA',
    mechanism: 'Skewed Specular Gradient Sweep',
    description:
      'Diagonal highlight bar that sweeps across solid dark and accent buttons on pointer hover or direct click trigger.',
    code: `export function Fx11() {
  return (
    <button className="group relative overflow-hidden px-5 py-2.5 rounded-lg bg-zinc-900 text-white">
      <span className="fx-shine-bar absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <span className="relative z-10">Deploy Build</span>
    </button>
  );
}`,
  },
  {
    id: 'Fx12',
    number: '12',
    title: 'Animated Underline Links',
    category: 'Buttons & CTA',
    mechanism: 'Pseudo-Element ScaleX Origins',
    description:
      'Three distinct underline behaviors using transform-origin variations: left-to-right sweep, center-out expansion, and sliding exit.',
    code: `export function Fx12() {
  return (
    <a href="#demo" className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#2563EB] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
      Left Sweep
    </a>
  );
}`,
  },
  {
    id: 'Fx13',
    number: '13',
    title: 'Icon Bounce & Rotate',
    category: 'Buttons & CTA',
    mechanism: 'Group Hover Transform Curves',
    description:
      'Action controls pairing 180-degree rotation, spring bell tilt, and directional arrow nudge on hover.',
    code: `export function Fx13() {
  return (
    <button className="group flex items-center gap-2 p-3 border rounded-lg">
      <RefreshCw className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
      <span>Rotate</span>
    </button>
  );
}`,
  },
  {
    id: 'Fx14',
    number: '14',
    title: 'Skeleton Shimmer Variants',
    category: 'Feedback & Cards',
    mechanism: 'CSS Linear Gradient Wave',
    description:
      'Placeholder avatar and text rows with a smooth horizontal shimmer sweep plus a live toggle to preview hydrated state.',
    code: `export function Fx14() {
  return (
    <div className="flex gap-3 p-3.5 rounded-lg border border-zinc-200">
      <div className="relative overflow-hidden w-12 h-12 rounded-lg bg-zinc-200 fx-skeleton-shimmer" />
      <div className="flex-1 space-y-2">
        <div className="relative overflow-hidden h-3.5 w-3/4 rounded bg-zinc-200 fx-skeleton-shimmer" />
        <div className="relative overflow-hidden h-3 w-1/2 rounded bg-zinc-200 fx-skeleton-shimmer" />
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Fx15',
    number: '15',
    title: 'Confetti Celebration Burst',
    category: 'Feedback & Cards',
    mechanism: 'CSS Custom Property Particles',
    description:
      'Pure CSS particle burst radiating outward along calculated polar trajectories using --tx, --ty, and --rot variables.',
    code: `export function Fx15() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)} className="relative px-5 py-2.5 rounded-lg bg-zinc-900 text-white">
      Trigger Burst ({count})
    </button>
  );
}`,
  },
  {
    id: 'Fx16',
    number: '16',
    title: 'Checkmark Draw Animation',
    category: 'Feedback & Cards',
    mechanism: 'SVG Stroke-Dashoffset Draw',
    description:
      'Two-stage vector confirmation sequence drawing the outer ring before sketching the inner checkmark path.',
    code: `export function Fx16() {
  return (
    <svg viewBox="0 0 56 56" className="w-11 h-11">
      <circle cx="28" cy="28" r="25" fill="none" stroke="#2563EB" strokeWidth="2.5" className="fx-check-circle" />
      <path d="M17.5 29l7 7 14-15" fill="none" stroke="#09090B" strokeWidth="2.75" className="fx-check-mark" />
    </svg>
  );
}`,
  },
  {
    id: 'Fx17',
    number: '17',
    title: 'Page-Load Fade-In Group',
    category: 'Scroll & Layout',
    mechanism: 'Staggered Animation Delay',
    description:
      'Ordered entrance group applying 80ms incremental delays across child rows with an on-demand replay trigger.',
    code: `export function Fx17({ items = ['Step 01', 'Step 02', 'Step 03'] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={item} style={{ animationDelay: \`\${i * 80}ms\` }} className="fx-stagger-item p-2.5 border rounded-lg">
          {item}
        </li>
      ))}
    </ul>
  );
}`,
  },
  {
    id: 'Fx18',
    number: '18',
    title: 'Cursor-Follow Dot',
    category: 'Feedback & Cards',
    mechanism: 'rAF Linear Interpolation',
    description:
      'Smoothly damped pointer follower using requestAnimationFrame linear interpolation inside a dedicated tracking stage.',
    span: 'wide',
    code: `export function Fx18() {
  const target = useRef({ x: 100, y: 50 });
  const dot = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let cur = { x: 100, y: 50 }, raf = 0;
    const loop = () => {
      cur = { x: cur.x + (target.current.x - cur.x) * 0.16, y: cur.y + (target.current.y - cur.y) * 0.16 };
      if (dot.current) dot.current.style.transform = \`translate3d(\${cur.x}px, \${cur.y}px, 0)\`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div onMouseMove={(e) => { target.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }; }} className="relative h-28"><span ref={dot} className="absolute w-5 h-5 rounded-full bg-[#2563EB]" /></div>;
}`,
  },
  {
    id: 'Fx19',
    number: '19',
    title: 'Image Parallax-Block',
    category: 'Scroll & Layout',
    mechanism: 'Multi-Plane TranslateY Layers',
    description:
      'Three depth planes (backdrop architecture, inset detail frame, and foreground caption) moving at distinct translateY velocities.',
    span: 'wide',
    code: `export function Fx19({ ratio = 0.5 }) {
  const bgY = (ratio - 0.5) * -36;
  const fgY = (ratio - 0.5) * 27;
  return (
    <div className="relative h-56 overflow-hidden rounded-xl">
      <img src="/atrium.jpg" style={{ transform: \`translate3d(0, \${bgY}px, 0) scale(1.16)\` }} className="absolute inset-0 w-full h-full object-cover" />
      <div style={{ transform: \`translate3d(0, \${fgY}px, 0)\` }} className="absolute bottom-4 left-4 text-white">Atrium Light Study</div>
    </div>
  );
}`,
  },
  {
    id: 'Fx20',
    number: '20',
    title: 'Gradient Border Animation',
    category: 'Feedback & Cards',
    mechanism: 'CSS @property Conic Sweep',
    description:
      'Continuous conic gradient perimeter rotating cleanly around a crisp card inset via a registered CSS custom angle property.',
    span: 'wide',
    code: `export function Fx20() {
  return (
    <div className="fx-gradient-border-box p-[1.5px] rounded-xl">
      <div className="rounded-[10.5px] bg-white p-4">
        Conic Perimeter Frame
      </div>
    </div>
  );
}`,
  },
];
