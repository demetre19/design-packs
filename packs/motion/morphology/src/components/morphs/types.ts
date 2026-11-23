import { useState } from 'react';

export interface MorphComponentProps {
  morphed?: boolean;
  onMorphedChange?: (next: boolean) => void;
}

export function useMorphState(
  controlledMorphed?: boolean,
  onMorphedChange?: (next: boolean) => void,
  defaultValue = true
): [boolean, (next?: boolean) => void] {
  const [internal, setInternal] = useState<boolean>(defaultValue);
  const isControlled = controlledMorphed !== undefined;
  const value = isControlled ? controlledMorphed : internal;

  const toggleOrSet = (next?: boolean) => {
    const resolved = typeof next === 'boolean' ? next : !value;
    if (!isControlled) {
      setInternal(resolved);
    }
    onMorphedChange?.(resolved);
  };

  return [value, toggleOrSet];
}
