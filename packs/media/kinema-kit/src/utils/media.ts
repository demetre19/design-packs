export type MediaCategory = 'all' | 'video' | 'audio' | 'editorial' | 'interactive';

export interface MediaComponentMeta {
  id: string;
  number: number;
  name: string;
  archetype: string;
  category: Exclude<MediaCategory, 'all'>;
  span: 'half' | 'full';
  summary: string;
}

export const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 2] as const;

export function clampTime(seconds: number, duration: number): number {
  if (!Number.isFinite(seconds) || !Number.isFinite(duration) || duration <= 0) {
    return 0;
  }
  return Math.max(0, Math.min(seconds, duration));
}

export function formatTimecode(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return '00:00';
  }
  const whole = Math.floor(seconds);
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function getProgressPercent(currentTime: number, duration: number): number {
  if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(currentTime)) {
    return 0;
  }
  const pct = (clampTime(currentTime, duration) / duration) * 100;
  return Math.round(pct * 100) / 100;
}

export function advanceTime(
  currentTime: number,
  duration: number,
  deltaSeconds: number,
  speed = 1,
  loop = false,
): { nextTime: number; ended: boolean } {
  if (!Number.isFinite(duration) || duration <= 0) {
    return { nextTime: 0, ended: false };
  }
  const safeSpeed = Number.isFinite(speed) && speed > 0 ? speed : 1;
  const candidate = Math.max(0, currentTime) + Math.max(0, deltaSeconds) * safeSpeed;
  if (candidate >= duration) {
    if (loop) {
      return { nextTime: candidate % duration, ended: false };
    }
    return { nextTime: duration, ended: true };
  }
  return { nextTime: candidate, ended: false };
}

export function nextPlaybackSpeed(currentSpeed: number): number {
  const idx = PLAYBACK_SPEEDS.indexOf(currentSpeed as (typeof PLAYBACK_SPEEDS)[number]);
  if (idx === -1) {
    return PLAYBACK_SPEEDS[0];
  }
  return PLAYBACK_SPEEDS[(idx + 1) % PLAYBACK_SPEEDS.length];
}

export interface MediaChapter {
  id: string;
  label: string;
  startTime: number;
}

export function getActiveChapterIndex(
  chapters: readonly MediaChapter[],
  currentTime: number,
): number {
  if (chapters.length === 0) {
    return -1;
  }
  let active = 0;
  for (let i = 0; i < chapters.length; i += 1) {
    if (currentTime >= chapters[i].startTime) {
      active = i;
    }
  }
  return active;
}

