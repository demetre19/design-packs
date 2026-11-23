import type React from 'react';
import { Bg1, Bg2, Bg3, Bg10, Bg11, Bg15, Bg16, type BgProps } from './GridsAndLines';
import { Bg5, Bg6, Bg7, Bg9, Bg12, Bg13, Bg14, Bg17 } from './OrganicAndAtmospheres';
import { Bg4, Bg8, Bg18, Bg19, Bg20 } from './TexturesAndFrames';

export {
  Bg1,
  Bg2,
  Bg3,
  Bg4,
  Bg5,
  Bg6,
  Bg7,
  Bg8,
  Bg9,
  Bg10,
  Bg11,
  Bg12,
  Bg13,
  Bg14,
  Bg15,
  Bg16,
  Bg17,
  Bg18,
  Bg19,
  Bg20,
};

export type { BgProps };

export const BG_COMPONENT_MAP: Record<string, React.ComponentType<BgProps>> = {
  Bg1,
  Bg2,
  Bg3,
  Bg4,
  Bg5,
  Bg6,
  Bg7,
  Bg8,
  Bg9,
  Bg10,
  Bg11,
  Bg12,
  Bg13,
  Bg14,
  Bg15,
  Bg16,
  Bg17,
  Bg18,
  Bg19,
  Bg20,
};
