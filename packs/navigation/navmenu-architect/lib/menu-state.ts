export interface DropdownInteractionState {
  isOpen: boolean;
  isPinned: boolean;
}

export type DropdownAction =
  | { type: 'HOVER_ENTER' }
  | { type: 'HOVER_LEAVE' }
  | { type: 'CLICK_TRIGGER' }
  | { type: 'CLOSE' };

export const initialDropdownState: DropdownInteractionState = {
  isOpen: false,
  isPinned: false,
};

/**
 * Pure reducer handling combined hover + click interactions cleanly.
 * Note: When a mouse pointer moves onto a trigger button and clicks it,
 * HOVER_ENTER fires immediately before CLICK_TRIGGER.
 * CLICK_TRIGGER therefore pins an unpinned hover-open menu instead of
 * immediately closing it, and toggles closed on the next click.
 */
export function reduceDropdownState(
  state: DropdownInteractionState,
  action: DropdownAction,
): DropdownInteractionState {
  switch (action.type) {
    case 'HOVER_ENTER':
      return {
        isOpen: true,
        isPinned: state.isPinned,
      };
    case 'HOVER_LEAVE':
      if (state.isPinned) {
        return state;
      }
      return {
        isOpen: false,
        isPinned: false,
      };
    case 'CLICK_TRIGGER':
      if (!state.isOpen) {
        return { isOpen: true, isPinned: true };
      }
      if (!state.isPinned) {
        return { isOpen: true, isPinned: true };
      }
      return { isOpen: false, isPinned: false };
    case 'CLOSE':
      return { isOpen: false, isPinned: false };
  }
}
