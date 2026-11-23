import type { ComponentType } from 'react';
import type { SpecimenMeta } from '../utils/treatmentMath';

import Icfx1 from '../components/icfx/Icfx1';
import Icfx2 from '../components/icfx/Icfx2';
import Icfx3 from '../components/icfx/Icfx3';
import Icfx4 from '../components/icfx/Icfx4';
import Icfx5 from '../components/icfx/Icfx5';
import Icfx6 from '../components/icfx/Icfx6';
import Icfx7 from '../components/icfx/Icfx7';
import Icfx8 from '../components/icfx/Icfx8';
import Icfx9 from '../components/icfx/Icfx9';
import Icfx10 from '../components/icfx/Icfx10';
import Icfx11 from '../components/icfx/Icfx11';
import Icfx12 from '../components/icfx/Icfx12';
import Icfx13 from '../components/icfx/Icfx13';
import Icfx14 from '../components/icfx/Icfx14';
import Icfx15 from '../components/icfx/Icfx15';
import Icfx16 from '../components/icfx/Icfx16';
import Icfx17 from '../components/icfx/Icfx17';
import Icfx18 from '../components/icfx/Icfx18';
import Icfx19 from '../components/icfx/Icfx19';
import Icfx20 from '../components/icfx/Icfx20';

import icfx1Raw from '../components/icfx/Icfx1.tsx?raw';
import icfx2Raw from '../components/icfx/Icfx2.tsx?raw';
import icfx3Raw from '../components/icfx/Icfx3.tsx?raw';
import icfx4Raw from '../components/icfx/Icfx4.tsx?raw';
import icfx5Raw from '../components/icfx/Icfx5.tsx?raw';
import icfx6Raw from '../components/icfx/Icfx6.tsx?raw';
import icfx7Raw from '../components/icfx/Icfx7.tsx?raw';
import icfx8Raw from '../components/icfx/Icfx8.tsx?raw';
import icfx9Raw from '../components/icfx/Icfx9.tsx?raw';
import icfx10Raw from '../components/icfx/Icfx10.tsx?raw';
import icfx11Raw from '../components/icfx/Icfx11.tsx?raw';
import icfx12Raw from '../components/icfx/Icfx12.tsx?raw';
import icfx13Raw from '../components/icfx/Icfx13.tsx?raw';
import icfx14Raw from '../components/icfx/Icfx14.tsx?raw';
import icfx15Raw from '../components/icfx/Icfx15.tsx?raw';
import icfx16Raw from '../components/icfx/Icfx16.tsx?raw';
import icfx17Raw from '../components/icfx/Icfx17.tsx?raw';
import icfx18Raw from '../components/icfx/Icfx18.tsx?raw';
import icfx19Raw from '../components/icfx/Icfx19.tsx?raw';
import icfx20Raw from '../components/icfx/Icfx20.tsx?raw';

export interface SpecimenEntry extends SpecimenMeta {
  Component: ComponentType;
  code: string;
}

