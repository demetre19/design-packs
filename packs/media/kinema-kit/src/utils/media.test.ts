import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMPONENT_CATALOG,
  advanceTime,
  clampTime,
  filterCatalog,
  formatTimecode,
  getActiveChapterIndex,
  getProgressPercent,
  nextPlaybackSpeed,
} from './media';

test('formatTimecode formats whole seconds into MM:SS', () => {
  assert.equal(formatTimecode(0), '00:00');
  assert.equal(formatTimecode(9), '00:09');
  assert.equal(formatTimecode(65), '01:05');
  assert.equal(formatTimecode(258), '04:18');
  assert.equal(formatTimecode(-4), '00:00');
  assert.equal(formatTimecode(Number.NaN), '00:00');
});

test('clampTime and getProgressPercent bound values cleanly', () => {
  assert.equal(clampTime(-5, 120), 0);
  assert.equal(clampTime(45, 120), 45);
  assert.equal(clampTime(150, 120), 120);
  assert.equal(getProgressPercent(30, 120), 25);
  assert.equal(getProgressPercent(10, 0), 0);
});

test('advanceTime advances by speed and handles end vs loop', () => {
  const mid = advanceTime(10, 60, 1, 1.5, false);
  assert.deepEqual(mid, { nextTime: 11.5, ended: false });

  const done = advanceTime(59, 60, 2, 1, false);
  assert.deepEqual(done, { nextTime: 60, ended: true });

  const looped = advanceTime(59, 60, 2, 1, true);
  assert.deepEqual(looped, { nextTime: 1, ended: false });
});

test('nextPlaybackSpeed cycles through supported speeds', () => {
  assert.equal(nextPlaybackSpeed(1), 1.25);
  assert.equal(nextPlaybackSpeed(1.25), 1.5);
  assert.equal(nextPlaybackSpeed(1.5), 2);
  assert.equal(nextPlaybackSpeed(2), 1);
  assert.equal(nextPlaybackSpeed(99), 1);
});

test('getActiveChapterIndex selects the latest started chapter', () => {
  const chapters = [
    { id: 'c1', label: 'Intro', startTime: 0 },
    { id: 'c2', label: 'Setup', startTime: 30 },
    { id: 'c3', label: 'Demo', startTime: 75 },
  ];
  assert.equal(getActiveChapterIndex(chapters, 0), 0);
  assert.equal(getActiveChapterIndex(chapters, 42), 1);
  assert.equal(getActiveChapterIndex(chapters, 80), 2);
  assert.equal(getActiveChapterIndex([], 10), -1);
});

test('COMPONENT_CATALOG has exactly 20 unique Vid1..Vid20 entries', () => {
  assert.equal(COMPONENT_CATALOG.length, 20);
  const ids = COMPONENT_CATALOG.map((item) => item.id);
  for (let i = 1; i <= 20; i += 1) {
    assert.ok(ids.includes(`Vid${i}`), `Missing Vid${i}`);
  }
});

test('filterCatalog filters by category and search query', () => {
  const audioItems = filterCatalog(COMPONENT_CATALOG, 'audio', '');
  assert.deepEqual(
    audioItems.map((i) => i.id),
    ['Vid6', 'Vid7', 'Vid17'],
  );

  const podcastSearch = filterCatalog(COMPONENT_CATALOG, 'all', 'podcast');
  assert.deepEqual(
    podcastSearch.map((i) => i.id),
    ['Vid7'],
  );

  const combined = filterCatalog(COMPONENT_CATALOG, 'interactive', 'wipe');
  assert.deepEqual(
    combined.map((i) => i.id),
    ['Vid15'],
  );
});
