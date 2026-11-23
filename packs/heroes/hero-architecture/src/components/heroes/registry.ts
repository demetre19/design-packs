import type { ComponentType } from 'react';

import { Hero1 } from './Hero1';
import { Hero2 } from './Hero2';
import { Hero3 } from './Hero3';
import { Hero4 } from './Hero4';
import { Hero5 } from './Hero5';
import { Hero6 } from './Hero6';
import { Hero7 } from './Hero7';
import { Hero8 } from './Hero8';
import { Hero9 } from './Hero9';
import { Hero10 } from './Hero10';
import { Hero11 } from './Hero11';
import { Hero12 } from './Hero12';
import { Hero13 } from './Hero13';
import { Hero14 } from './Hero14';
import { Hero15 } from './Hero15';
import { Hero16 } from './Hero16';
import { Hero17 } from './Hero17';
import { Hero18 } from './Hero18';
import { Hero19 } from './Hero19';
import { Hero20 } from './Hero20';

import Hero1Source from './Hero1.tsx?raw';
import Hero2Source from './Hero2.tsx?raw';
import Hero3Source from './Hero3.tsx?raw';
import Hero4Source from './Hero4.tsx?raw';
import Hero5Source from './Hero5.tsx?raw';
import Hero6Source from './Hero6.tsx?raw';
import Hero7Source from './Hero7.tsx?raw';
import Hero8Source from './Hero8.tsx?raw';
import Hero9Source from './Hero9.tsx?raw';
import Hero10Source from './Hero10.tsx?raw';
import Hero11Source from './Hero11.tsx?raw';
import Hero12Source from './Hero12.tsx?raw';
import Hero13Source from './Hero13.tsx?raw';
import Hero14Source from './Hero14.tsx?raw';
import Hero15Source from './Hero15.tsx?raw';
import Hero16Source from './Hero16.tsx?raw';
import Hero17Source from './Hero17.tsx?raw';
import Hero18Source from './Hero18.tsx?raw';
import Hero19Source from './Hero19.tsx?raw';
import Hero20Source from './Hero20.tsx?raw';

export interface HeroEntry {
  Component: ComponentType;
  source: string;
}

export const HERO_REGISTRY: Record<number, HeroEntry> = {
  1: { Component: Hero1, source: Hero1Source },
  2: { Component: Hero2, source: Hero2Source },
  3: { Component: Hero3, source: Hero3Source },
  4: { Component: Hero4, source: Hero4Source },
  5: { Component: Hero5, source: Hero5Source },
  6: { Component: Hero6, source: Hero6Source },
  7: { Component: Hero7, source: Hero7Source },
  8: { Component: Hero8, source: Hero8Source },
  9: { Component: Hero9, source: Hero9Source },
  10: { Component: Hero10, source: Hero10Source },
  11: { Component: Hero11, source: Hero11Source },
  12: { Component: Hero12, source: Hero12Source },
  13: { Component: Hero13, source: Hero13Source },
  14: { Component: Hero14, source: Hero14Source },
  15: { Component: Hero15, source: Hero15Source },
  16: { Component: Hero16, source: Hero16Source },
  17: { Component: Hero17, source: Hero17Source },
  18: { Component: Hero18, source: Hero18Source },
  19: { Component: Hero19, source: Hero19Source },
  20: { Component: Hero20, source: Hero20Source },
};