export const SPECIMENS: SpecimenEntry[] = [
  {
    id: 1,
    name: 'Icfx1',
    title: 'Radial Iris Clip-Path Reveal',
    category: 'Clip & Mask',
    trigger: 'Hover / Pin Toggle',
    technique: 'circle() clip-path aperture expansion',
    Component: Icfx1,
    code: icfx1Raw,
  },
  {
    id: 2,
    name: 'Icfx2',
    title: 'Diagonal Shear Clip-Path Reveal',
    category: 'Clip & Mask',
    trigger: 'Mount / Replay',
    technique: 'polygon() angular plane wipe',
    Component: Icfx2,
    code: icfx2Raw,
  },
  {
    id: 3,
    name: 'Icfx3',
    title: 'Architectural Inset Clip-Path',
    category: 'Clip & Mask',
    trigger: 'Hover / Toggle',
    technique: 'inset() rounded matboard expansion',
    Component: Icfx3,
    code: icfx3Raw,
  },
  {
    id: 4,
    name: 'Icfx4',
    title: 'Hover Crossfade Opacity Swap',
    category: 'Color & Optics',
    trigger: 'Hover / Swap Button',
    technique: 'dual-plate 500ms opacity transition',
    Component: Icfx4,
    code: icfx4Raw,
  },
  {
    id: 5,
    name: 'Icfx5',
    title: 'Fixed-Frame Scroll Parallax',
    category: 'Scroll & Depth',
    trigger: 'Scroll / Offset Slider',
    technique: 'rAF translate3d slower than scroll',
    spanWide: true,
    Component: Icfx5,
    code: icfx5Raw,
  },
  {
    id: 6,
    name: 'Icfx6',
    title: 'Scale-Down-On-Scroll Gallery',
    category: 'Scroll & Depth',
    trigger: 'Viewport Scroll',
    technique: 'scroll-linked scale(1.18 → 1.0) triptych',
    spanWide: true,
    Component: Icfx6,
    code: icfx6Raw,
  },
  {
    id: 7,
    name: 'Icfx7',
    title: 'Zoom-On-Hover & Caption Drawer',
    category: 'Interactive & Grid',
    trigger: 'Hover / Toggle',
    technique: 'scale(1.10) + scrim + translateY slide-up',
    Component: Icfx7,
    code: icfx7Raw,
  },
  {
    id: 8,
    name: 'Icfx8',
    title: 'Optical Unblur / Sharpen on View',
    category: 'Color & Optics',
    trigger: 'In-View / Rack Focus',
    technique: 'IntersectionObserver blur-md → blur-none',
    Component: Icfx8,
    code: icfx8Raw,
  },
  {
    id: 9,
    name: 'Icfx9',
    title: 'Monochrome to Chromatic Hover',
    category: 'Color & Optics',
    trigger: 'Hover / Toggle',
    technique: 'grayscale contrast-125 → full spectrum',
    Component: Icfx9,
    code: icfx9Raw,
  },
  {
    id: 10,
    name: 'Icfx10',
    title: '3D Perspective Tilt Card',
    category: 'Scroll & Depth',
    trigger: 'Pointer Move',
    technique: 'perspective(900px) rotateX/Y + radial glare',
    Component: Icfx10,
    code: icfx10Raw,
  },
  {
    id: 11,
    name: 'Icfx11',
    title: 'Sweeping Specular Shine Frame',
    category: 'Color & Optics',
    trigger: 'Hover / Sweep Button',
    technique: 'skewX(-22deg) specular foil keyframes',
    Component: Icfx11,
    code: icfx11Raw,
  },
  {
    id: 12,
    name: 'Icfx12',
    title: 'Directional Mask-Wipe Reveal',
    category: 'Clip & Mask',
    trigger: 'Mount / Replay',
    technique: 'horizontal curtain inset + hairline leading edge',
    Component: Icfx12,
    code: icfx12Raw,
  },
  {
    id: 13,
    name: 'Icfx13',
    title: 'Before / After Drag Slider',
    category: 'Interactive & Grid',
    trigger: 'Drag / Arrow Keys',
    technique: 'range-backed clipPath inset comparison',
    Component: Icfx13,
    code: icfx13Raw,
  },
  {
    id: 14,
    name: 'Icfx14',
    title: 'Flex-Grow Expanding Image Grid',
    category: 'Interactive & Grid',
    trigger: 'Hover / Focus / Click',
    technique: 'flex-grow accordion strip (2.6× vs 0.85×)',
    spanWide: true,
    Component: Icfx14,
    code: icfx14Raw,
  },
  {
    id: 15,
    name: 'Icfx15',
    title: 'Staggered Image Cascade',
    category: 'Interactive & Grid',
    trigger: 'In-View / Replay',
    technique: '90ms stepped transition-delay column offset',
    spanWide: true,
    Component: Icfx15,
    code: icfx15Raw,
  },
  {
    id: 16,
    name: 'Icfx16',
    title: 'Animated Conic Border Clip',
    category: 'Clip & Mask',
    trigger: 'Continuous / Toggle',
    technique: 'rotating conic-gradient clipped to 2px frame',
    Component: Icfx16,
    code: icfx16Raw,
  },
  {
    id: 17,
    name: 'Icfx17',
    title: 'Selectable Duotone Ink Frames',
    category: 'Color & Optics',
    trigger: 'Ink Selector',
    technique: 'SVG feColorMatrix + multiply/lighten blend',
    Component: Icfx17,
    code: icfx17Raw,
  },
  {
    id: 18,
    name: 'Icfx18',
    title: 'Elevation Lift & Shadow Deepen',
    category: 'Scroll & Depth',
    trigger: 'Hover / Toggle',
    technique: '-translate-y-2 + multi-stop ambient shadow',
    Component: Icfx18,
    code: icfx18Raw,
  },
  {
    id: 19,
    name: 'Icfx19',
    title: 'Split-Shutter Louver Reveal',
    category: 'Clip & Mask',
    trigger: 'Hover / Toggle',
    technique: '6-slat staggered scaleX louver blades',
    Component: Icfx19,
    code: icfx19Raw,
  },
  {
    id: 20,
    name: 'Icfx20',
    title: 'Crop-Mark Reticle Exposure',
    category: 'Color & Optics',
    trigger: 'Hover / Toggle',
    technique: 'corner registration marks + brightness/contrast shift',
    Component: Icfx20,
    code: icfx20Raw,
  },
];
