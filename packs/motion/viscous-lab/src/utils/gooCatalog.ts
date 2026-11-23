export type GooCategory =
  | 'all'
  | 'svg-metaballs'
  | 'buttons-hover'
  | 'morph-clip'
  | 'nav-controls'
  | 'loaders-text';

export interface GooSpecimenMeta {
  id: number;
  componentName: `Goo${number}`;
  title: string;
  category: Exclude<GooCategory, 'all'>;
  technique: string;
  trigger: string;
  description: string;
  codeExcerpt: string;
}

export const GOO_CATEGORIES: { id: GooCategory; label: string }[] = [
  { id: 'all', label: 'All 20' },
  { id: 'svg-metaballs', label: 'SVG Metaballs' },
  { id: 'buttons-hover', label: 'Buttons & Hover' },
  { id: 'morph-clip', label: 'Morph & Clip' },
  { id: 'nav-controls', label: 'Nav & Controls' },
  { id: 'loaders-text', label: 'Loaders & Text' },
];

export const CATEGORY_LABELS: Record<Exclude<GooCategory, 'all'>, string> = {
  'svg-metaballs': 'SVG Metaballs',
  'buttons-hover': 'Buttons & Hover',
  'morph-clip': 'Morph & Clip',
  'nav-controls': 'Nav & Controls',
  'loaders-text': 'Loaders & Text',
};

