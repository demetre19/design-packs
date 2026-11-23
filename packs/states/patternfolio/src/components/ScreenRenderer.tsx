import React from 'react';
import { Auth1 } from './auth/Auth1';
import { Auth2 } from './auth/Auth2';
import { Auth3 } from './auth/Auth3';
import { Auth4 } from './auth/Auth4';
import { Auth5 } from './auth/Auth5';
import { Auth6 } from './auth/Auth6';
import { Auth7 } from './auth/Auth7';
import { Auth8 } from './auth/Auth8';
import { Auth9 } from './auth/Auth9';
import { Auth10 } from './auth/Auth10';
import { Error1 } from './errors/Error1';
import { Error2 } from './errors/Error2';
import { Error3 } from './errors/Error3';
import { Error4 } from './errors/Error4';
import { Error5 } from './errors/Error5';
import { Error6 } from './errors/Error6';
import { Error7 } from './errors/Error7';
import { Error8 } from './errors/Error8';
import { Error9 } from './errors/Error9';
import { Error10 } from './errors/Error10';

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  Auth1,
  Auth2,
  Auth3,
  Auth4,
  Auth5,
  Auth6,
  Auth7,
  Auth8,
  Auth9,
  Auth10,
  Error1,
  Error2,
  Error3,
  Error4,
  Error5,
  Error6,
  Error7,
  Error8,
  Error9,
  Error10,
};

interface ScreenRendererProps {
  screenId: string;
}

export function ScreenRenderer({ screenId }: ScreenRendererProps) {
  const Component = COMPONENT_MAP[screenId] ?? Auth1;
  return <Component />;
}
