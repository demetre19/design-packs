import type { ComponentType } from 'react';
import { State1 } from './State1';
import { State2 } from './State2';
import { State3 } from './State3';
import { State4 } from './State4';
import { State5 } from './State5';
import { State6 } from './State6';
import { State7 } from './State7';
import { State8 } from './State8';
import { State9 } from './State9';
import { State10 } from './State10';
import { State11 } from './State11';
import { State12 } from './State12';
import { State13 } from './State13';
import { State14 } from './State14';
import { State15 } from './State15';
import { State16 } from './State16';
import { State17 } from './State17';
import { State18 } from './State18';
import { State19 } from './State19';
import { State20 } from './State20';

export {
  State1,
  State2,
  State3,
  State4,
  State5,
  State6,
  State7,
  State8,
  State9,
  State10,
  State11,
  State12,
  State13,
  State14,
  State15,
  State16,
  State17,
  State18,
  State19,
  State20,
};

export interface StateComponentProps {
  replaySignal?: number;
}

export const STATE_COMPONENTS: Record<number, ComponentType<StateComponentProps>> = {
  1: State1,
  2: State2,
  3: State3,
  4: State4,
  5: State5,
  6: State6,
  7: State7,
  8: State8,
  9: State9,
  10: State10,
  11: State11,
  12: State12,
  13: State13,
  14: State14,
  15: State15,
  16: State16,
  17: State17,
  18: State18,
  19: State19,
  20: State20,
};