export const GOO_SPECIMENS: GooSpecimenMeta[] = [
  {
    id: 1,
    componentName: 'Goo1',
    title: 'Approach & Coalesce',
    category: 'svg-metaballs',
    technique: 'feGaussianBlur + feColorMatrix',
    trigger: 'Continuous · Click to lock merge',
    description:
      'Two droplets approach along an axis until their blurred alpha fields cross the color-matrix threshold, forming a liquid neck bridge.',
    codeExcerpt: `<filter id="goo-filter-1">
  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
  <feColorMatrix in="blur" mode="matrix"
    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
</filter>`,
  },
  {
    id: 2,
    componentName: 'Goo2',
    title: 'Cell Mitosis Split',
    category: 'svg-metaballs',
    technique: 'SVG Goo + Dual Axis Recoil',
    trigger: 'Click to split / fuse',
    description:
      'A single fluid nucleus elongates, pinches at the waist, snaps cleanly into twin daughter cells, and re-fuses on demand.',
    codeExcerpt: `const splitOffset = isSplit ? 42 : 0;
// Paired with feGaussianBlur(9) + alpha matrix 20 -8`,
  },
  {
    id: 3,
    componentName: 'Goo3',
    title: 'Magnetic Metaball Cluster',
    category: 'svg-metaballs',
    technique: 'Orbital Keyframes + Pointer Pull',
    trigger: 'Hover stage to attract cluster',
    description:
      'Five satellite droplets orbit a dense central core and lean magnetically toward the cursor, forming transient viscous tendrils.',
    codeExcerpt: `const { x, y } = computeMagneticOffset(dx, dy, 120, 0.35);`,
  },
  {
    id: 4,
    componentName: 'Goo4',
    title: 'Pour-In Liquid Button',
    category: 'buttons-hover',
    technique: 'Rising SVG Wave + Blend Layer',
    trigger: 'Hover or click to pour',
    description:
      'Hovering raises a sculpted dual-crest wave mask from the lower boundary, flooding the button face and inverting typography smoothly.',
    codeExcerpt: `<div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
  style={{ transform: filled ? 'translateY(0%)' : 'translateY(105%)' }} />`,
  },
  {
    id: 5,
    componentName: 'Goo5',
    title: 'Wave Wipe Panel Transition',
    category: 'morph-clip',
    technique: 'Animated Wave Mask Curtain',
    trigger: 'Click to wipe between panels',
    description:
      'A multi-crest fluid curtain sweeps horizontally across the frame to reveal the alternate editorial surface without hard cuts.',
    codeExcerpt: `// Wave SVG edge coupled with translateX curtain reveal
transform: activePanel === 1 ? 'translateX(0%)' : 'translateX(-115%)'`,
  },
  {
    id: 6,
    componentName: 'Goo6',
    title: 'Gooey Tab Indicator',
    category: 'nav-controls',
    technique: 'Sliding Blob + Trailing Bead',
    trigger: 'Click any tab',
    description:
      'Switching tabs stretches the active liquid pill and launches a smaller lagging droplet that coalesces into the destination tab.',
    codeExcerpt: `// Main pill + delayed secondary bead inside gooey SVG filter
transition: transform 420ms cubic-bezier(0.34, 1.4, 0.64, 1);`,
  },
  {
    id: 7,
    componentName: 'Goo7',
    title: 'Organic Border-Radius Morph',
    category: 'morph-clip',
    technique: '8-Value Border-Radius Keyframes',
    trigger: 'Select Calm / Pulse / Turbulent',
    description:
      'Pure CSS eight-axis border-radius interpolation transforms a solid color field continuously through organic amoeboid forms.',
    codeExcerpt: `border-radius: 58% 42% 64% 36% / 44% 58% 42% 56%;
/* Cycles through asymmetric elliptical radii */`,
  },
  {
    id: 8,
    componentName: 'Goo8',
    title: 'Particle-to-Shape Convergence',
    category: 'svg-metaballs',
    technique: '9-Node Matrix + Goo Threshold',
    trigger: 'Click to scatter / converge',
    description:
      'Nine independent particles drift across the chamber before converging tightly to fuse into a crisp diamond-cross emblem.',
    codeExcerpt: `// Each node interpolates between scatter[i] and emblem[i]
filter: 'url(#goo-filter-8)'`,
  },
  {
    id: 9,
    componentName: 'Goo9',
    title: 'Under-Button Viscous Drip',
    category: 'buttons-hover',
    technique: 'Sagging Neck + Pinched Droplet',
    trigger: 'Hover or click to drip',
    description:
      'Heavy droplets sag from the lower edge of a button, stretch into a thin neck inside a gooey filter, pinch off, and splash.',
    codeExcerpt: `@keyframes gooDripDrop {
  35% { transform: translateY(14px) scale(0.82, 1.32); }
  65% { transform: translateY(42px) scale(0.76, 1.15); }
}`,
  },
  {
    id: 10,
    componentName: 'Goo10',
    title: 'Clip-Path Icon Morph',
    category: 'morph-clip',
    technique: 'CSS Polygon Vertex Interpolation',
    trigger: 'Click to cycle Play / Pause / Stop / Check',
    description:
      'Four distinct UI icons share an 8-vertex polygon topology so CSS transitions morph every edge cleanly without swapping assets.',
    codeExcerpt: `clipPath: 'polygon(18% 12%, 50% 30%, 50% 30%, 88% 50%, 88% 50%, 50% 70%, 50% 70%, 18% 88%)'`,
  },
  {
    id: 11,
    componentName: 'Goo11',
    title: 'Liquid Track Toggle',
    category: 'nav-controls',
    technique: 'Dual-Thumb Gooey Track',
    trigger: 'Click switch to toggle',
    description:
      'Toggling stretches a trailing viscous droplet out of the circular thumb across a recessed goo-filtered track before snapping home.',
    codeExcerpt: `<button role="switch" aria-checked={checked}>
  {/* Primary thumb + delayed trailing bead under goo filter */}
</button>`,
  },
  {
    id: 12,
    componentName: 'Goo12',
    title: 'Sticky Elastic Separation Pull',
    category: 'buttons-hover',
    technique: 'Tethered Vector + Snap Threshold',
    trigger: 'Drag or click "Pull & Snap"',
    description:
      'Pulling the orb stretches an adhesive liquid bridge from its anchor pad until tension crosses the snap radius and recoils.',
    codeExcerpt: `const pull = clampElasticPull(dx, dy, 88, 66);
// Bridge thins proportionally to distance until snapped`,
  },
  {
    id: 13,
    componentName: 'Goo13',
    title: 'Orbital Liquid Loader',
    category: 'loaders-text',
    technique: 'Phase-Shifted Circular Orbits',
    trigger: 'Switch Slow / Normal / Fast',
    description:
      'Three phase-shifted droplets orbit a hidden ring, accelerating into one another to fuse into a crescent wave before separating.',
    codeExcerpt: `animation: gooLoaderSpinA 2.1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;`,
  },
  {
    id: 14,
    componentName: 'Goo14',
    title: 'Gooey Radial Action Cluster',
    category: 'nav-controls',
    technique: 'Hub Extrusion + Detached Nodes',
    trigger: 'Click + to extrude cluster',
    description:
      'Expanding the central hub extrudes four action buttons along radial vectors, stretching gooey necks that cleanly detach.',
    codeExcerpt: `// Satellite action buttons share goo-filtered backing blobs
transform: open ? \`translate(\${tx}px, \${ty}px) scale(1)\` : 'translate(0, 0) scale(0.4)'`,
  },
  {
    id: 15,
    componentName: 'Goo15',
    title: 'Text-to-Blob Dissolve',
    category: 'loaders-text',
    technique: 'Dynamic Blur + Alpha Threshold',
    trigger: 'Click "Dissolve" / "Condense"',
    description:
      'Sharp display typography ramps through Gaussian blur and contrast thresholding, melting characters into ink puddles and back.',
    codeExcerpt: `<feGaussianBlur stdDeviation={dissolved ? 8.5 : 0} />
<feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10" />`,
  },
  {
    id: 16,
    componentName: 'Goo16',
    title: 'Cling & Release Hover Lobe',
    category: 'buttons-hover',
    technique: 'Pointer-Tracked Lobe Extrusion',
    trigger: 'Move pointer over & off pill',
    description:
      'A surface-tension lobe stretches out from the button perimeter to cling toward the approaching cursor, then snaps back on exit.',
    codeExcerpt: `const offset = computeMagneticOffset(dx, dy, 96, 0.42);
// Lobe stays connected via goo filter until cursor exits`,
  },
  {
    id: 17,
    componentName: 'Goo17',
    title: 'Effervescent Meniscus Fill',
    category: 'loaders-text',
    technique: 'Rising Bubbles + Gooey Surface',
    trigger: 'Click "Pump" or "Drain"',
    description:
      'Pressing the pump releases buoyant micro-bubbles that rise and coalesce smoothly into the meniscus of a calibrated fluid column.',
    codeExcerpt: `@keyframes bubbleRise {
  0% { transform: translateY(24px) scale(0.95); }
  100% { transform: translateY(-48px) scale(0.45); opacity: 0; }
}`,
  },
  {
    id: 18,
    componentName: 'Goo18',
    title: 'Ink-Drop Radial Splash',
    category: 'svg-metaballs',
    technique: 'Expanding Ring + Breakup Beads',
    trigger: 'Click anywhere in stage',
    description:
      'Clicking the canvas drops an ink bead that radiates outward as an expanding ring, breaking into surface-tension droplets.',
    codeExcerpt: `// Expanding outer ring + 8 radial beads inside gooey filter
transform: \`translate(\${rx}px, \${ry}px) scale(\${beadScale})\``,
  },
  {
    id: 19,
    componentName: 'Goo19',
    title: 'Viscous Magnetic Scrubber',
    category: 'nav-controls',
    technique: 'Range Input + Stretched Meniscus',
    trigger: 'Drag slider thumb',
    description:
      'Dragging the slider pulls a viscous droplet out of the filled track behind the thumb, snapping back to a crisp meniscus when idle.',
    codeExcerpt: `<input type="range" min={0} max={100} value={value} />
// Gooey track tip stretches proportionally to drag velocity`,
  },
  {
    id: 20,
    componentName: 'Goo20',
    title: 'Liquid Corner Peel Drawer',
    category: 'morph-clip',
    technique: 'Elliptical Clip-Path + Edge Beads',
    trigger: 'Click "Peel Open" / "Seal"',
    description:
      'Opening the drawer peels back an elliptical liquid mask from the corner while tiny edge droplets detach along the sweep.',
    codeExcerpt: `clipPath: open
  ? 'circle(145% at 8% 12%)'
  : 'circle(0% at 8% 12%)'`,
  },
];

