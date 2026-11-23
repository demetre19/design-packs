import test from 'node:test';
import assert from 'node:assert/strict';
import { initialDropdownState, reduceDropdownState } from './menu-state';

test('opens on hover enter and closes on hover leave when unpinned', () => {
  const hovered = reduceDropdownState(initialDropdownState, { type: 'HOVER_ENTER' });
  assert.deepEqual(hovered, { isOpen: true, isPinned: false });

  const left = reduceDropdownState(hovered, { type: 'HOVER_LEAVE' });
  assert.deepEqual(left, { isOpen: false, isPinned: false });
});

test('hover immediately followed by click pins menu open instead of closing', () => {
  const hovered = reduceDropdownState(initialDropdownState, { type: 'HOVER_ENTER' });
  const clickedOnce = reduceDropdownState(hovered, { type: 'CLICK_TRIGGER' });
  assert.deepEqual(clickedOnce, { isOpen: true, isPinned: true });

  const hoveredOut = reduceDropdownState(clickedOnce, { type: 'HOVER_LEAVE' });
  assert.deepEqual(hoveredOut, { isOpen: true, isPinned: true });

  const clickedAgain = reduceDropdownState(hoveredOut, { type: 'CLICK_TRIGGER' });
  assert.deepEqual(clickedAgain, { isOpen: false, isPinned: false });
});

test('direct click from closed state opens and pins menu', () => {
  const clicked = reduceDropdownState(initialDropdownState, { type: 'CLICK_TRIGGER' });
  assert.deepEqual(clicked, { isOpen: true, isPinned: true });

  const closed = reduceDropdownState(clicked, { type: 'CLOSE' });
  assert.deepEqual(closed, { isOpen: false, isPinned: false });
});
