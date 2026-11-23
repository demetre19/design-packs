import React from 'react';
import {
  Amb1,
  Amb2,
  Amb3,
  Amb4,
  Amb5,
  Amb6,
  Amb7,
  Amb8,
  Amb9,
  Amb10,
  Amb11,
  Amb12,
  Amb13,
  Amb14,
  Amb15,
  Amb16,
  Amb17,
  Amb18,
  Amb19,
  Amb20,
} from '../components/ambient';

import amb1Raw from '../components/ambient/Amb1.tsx?raw';
import amb2Raw from '../components/ambient/Amb2.tsx?raw';
import amb3Raw from '../components/ambient/Amb3.tsx?raw';
import amb4Raw from '../components/ambient/Amb4.tsx?raw';
import amb5Raw from '../components/ambient/Amb5.tsx?raw';
import amb6Raw from '../components/ambient/Amb6.tsx?raw';
import amb7Raw from '../components/ambient/Amb7.tsx?raw';
import amb8Raw from '../components/ambient/Amb8.tsx?raw';
import amb9Raw from '../components/ambient/Amb9.tsx?raw';
import amb10Raw from '../components/ambient/Amb10.tsx?raw';
import amb11Raw from '../components/ambient/Amb11.tsx?raw';
import amb12Raw from '../components/ambient/Amb12.tsx?raw';
import amb13Raw from '../components/ambient/Amb13.tsx?raw';
import amb14Raw from '../components/ambient/Amb14.tsx?raw';
import amb15Raw from '../components/ambient/Amb15.tsx?raw';
import amb16Raw from '../components/ambient/Amb16.tsx?raw';
import amb17Raw from '../components/ambient/Amb17.tsx?raw';
import amb18Raw from '../components/ambient/Amb18.tsx?raw';
import amb19Raw from '../components/ambient/Amb19.tsx?raw';
import amb20Raw from '../components/ambient/Amb20.tsx?raw';

export interface AmbientRegistryEntry {
  Component: React.ComponentType<{ children?: React.ReactNode; className?: string }>;
  source: string;
}

export const AMBIENT_REGISTRY: Record<string, AmbientRegistryEntry> = {
  Amb1: { Component: Amb1, source: amb1Raw },
  Amb2: { Component: Amb2, source: amb2Raw },
  Amb3: { Component: Amb3, source: amb3Raw },
  Amb4: { Component: Amb4, source: amb4Raw },
  Amb5: { Component: Amb5, source: amb5Raw },
  Amb6: { Component: Amb6, source: amb6Raw },
  Amb7: { Component: Amb7, source: amb7Raw },
  Amb8: { Component: Amb8, source: amb8Raw },
  Amb9: { Component: Amb9, source: amb9Raw },
  Amb10: { Component: Amb10, source: amb10Raw },
  Amb11: { Component: Amb11, source: amb11Raw },
  Amb12: { Component: Amb12, source: amb12Raw },
  Amb13: { Component: Amb13, source: amb13Raw },
  Amb14: { Component: Amb14, source: amb14Raw },
  Amb15: { Component: Amb15, source: amb15Raw },
  Amb16: { Component: Amb16, source: amb16Raw },
  Amb17: { Component: Amb17, source: amb17Raw },
  Amb18: { Component: Amb18, source: amb18Raw },
  Amb19: { Component: Amb19, source: amb19Raw },
  Amb20: { Component: Amb20, source: amb20Raw },
};