export function filterSpecimens(
  specimens: GooSpecimenMeta[],
  category: GooCategory,
  query: string
): GooSpecimenMeta[] {
  const normalizedQuery = query.trim().toLowerCase();
  return specimens.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.componentName.toLowerCase().includes(normalizedQuery) ||
      item.technique.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getCategoryCounts(
  specimens: GooSpecimenMeta[]
): Record<GooCategory, number> {
  const counts: Record<GooCategory, number> = {
    all: specimens.length,
    'svg-metaballs': 0,
    'buttons-hover': 0,
    'morph-clip': 0,
    'nav-controls': 0,
    'loaders-text': 0,
  };
  for (const item of specimens) {
    counts[item.category] += 1;
  }
  return counts;
}

export interface ElasticPullResult {
  x: number;
  y: number;
  distance: number;
  snapped: boolean;
  tensionRatio: number;
}

export function clampElasticPull(
  dx: number,
  dy: number,
  maxDist: number,
  snapThreshold: number
): ElasticPullResult {
  const rawDist = Math.hypot(dx, dy);
  if (rawDist === 0) {
    return { x: 0, y: 0, distance: 0, snapped: false, tensionRatio: 0 };
  }
  const clampedDist = Math.min(rawDist, maxDist);
  const scale = clampedDist / rawDist;
  const snapped = rawDist >= snapThreshold;
  const tensionRatio = Math.min(1, clampedDist / snapThreshold);
  return {
    x: Number((dx * scale).toFixed(2)),
    y: Number((dy * scale).toFixed(2)),
    distance: Number(clampedDist.toFixed(2)),
    snapped,
    tensionRatio: Number(tensionRatio.toFixed(3)),
  };
}

export function computeMagneticOffset(
  dx: number,
  dy: number,
  maxRadius: number,
  strength: number
): { x: number; y: number; active: boolean } {
  const dist = Math.hypot(dx, dy);
  if (dist > maxRadius || dist === 0) {
    return { x: 0, y: 0, active: false };
  }
  const falloff = 1 - dist / maxRadius;
  return {
    x: Number((dx * strength * (0.45 + 0.55 * falloff)).toFixed(2)),
    y: Number((dy * strength * (0.45 + 0.55 * falloff)).toFixed(2)),
    active: true,
  };
}

export function getNextMorphState<T extends string>(
  current: T,
  sequence: readonly T[]
): T {
  const idx = sequence.indexOf(current);
  if (idx === -1 || sequence.length === 0) {
    return sequence[0];
  }
  return sequence[(idx + 1) % sequence.length];
}
