export type BackgroundCategory = 'grids' | 'organic' | 'textures';

export interface BackgroundMeta {
  id: string;
  index: number;
  name: string;
  category: BackgroundCategory;
  categoryLabel: string;
  technique: string;
  description: string;
  tags: string[];
  sourceCode: string;
}

export const CATEGORY_OPTIONS: Array<{ id: 'all' | BackgroundCategory; label: string }> = [
  { id: 'all', label: 'All Patterns' },
  { id: 'grids', label: 'Grids & Geometry' },
  { id: 'organic', label: 'Organic & Glows' },
  { id: 'textures', label: 'Textures & Borders' },
];

export const BACKGROUNDS_META: BackgroundMeta[] = [
  {
    id: 'Bg1',
    index: 1,
    name: 'Subtle Dot Grid',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'CSS Radial Gradient',
    description: 'Fine 20px radial-gradient dot matrix using currentColor opacity for clean light and dark contrast.',
    tags: ['dots', 'matrix', 'grid', 'minimal'],
    sourceCode: `export function Bg1({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-900/[0.16] dark:text-white/[0.16]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1.15px, transparent 1.15px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg1 · Subtle Dot Grid</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Measured Spatial Rhythm</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              A 20px radial dot matrix calibrated with 16% ink opacity so editorial copy stays effortless to scan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg2',
    index: 2,
    name: 'Diagonal Line Patterns',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'CSS Repeating Linear Gradient',
    description: '45-degree repeating hairline rules spaced at 14px intervals.',
    tags: ['diagonal', 'stripes', 'lines', 'hatch'],
    sourceCode: `export function Bg2({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-900/[0.07] dark:text-white/[0.08]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md rounded-xl bg-white/85 px-6 py-5 backdrop-blur-[2px] dark:bg-zinc-900/80">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg2 · Diagonal Line Pattern</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Architectural Hatching</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Crisp 45-degree CSS linear stripes spaced every 14px for understated directional structure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg3',
    index: 3,
    name: 'Grid + Gradient Hero',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'Layered CSS Gradients',
    description: '40px structural grid paired with an overhead radial cobalt wash.',
    tags: ['hero', 'grid', 'gradient', 'glow'],
    sourceCode: `export function Bg3({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-900/[0.06] dark:text-white/[0.07]"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, rgba(37, 99, 235, 0.14), transparent 72%)' }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-blue-700 dark:text-blue-400">Bg3 · Grid + Gradient Hero</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Illuminated Coordinate Plane</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Combines a 40px structural grid with a soft overhead cobalt ambient wash for product hero headers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg4',
    index: 4,
    name: 'Noise / Grain Overlay',
    category: 'textures',
    categoryLabel: 'Textures & Borders',
    technique: 'SVG feTurbulence Filter',
    description: 'Procedural SVG fractalNoise overlay desaturated cleanly with zero raster images.',
    tags: ['noise', 'grain', 'film', 'texture'],
    sourceCode: `import { useId } from 'react';

export function Bg4({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const filterId = \`bg4-noise-\${useId().replace(/:/g, '')}\`;
  return (
    <div className={\`relative w-full overflow-hidden bg-stone-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.26] dark:opacity-[0.22]">
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={\`url(#\${filterId})\`} />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-600 dark:text-zinc-400">Bg4 · Noise / Grain Overlay</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Tactile Film & Paper Grain</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Generated live via SVG feTurbulence and desaturated feColorMatrix with zero raster assets.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg5',
    index: 5,
    name: 'Concentric Circle Motifs',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Inline SVG Circles',
    description: 'Seven graduated orbital SVG rings with alternating solid and dashed hairlines.',
    tags: ['circles', 'rings', 'orbital', 'radial'],
    sourceCode: `export function Bg5({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const radii = [56, 102, 152, 206, 264, 326, 392];
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full text-zinc-900/[0.11] dark:text-white/[0.13]">
        {radii.map((r, idx) => (
          <circle key={r} cx="600" cy="200" r={r} fill="none" stroke="currentColor" strokeWidth={idx % 2 === 0 ? '1' : '0.85'} strokeDasharray={idx % 2 === 1 ? '4 6' : undefined} opacity={1 - idx * 0.1} />
        ))}
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center px-8 py-12">
        {children ?? (
          <div className="max-w-sm">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg5 · Concentric Circle Motifs</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Orbital Acoustic Rings</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Seven graduated SVG circles radiate from an asymmetric anchor with alternating solid and dashed strokes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg6',
    index: 6,
    name: 'Wave / Curve Section',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Cubic Bezier SVG Waves',
    description: 'Stepped translucent cubic-bezier contours nestled along the lower plane.',
    tags: ['wave', 'curve', 'section', 'divider'],
    sourceCode: `export function Bg6({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" viewBox="0 0 1200 320" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-sky-700 dark:text-sky-400">
        <path d="M0,160 C220,90 420,230 680,150 C920,76 1060,175 1200,130 L1200,320 L0,320 Z" fill="currentColor" opacity="0.06" />
        <path d="M0,210 C260,150 480,270 760,195 C980,136 1100,220 1200,185 L1200,320 L0,320 Z" fill="currentColor" opacity="0.08" />
        <path d="M0,255 C320,210 560,295 880,235 C1040,205 1130,250 1200,232 L1200,320 L0,320 Z" fill="currentColor" opacity="0.11" />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-sky-700 dark:text-sky-400">Bg6 · Wave & Curve Backdrop</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Stepped Tidal Horizon</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Three translucent bezier contours nest cleanly along the footer plane to anchor section transitions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg7',
    index: 7,
    name: 'Blob / Organic Shapes',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Closed SVG Bezier Paths',
    description: 'Asymmetric organic silhouettes layered with an offset contour outline.',
    tags: ['blob', 'organic', 'shapes', 'abstract'],
    sourceCode: `export function Bg7({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-[#FAF9F6] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full">
        <path d="M118,-18 C178,-5 210,58 192,118 C174,178 106,222 44,205 C-18,188 -62,110 -44,48 C-26,-14 58,-31 118,-18 Z" transform="translate(95 65)" className="fill-emerald-700/[0.08] dark:fill-emerald-400/[0.11]" />
        <path d="M142,20 C196,52 214,132 178,186 C142,240 52,268 -6,232 C-64,196 -88,96 -52,42 C-16,-12 88,-12 142,20 Z" transform="translate(560 120)" className="fill-amber-700/[0.08] dark:fill-amber-300/[0.10]" />
        <path d="M142,20 C196,52 214,132 178,186 C142,240 52,268 -6,232 C-64,196 -88,96 -52,42 C-16,-12 88,-12 142,20 Z" transform="translate(548 112)" fill="none" strokeWidth="1" className="stroke-zinc-900/[0.08] dark:stroke-white/[0.10]" />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-emerald-800 dark:text-emerald-400">Bg7 · Organic Blob Forms</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Botanical Silhouette Balance</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Smooth closed cubic curves paired with an offset hairline outline bring warmth without blur haze.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg8',
    index: 8,
    name: 'Geometric Pattern Bands',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'SVG Tessellation Pattern',
    description: 'Precision frieze uniting hexagons, inner diamonds, and faceted triangles.',
    tags: ['geometric', 'hexagon', 'triangle', 'diamond', 'band'],
    sourceCode: `import { useId } from 'react';

export function Bg8({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const patternId = \`bg8-geo-\${useId().replace(/:/g, '')}\`;
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-zinc-900/[0.11] dark:text-white/[0.13]">
        <defs>
          <pattern id={patternId} width="56" height="56" patternUnits="userSpaceOnUse">
            <polygon points="28,4 50,16 50,40 28,52 6,40 6,16" fill="none" stroke="currentColor" strokeWidth="1" />
            <polygon points="28,14 40,28 28,42 16,28" fill="currentColor" opacity="0.22" />
            <polygon points="0,0 14,0 7,12" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <polygon points="56,0 42,0 49,12" fill="none" stroke="currentColor" strokeWidth="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={\`url(#\${patternId})\`} />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 pb-20 pt-10">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg8 · Geometric Pattern Band</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Hexagon & Diamond Frieze</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Repeating SVG tessellation band uniting hexagons, inner diamonds, and corner triangles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg9',
    index: 9,
    name: 'Gradient Orbs / Glows',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Dual Radial CSS Pools',
    description: 'Opposing sky and amber radial light pools tuned for high foreground contrast.',
    tags: ['orbs', 'glow', 'radial', 'gradient'],
    sourceCode: `export function Bg9({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full opacity-95 dark:opacity-60" style={{ backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, transparent 68%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full opacity-95 dark:opacity-60" style={{ backgroundImage: 'radial-gradient(circle, rgba(245, 158, 11, 0.26) 0%, transparent 68%)' }} />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg9 · Gradient Orbs / Glows</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Ambient Chromatic Depth</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Opposing cool-sky and warm-amber radial gradients create soft dimensionality with zero blur cost.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg10',
    index: 10,
    name: 'Checkerboard Subtle',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'CSS Conic Gradient Tile',
    description: 'Micro architectural checkerboard rendered in a single conic-gradient pass at 4% opacity.',
    tags: ['checkerboard', 'tiles', 'conic', 'subtle'],
    sourceCode: `export function Bg10({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-900/[0.04] dark:text-white/[0.05]"
        style={{
          backgroundImage: 'conic-gradient(currentColor 90deg, transparent 90deg 180deg, currentColor 180deg 270deg, transparent 270deg)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg10 · Subtle Checkerboard</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Low-Contrast Tiled Field</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Single-pass conic-gradient 22px tiles tuned to a whisper-quiet 4% luminance step.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg11',
    index: 11,
    name: 'Dashed-Grid Blueprint',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'SVG Major & Dashed Sub-Grid',
    description: 'Technical drafting sheet with 64px solid axes, 16px dashed subdivisions, and crosshairs.',
    tags: ['blueprint', 'dashed', 'technical', 'drafting'],
    sourceCode: `import { useId } from 'react';

export function Bg11({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const patternId = \`bg11-blueprint-\${useId().replace(/:/g, '')}\`;
  return (
    <div className={\`relative w-full overflow-hidden bg-slate-50 text-zinc-900 dark:bg-[#07101E] dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full text-blue-700/[0.15] dark:text-sky-400/[0.18]">
        <defs>
          <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 16 0 V 64 M 32 0 V 64 M 48 0 V 64 M 0 16 H 64 M 0 32 H 64 M 0 48 H 64" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.55" />
            <path d="M 64 0 H 0 V 64" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M -3 0 H 3 M 0 -3 V 3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={\`url(#\${patternId})\`} />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md rounded-lg bg-white/80 px-6 py-5 backdrop-blur-[2px] dark:bg-slate-950/75">
            <p className="font-mono text-xs tracking-wider text-blue-700 dark:text-sky-400">Bg11 · Dashed Blueprint Grid</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Drafting Sheet Precision</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Major 64px axes paired with 16px dashed SVG subdivisions and registration ticks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg12',
    index: 12,
    name: 'Constellation Network',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'SVG Nodes & Edges Graph',
    description: 'Vector coordinate graph connecting dual-ring vertices with crisp hairlines.',
    tags: ['constellation', 'network', 'nodes', 'graph'],
    sourceCode: `export function Bg12({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const nodes = [
    { x: 55, y: 65, r: 3 }, { x: 165, y: 120, r: 2.2 }, { x: 105, y: 265, r: 3.2 },
    { x: 245, y: 215, r: 2.4 }, { x: 310, y: 72, r: 2.6 }, { x: 470, y: 95, r: 3.4 },
    { x: 560, y: 260, r: 2.5 }, { x: 655, y: 78, r: 2.8 }, { x: 735, y: 190, r: 3.2 },
    { x: 690, y: 310, r: 2.2 },
  ];
  const edges = [[0,1],[1,2],[1,3],[2,3],[1,4],[0,4],[4,5],[3,6],[5,6],[5,7],[7,8],[8,9],[6,9]];
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full text-zinc-900 dark:text-white">
        {edges.map(([a, b]) => (
          <line key={\`\${a}-\${b}\`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="currentColor" strokeWidth="1" opacity="0.14" />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={node.r + 4.5} fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.16" />
            <circle cx={node.x} cy={node.y} r={node.r} fill="currentColor" opacity="0.34" />
          </g>
        ))}
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md rounded-xl bg-white/70 px-6 py-5 backdrop-blur-[1px] dark:bg-zinc-950/70">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg12 · Constellation Network</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Vector Node Topology</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Linked SVG coordinate vertices with halo rings map relational depth across the stage.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg13',
    index: 13,
    name: 'Layered Color Bands',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Skewed Translucent Planes',
    description: 'Three stepped angled planes at progressive ink and indigo opacities.',
    tags: ['bands', 'layers', 'stripes', 'strata'],
    sourceCode: `export function Bg13({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-10 top-12 h-24 -rotate-3 bg-zinc-900/[0.03] dark:bg-white/[0.035]" />
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-10 top-28 h-28 -rotate-3 bg-indigo-600/[0.045] dark:bg-indigo-400/[0.06]" />
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-10 bottom-2 h-28 -rotate-3 bg-zinc-900/[0.055] dark:bg-white/[0.065]" />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-indigo-700 dark:text-indigo-400">Bg13 · Layered Color Bands</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Stepped Elevation Strata</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Three gently canted translucent planes establish visual rhythm without hard borders.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg14',
    index: 14,
    name: 'Radial Sunburst',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Masked Conic Gradient Rays',
    description: 'Repeating conic angular beams attenuated cleanly with a radial edge mask.',
    tags: ['sunburst', 'rays', 'conic', 'radial'],
    sourceCode: `export function Bg14({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-[#FFFDF8] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-amber-800/[0.08] dark:text-amber-300/[0.10]"
        style={{
          backgroundImage: 'repeating-conic-gradient(from 0deg at 82% 22%, currentColor 0deg 5deg, transparent 5deg 15deg)',
          maskImage: 'radial-gradient(circle at 82% 22%, #000 8%, transparent 74%)',
          WebkitMaskImage: 'radial-gradient(circle at 82% 22%, #000 8%, transparent 74%)',
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center px-8 py-12">
        {children ?? (
          <div className="max-w-sm">
            <p className="font-mono text-xs tracking-wider text-amber-800 dark:text-amber-400">Bg14 · Radial Sunburst</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Conic Horizon Rays</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              CSS repeating-conic-gradient beams softly attenuated with a matching radial fade mask.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg15',
    index: 15,
    name: 'Crosshatch Texture',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'Dual-Angle SVG Hatching',
    description: 'Bilateral 12px vector hatching inspired by architectural intaglio prints.',
    tags: ['crosshatch', 'engraving', 'mesh', 'lines'],
    sourceCode: `import { useId } from 'react';

export function Bg15({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const patternId = \`bg15-crosshatch-\${useId().replace(/:/g, '')}\`;
  return (
    <div className={\`relative w-full overflow-hidden bg-stone-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full text-zinc-900/[0.08] dark:text-white/[0.09]">
        <defs>
          <pattern id={patternId} width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 0 12 L 12 0 M -3 3 L 3 -3 M 9 15 L 15 9" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 0 0 L 12 12 M -3 9 L 3 15 M 9 -3 L 15 3" stroke="currentColor" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={\`url(#\${patternId})\`} />
      </svg>
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md rounded-xl bg-stone-50/90 px-6 py-5 dark:bg-zinc-950/85">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg15 · Crosshatch Texture</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Engraved Mesh Surface</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Bilateral 12px vector hatching evokes fine intaglio printmaking without raster files.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg16',
    index: 16,
    name: 'Masked Gradient Edges',
    category: 'grids',
    categoryLabel: 'Grids & Geometry',
    technique: 'CSS Mask-Image Feathering',
    description: '26px structural grid softly feathered into the canvas perimeter via radial mask-image.',
    tags: ['mask', 'fade', 'vignette', 'grid'],
    sourceCode: `export function Bg16({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-900/[0.11] dark:text-white/[0.13]"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 72% 68% at 50% 50%, #000 28%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 72% 68% at 50% 50%, #000 28%, transparent 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg16 · Masked Gradient Edges</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Feathered Horizon Field</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              CSS radial mask-image dissolves crisp 26px grid lines softly into pure canvas around the edges.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg17',
    index: 17,
    name: 'Aurora Gradient',
    category: 'organic',
    categoryLabel: 'Organic & Glows',
    technique: 'Multi-Radial Ribbon Sweep',
    description: 'Overlapping teal, indigo, and sky elliptical washes preserving sharp text legibility.',
    tags: ['aurora', 'gradient', 'ambient', 'mesh'],
    sourceCode: `export function Bg17({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-95 dark:opacity-75"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 68% 55% at 16% 24%, rgba(20, 184, 166, 0.25), transparent 68%)',
            'radial-gradient(ellipse 64% 58% at 84% 20%, rgba(99, 102, 241, 0.23), transparent 66%)',
            'radial-gradient(ellipse 72% 48% at 52% 86%, rgba(56, 189, 248, 0.21), transparent 70%)',
          ].join(', '),
        }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-teal-800 dark:text-teal-300">Bg17 · Aurora Gradient</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Atmospheric Ribbon Wash</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Overlapping teal, indigo, and sky elliptical gradients maintain high text contrast in both modes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg18',
    index: 18,
    name: 'Paper / Linen Texture',
    category: 'textures',
    categoryLabel: 'Textures & Borders',
    technique: 'Perpendicular Warp & Weft CSS',
    description: 'Fine 5px orthogonal linen weave paired with an archival edge vignette.',
    tags: ['paper', 'linen', 'fabric', 'weave'],
    sourceCode: `export function Bg18({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`relative w-full overflow-hidden bg-[#F9F6F0] text-zinc-900 dark:bg-[#121110] dark:text-zinc-100 \${className}\`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-stone-900/[0.045] dark:text-stone-100/[0.045]"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 5px)',
            'repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 5px)',
          ].join(', '),
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 45%, rgba(120, 113, 108, 0.09) 100%)' }}
      />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-stone-600 dark:text-stone-400">Bg18 · Paper & Linen Texture</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Woven Archival Cloth</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              Perpendicular 5px warp-and-weft hairlines and a soft perimeter vignette evoke heavy cotton linen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg19',
    index: 19,
    name: 'Striped Accent Borders',
    category: 'textures',
    categoryLabel: 'Textures & Borders',
    technique: 'Hatched Perimeter Rails',
    description: '16px diagonal hatched top and bottom border rails framing the content canvas.',
    tags: ['borders', 'stripes', 'rails', 'frame'],
    sourceCode: `export function Bg19({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const stripeStyle = {
    backgroundImage: 'repeating-linear-gradient(-45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 8px)',
  };
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-4 border-b border-zinc-900/10 text-zinc-900/[0.14] dark:border-white/10 dark:text-white/[0.16]" style={stripeStyle} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-4 border-t border-zinc-900/10 text-zinc-900/[0.14] dark:border-white/10 dark:text-white/[0.16]" style={stripeStyle} />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-6 py-14">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg19 · Striped Accent Borders</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Precision Perimeter Rails</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Crisp 16px hatched border bands top and bottom create an unmistakable editorial frame.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'Bg20',
    index: 20,
    name: 'Corner Flourish Motifs',
    category: 'textures',
    categoryLabel: 'Textures & Borders',
    technique: 'Rotated Vector Ornaments',
    description: 'Four SVG architectural corner brackets with radial arcs and diamond finials.',
    tags: ['corners', 'flourish', 'brackets', 'ornament'],
    sourceCode: `export function Bg20({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const Corner = ({ className: pos }: { className: string }) => (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={\`pointer-events-none absolute h-12 w-12 text-zinc-900/30 dark:text-white/30 \${pos}\`}>
      <path d="M 4 40 V 8 A 4 4 0 0 1 8 4 H 40" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M 10 28 A 18 18 0 0 1 28 10" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.65" />
      <polygon points="10,6 13,9 10,12 7,9" fill="currentColor" opacity="0.7" />
    </svg>
  );
  return (
    <div className={\`relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 \${className}\`}>
      <Corner className="top-4 left-4" />
      <Corner className="top-4 right-4 rotate-90" />
      <Corner className="right-4 bottom-4 rotate-180" />
      <Corner className="bottom-4 left-4 -rotate-90" />
      <div className="relative z-10 flex min-h-[280px] w-full items-center justify-center px-10 py-12">
        {children ?? (
          <div className="max-w-md text-center">
            <p className="font-mono text-xs tracking-wider text-zinc-500 dark:text-zinc-400">Bg20 · Corner Flourish Motifs</p>
            <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">Mitered Specimen Brackets</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Four rotated SVG corner ornaments anchor an open editorial field with subtle classical poise.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
  },
];
