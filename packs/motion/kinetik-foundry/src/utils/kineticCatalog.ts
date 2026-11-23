export type KineticCategory = 'all' | 'entrance' | 'interactive' | 'loop' | 'editorial';

export interface KineticSpecimenMeta {
  id: number;
  componentName: `Ktxt${number}`;
  title: string;
  technique: string;
  category: Exclude<KineticCategory, 'all'>;
  defaultText: string;
  timingLabel: string;
  interactionHint?: string;
  properties: string[];
  description: string;
}

export const KINETIC_CATEGORIES: { id: KineticCategory; label: string }[] = [
  { id: 'all', label: 'All (20)' },
  { id: 'entrance', label: 'Entrance' },
  { id: 'interactive', label: 'Hover & Interactive' },
  { id: 'loop', label: 'Continuous Loop' },
  { id: 'editorial', label: 'Editorial & Glitch' },
];

export const KINETIC_SPECIMENS: KineticSpecimenMeta[] = [
  {
    id: 1,
    componentName: 'Ktxt1',
    title: 'Per-Letter Stagger Reveal',
    technique: 'Character Rise & Fade',
    category: 'entrance',
    defaultText: 'Form follows velocity',
    timingLabel: '35ms / char',
    properties: ['transform', 'opacity'],
    description: 'Each glyph enters from beneath its baseline mask with an inline per-character animationDelay and settles cleanly.',
  },
  {
    id: 2,
    componentName: 'Ktxt2',
    title: 'Word-by-Word Fade',
    technique: 'Sequential Word Cadence',
    category: 'entrance',
    defaultText: 'Measured rhythm shapes every sentence',
    timingLabel: '95ms / word',
    properties: ['transform', 'opacity'],
    description: 'Words emerge sequentially along a gentle vertical drift so phrases read in deliberate editorial beats.',
  },
  {
    id: 3,
    componentName: 'Ktxt3',
    title: 'Scramble / Decode Text',
    technique: 'Cipher Glyph Settlement',
    category: 'entrance',
    defaultText: 'Signal locked cleanly',
    timingLabel: '42ms / step',
    properties: ['opacity', 'transform', 'glyph-step'],
    description: 'Characters rapidly cycle through monospace cipher glyphs left-to-right before locking onto the final string.',
  },
  {
    id: 4,
    componentName: 'Ktxt4',
    title: 'Gradient-Animated Heading',
    technique: 'Background-Position Sweep',
    category: 'loop',
    defaultText: 'Chromatic light sweep',
    timingLabel: '4.5s sweep',
    properties: ['background-position', 'opacity'],
    description: 'A wide multi-stop ink gradient sweeps smoothly across background-clipped typography while characters settle.',
  },
  {
    id: 5,
    componentName: 'Ktxt5',
    title: 'Outline to Fill Hover',
    technique: 'Text-Stroke & Ink Wipe',
    category: 'interactive',
    defaultText: 'Hollow to solid ink',
    timingLabel: '28ms / char',
    interactionHint: 'Hover text to fill stroke',
    properties: ['-webkit-text-stroke', 'clip-path', 'opacity'],
    description: 'Crisp outlined letterforms animate in staggered and flood with solid carbon-vermilion ink on hover.',
  },
  {
    id: 6,
    componentName: 'Ktxt6',
    title: 'Marquee Word Strip',
    technique: 'Dual-Track Infinite Ribbon',
    category: 'loop',
    defaultText: 'Swiss Grid · Kinetic Rhythm · Press Proof',
    timingLabel: '18s loop',
    interactionHint: 'Hover ribbon to pause',
    properties: ['transform'],
    description: 'Seamless mirrored horizontal ticker strip powered by GPU-composited translateX with hover pause.',
  },
  {
    id: 7,
    componentName: 'Ktxt7',
    title: 'Split on Hover Spread',
    technique: 'Radial Character Expansion',
    category: 'interactive',
    defaultText: 'Kinetic tension',
    timingLabel: '24ms / char',
    interactionHint: 'Hover to spread characters',
    properties: ['transform', 'opacity'],
    description: 'Each letter computes its distance from the word center and fans outward symmetrically on hover.',
  },
  {
    id: 8,
    componentName: 'Ktxt8',
    title: 'Blur-to-Focus Reveal',
    technique: 'Optical Rack-Focus',
    category: 'entrance',
    defaultText: 'Optical clarity in motion',
    timingLabel: '38ms / char',
    properties: ['filter: blur', 'transform', 'opacity'],
    description: 'Letters transition from soft 12px optical defocus into razor-sharp focus with staggered character delays.',
  },
  {
    id: 9,
    componentName: 'Ktxt9',
    title: 'Letter-Rotation Flip-In',
    technique: '3D Split-Flap Pitch',
    category: 'entrance',
    defaultText: 'Departure board precision',
    timingLabel: '34ms / char',
    properties: ['transform: rotateX', 'opacity'],
    description: 'Individual glyphs hinge down across a 600px perspective plane like mechanical split-flap typography.',
  },
  {
    id: 10,
    componentName: 'Ktxt10',
    title: 'Wave Motion Per Character',
    technique: 'Sinusoidal Phase Stagger',
    category: 'loop',
    defaultText: 'Harmonic sine wave',
    timingLabel: '75ms phase',
    properties: ['transform: translateY'],
    description: 'Offsetting negative and positive per-character animation delays produces a continuous fluid standing wave.',
  },
  {
    id: 11,
    componentName: 'Ktxt11',
    title: 'Hover Letter-Spacing Expansion',
    technique: 'Tracking Breath & Scale',
    category: 'interactive',
    defaultText: 'Breathing space',
    timingLabel: '30ms / char',
    interactionHint: 'Hover to expand tracking',
    properties: ['letter-spacing', 'transform', 'opacity'],
    description: 'Tightly kerned display letters settle on load and breathe outward into airy architectural tracking on hover.',
  },
  {
    id: 12,
    componentName: 'Ktxt12',
    title: 'Text Masking Clip-Path Reveal',
    technique: 'Directional Inset Wipe',
    category: 'editorial',
    defaultText: 'Sharp editorial curtain',
    timingLabel: '120ms / line',
    properties: ['clip-path', 'transform'],
    description: 'A geometric clip-path inset curtain wipes cleanly left-to-right across typographic layers.',
  },
  {
    id: 13,
    componentName: 'Ktxt13',
    title: 'Glitched Double-Layer Heading',
    technique: 'Chromatic Slice Offset',
    category: 'editorial',
    defaultText: 'Phase alignment error',
    timingLabel: '25ms / char',
    interactionHint: 'Hover to trigger burst',
    properties: ['clip-path', 'transform', 'opacity'],
    description: 'Dual cobalt and vermilion sliced layers jitter across horizontal clip bands before locking into crisp black ink.',
  },
  {
    id: 14,
    componentName: 'Ktxt14',
    title: 'Vertical Roll-In Lines',
    technique: 'Masked Line Elevator',
    category: 'entrance',
    defaultText: 'First line arrives\nSecond line follows\nThird locks the grid',
    timingLabel: '130ms / line',
    properties: ['transform: translateY', 'opacity'],
    description: 'Multi-line headlines slide upward out of overflow-hidden line boxes with deliberate staggered line cadence.',
  },
  {
    id: 15,
    componentName: 'Ktxt15',
    title: 'Size-Morphing Words',
    technique: 'Scale Pulse & Settle',
    category: 'editorial',
    defaultText: 'Scale creates hierarchy',
    timingLabel: '110ms / word',
    interactionHint: 'Hover word to swell',
    properties: ['transform: scale', 'opacity'],
    description: 'Words swell dramatically through an emphasis peak before locking to baseline, with interactive per-word swell.',
  },
  {
    id: 16,
    componentName: 'Ktxt16',
    title: 'Rotating Word Carousel',
    technique: 'Fixed-Slot Vertical Reel',
    category: 'loop',
    defaultText: 'Built for clarity',
    timingLabel: '6.4s cycle',
    properties: ['transform: translateY', 'opacity'],
    description: 'A fixed inline aperture cycles curated adjectives vertically while holding surrounding headline lockup steady.',
  },
  {
    id: 17,
    componentName: 'Ktxt17',
    title: 'Elastic Baseline Drop-In',
    technique: 'Spring Overshoot Squash',
    category: 'entrance',
    defaultText: 'Gravity meets rebound',
    timingLabel: '32ms / char',
    properties: ['transform: translateY scaleY', 'opacity'],
    description: 'Characters drop from above and compress subtly at impact before springing back to natural cap-height.',
  },
  {
    id: 18,
    componentName: 'Ktxt18',
    title: 'Ink Highlight Sweep',
    technique: 'Underline & Mark Wipe',
    category: 'editorial',
    defaultText: 'Precision ink annotation',
    timingLabel: '30ms / char',
    properties: ['transform: scaleX', 'opacity'],
    description: 'Staggered character arrival completes with a vermilion editorial rule sweeping under the focal word.',
  },
  {
    id: 19,
    componentName: 'Ktxt19',
    title: 'Skew-Slide Kinetic Shear',
    technique: 'Velocity Italic Deceleration',
    category: 'entrance',
    defaultText: 'Momentum into stillness',
    timingLabel: '85ms / word',
    properties: ['transform: skewX translateX', 'opacity'],
    description: 'Words enter leaning forward under high horizontal shear before snapping upright into calm roman alignment.',
  },
  {
    id: 20,
    componentName: 'Ktxt20',
    title: 'Perspective Depth Z-Zoom',
    technique: 'Foreground Dolly Lock',
    category: 'entrance',
    defaultText: 'Focus locks on plane',
    timingLabel: '36ms / char',
    properties: ['transform: scale translateZ', 'opacity'],
    description: 'Oversized glyphs zoom backward from the viewer plane and snap cleanly onto the typographic baseline.',
  },
];

export function filterSpecimens(
  specimens: KineticSpecimenMeta[],
  category: KineticCategory,
  searchQuery = '',
): KineticSpecimenMeta[] {
  const query = searchQuery.trim().toLowerCase();
  return specimens.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!query) return true;
    return (
      item.componentName.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.technique.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });
}