export const COMPONENT_CATALOG: MediaComponentMeta[] = [
  {
    id: 'Vid1',
    number: 1,
    name: 'Video Player Card',
    archetype: 'Play overlay & duration badge',
    category: 'video',
    span: 'half',
    summary: '16:9 SVG architectural frame with centered play overlay, bottom-right duration HUD, scrub bar, and mute toggle.',
  },
  {
    id: 'Vid2',
    number: 2,
    name: 'Video Modal Trigger',
    archetype: 'Lightbox dialog launcher',
    category: 'video',
    span: 'half',
    summary: 'Compact preview trigger that opens an accessible modal player dialog with chapter jumps and scrub controls.',
  },
  {
    id: 'Vid3',
    number: 3,
    name: 'Video in Split Section',
    archetype: 'Player paired with editorial copy',
    category: 'editorial',
    span: 'full',
    summary: 'Balanced 2-column feature split combining product narrative and key outcomes with a matching-height video frame.',
  },
  {
    id: 'Vid4',
    number: 4,
    name: 'Video Testimonial Card',
    archetype: 'Customer story & verified metric',
    category: 'editorial',
    span: 'half',
    summary: 'Attributable customer clip with portrait vector frame, live caption strip while playing, and quantified outcome.',
  },
  {
    id: 'Vid5',
    number: 5,
    name: 'Video Playlist Strip',
    archetype: 'Queue switcher & continuous play',
    category: 'video',
    span: 'half',
    summary: 'Featured player paired with a selectable 4-episode queue strip and active-track progress indicator.',
  },
  {
    id: 'Vid6',
    number: 6,
    name: 'Audio Player UI',
    archetype: 'Scrubber, skip & speed deck',
    category: 'audio',
    span: 'half',
    summary: 'Studio audio deck with 15s rewind, 30s forward skip, playback speed cycle, animated equalizer, and clickable scrub bar.',
  },
  {
    id: 'Vid7',
    number: 7,
    name: 'Podcast Embed Card',
    archetype: 'Waveform bars & episode metadata',
    category: 'audio',
    span: 'half',
    summary: 'Compact episode card featuring custom cover vector art, reactive SVG waveform progress, and bookmark toggle.',
  },
  {
    id: 'Vid8',
    number: 8,
    name: 'Webinar & Live Player',
    archetype: 'Live broadcast badge & Q&A',
    category: 'video',
    span: 'full',
    summary: 'Livestream viewport with LIVE indicator, tabular viewer counter, quality switcher, and interactive raise-hand state.',
  },
  {
    id: 'Vid9',
    number: 9,
    name: 'Video Background Hero',
    archetype: 'Animated backdrop with play CTA',
    category: 'editorial',
    span: 'full',
    summary: 'Wide hero composition backed by a layered animated SVG gradient scene, contrast scrim, watch CTA, and motion toggle.',
  },
  {
    id: 'Vid10',
    number: 10,
    name: 'Tutorial Steps with Thumbnails',
    archetype: 'Interactive step-by-step reels',
    category: 'interactive',
    span: 'full',
    summary: 'Three-step instructional sequence where each step renders its own SVG thumbnail and inline playable preview.',
  },
  {
    id: 'Vid11',
    number: 11,
    name: 'Screen-Recording Mock Frame',
    archetype: 'App window demo with cursor track',
    category: 'interactive',
    span: 'half',
    summary: 'Desktop window chrome showcasing a simulated SVG product workflow, moving pointer cursor, and 1x/2x playback.',
  },
  {
    id: 'Vid12',
    number: 12,
    name: 'Social Video Card',
    archetype: 'Vertical 9:16 short-form reel',
    category: 'video',
    span: 'half',
    summary: 'Portrait reel container with top progress bar, creator handle, measured dark scrim, mute button, and like toggle.',
  },
  {
    id: 'Vid13',
    number: 13,
    name: 'Picture-in-Picture Reader',
    archetype: 'Floating mini player dock',
    category: 'interactive',
    span: 'half',
    summary: 'Long-form note paired with a toggleable Picture-in-Picture mini player that docks left or right while playing.',
  },
  {
    id: 'Vid14',
    number: 14,
    name: 'Chaptered Course Player',
    archetype: 'Segmented timeline markers',
    category: 'video',
    span: 'half',
    summary: 'Technical lecture viewport featuring clickable timeline chapter pills and automatic active-chapter highlighting.',
  },
  {
    id: 'Vid15',
    number: 15,
    name: 'Before / After Grade Wipe',
    archetype: 'Split color-grading comparison',
    category: 'interactive',
    span: 'half',
    summary: 'Interactive split-wipe viewport comparing Raw Log and Color Graded SVG scenes with playable motion preview.',
  },
  {
    id: 'Vid16',
    number: 16,
    name: 'Storyboard Bento Preview',
    archetype: 'Multi-beat hover & play tile',
    category: 'editorial',
    span: 'half',
    summary: 'Editorial showcase tile cycling across 4 illustrated storyboard frames as playback advances.',
  },
  {
    id: 'Vid17',
    number: 17,
    name: 'Voice Memo Feedback Card',
    archetype: 'Compact review note & transcript',
    category: 'audio',
    span: 'half',
    summary: 'Inline review audio bubble with clickable waveform bars, 1x/1.5x speed toggle, and expandable text transcript.',
  },
  {
    id: 'Vid18',
    number: 18,
    name: '360° Spatial Orbit Frame',
    archetype: 'Pan & auto-orbit camera preview',
    category: 'interactive',
    span: 'half',
    summary: 'Interactive spatial viewport with azimuth pan slider and playable continuous orbit rotation of a vector rig.',
  },
  {
    id: 'Vid19',
    number: 19,
    name: 'Multi-Cam Angle Switcher',
    archetype: 'Live 3-feed director monitor',
    category: 'interactive',
    span: 'full',
    summary: 'Synchronized multi-angle studio player switching cleanly between Wide, Close-Up, and Slide feeds without losing timecode.',
  },
  {
    id: 'Vid20',
    number: 20,
    name: 'Widescreen Filmstrip Reel',
    archetype: '21:9 cinema frame & contact strip',
    category: 'editorial',
    span: 'full',
    summary: 'Anamorphic showreel player with 5 clickable keyframe thumbnails along a bottom contact sheet scrubber.',
  },
];

export function filterCatalog(
  items: readonly MediaComponentMeta[],
  category: MediaCategory,
  query: string,
): MediaComponentMeta[] {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.id.toLowerCase().includes(normalizedQuery) ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.archetype.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery)
    );
  });
}
