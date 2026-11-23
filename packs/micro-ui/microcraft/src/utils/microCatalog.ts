export type MicroCategory =
  | 'all'
  | 'tooltips'
  | 'popovers'
  | 'menus'
  | 'indicators';

export type StyleTone = 'minimal' | 'dark' | 'colourful' | 'professional';

export interface MicroSpec {
  id: number;
  name: `Micro${number}`;
  title: string;
  category: Exclude<MicroCategory, 'all'>;
  styleTone: StyleTone;
  ariaRole: string;
  surfaceTheme: 'light' | 'dark' | 'tinted';
  summary: string;
  minStageHeightClass: string;
}

export interface CommandActionItem {
  id: string;
  label: string;
  group: string;
  shortcut: string;
}

export interface CheckboxMenuItem {
  id: string;
  label: string;
  checked: boolean;
}

export const MICRO_CATALOG: MicroSpec[] = [
  {
    id: 1,
    name: 'Micro1',
    title: 'Top Tooltip with Shortcut',
    category: 'tooltips',
    styleTone: 'dark',
    ariaRole: 'tooltip',
    surfaceTheme: 'light',
    summary: 'Dark top-anchored tooltip on an icon button with keyboard shortcut hint.',
    minStageHeightClass: 'min-h-[210px]',
  },
  {
    id: 2,
    name: 'Micro2',
    title: 'Bottom Light Tooltip',
    category: 'tooltips',
    styleTone: 'professional',
    ariaRole: 'tooltip',
    surfaceTheme: 'light',
    summary: 'Elevated light tooltip positioned below a text button with format details.',
    minStageHeightClass: 'min-h-[210px]',
  },
  {
    id: 3,
    name: 'Micro3',
    title: 'Right Colourful Icon Tooltip',
    category: 'tooltips',
    styleTone: 'colourful',
    ariaRole: 'tooltip',
    surfaceTheme: 'tinted',
    summary: 'Vibrant indigo right-anchored tooltip beside a compact icon trigger.',
    minStageHeightClass: 'min-h-[210px]',
  },
  {
    id: 4,
    name: 'Micro4',
    title: 'Left Minimal Text Tooltip',
    category: 'tooltips',
    styleTone: 'minimal',
    ariaRole: 'tooltip',
    surfaceTheme: 'light',
    summary: 'Monochrome left-anchored tooltip paired with an inline text link trigger.',
    minStageHeightClass: 'min-h-[210px]',
  },
  {
    id: 5,
    name: 'Micro5',
    title: 'Billing Info Card Popover',
    category: 'popovers',
    styleTone: 'professional',
    ariaRole: 'dialog',
    surfaceTheme: 'light',
    summary: 'Structured info card popover displaying cycle quota and seat allocation.',
    minStageHeightClass: 'min-h-[300px]',
  },
  {
    id: 6,
    name: 'Micro6',
    title: 'Dark Action Menu Popover',
    category: 'popovers',
    styleTone: 'dark',
    ariaRole: 'dialog',
    surfaceTheme: 'dark',
    summary: 'Dark slate sharing popover with live visibility switcher and copy link.',
    minStageHeightClass: 'min-h-[350px]',
  },
  {
    id: 7,
    name: 'Micro7',
    title: 'Rich Popover with Vector Graphic',
    category: 'popovers',
    styleTone: 'colourful',
    ariaRole: 'dialog',
    surfaceTheme: 'tinted',
    summary: 'Rich feature popover featuring an image-free geometric vector illustration.',
    minStageHeightClass: 'min-h-[360px]',
  },
  {
    id: 8,
    name: 'Micro8',
    title: 'Icon + Label Dropdown Menu',
    category: 'menus',
    styleTone: 'professional',
    ariaRole: 'menu',
    surfaceTheme: 'light',
    summary: 'Classic dropdown menu with crisp icons, labels, and active action feedback.',
    minStageHeightClass: 'min-h-[300px]',
  },
  {
    id: 9,
    name: 'Micro9',
    title: 'Sectioned Menu with Danger Item',
    category: 'menus',
    styleTone: 'minimal',
    ariaRole: 'menu',
    surfaceTheme: 'light',
    summary: 'Grouped menu with section dividers and a semantic destructive action.',
    minStageHeightClass: 'min-h-[330px]',
  },
  {
    id: 10,
    name: 'Micro10',
    title: 'Dark Checkbox Filter Menu',
    category: 'menus',
    styleTone: 'dark',
    ariaRole: 'menu',
    surfaceTheme: 'dark',
    summary: 'Multi-select checkbox dropdown updating live column count on the trigger.',
    minStageHeightClass: 'min-h-[310px]',
  },
  {
    id: 11,
    name: 'Micro11',
    title: 'Canvas Layer Context Menu',
    category: 'menus',
    styleTone: 'dark',
    ariaRole: 'menu',
    surfaceTheme: 'dark',
    summary: 'Right-click layer card trigger with floating dark shortcut context menu.',
    minStageHeightClass: 'min-h-[340px]',
  },
  {
    id: 12,
    name: 'Micro12',
    title: 'Text Selection Context Menu',
    category: 'menus',
    styleTone: 'colourful',
    ariaRole: 'menu',
    surfaceTheme: 'tinted',
    summary: 'Highlighted prose snippet with colourful quick-annotation context menu.',
    minStageHeightClass: 'min-h-[320px]',
  },
  {
    id: 13,
    name: 'Micro13',
    title: 'User Profile Hover Card',
    category: 'popovers',
    styleTone: 'professional',
    ariaRole: 'dialog',
    surfaceTheme: 'light',
    summary: 'Author mention trigger revealing profile details, stats, and follow toggle.',
    minStageHeightClass: 'min-h-[300px]',
  },
  {
    id: 14,
    name: 'Micro14',
    title: 'Link Preview Hover Card',
    category: 'popovers',
    styleTone: 'minimal',
    ariaRole: 'dialog',
    surfaceTheme: 'light',
    summary: 'Inline URL trigger opening an editorial link summary with bookmark toggle.',
    minStageHeightClass: 'min-h-[290px]',
  },
  {
    id: 15,
    name: 'Micro15',
    title: 'Formula Help & Hint Block',
    category: 'popovers',
    styleTone: 'colourful',
    ariaRole: 'region',
    surfaceTheme: 'tinted',
    summary: 'Contextual help block unpacking calculation logic with dismiss/reopen.',
    minStageHeightClass: 'min-h-[290px]',
  },
  {
    id: 16,
    name: 'Micro16',
    title: 'Inline Info Icon & Description',
    category: 'tooltips',
    styleTone: 'minimal',
    ariaRole: 'tooltip',
    surfaceTheme: 'light',
    summary: 'Field label info icon revealing backoff guidance and a quick-apply preset.',
    minStageHeightClass: 'min-h-[270px]',
  },
  {
    id: 17,
    name: 'Micro17',
    title: 'Command-Palette Quick Actions',
    category: 'menus',
    styleTone: 'dark',
    ariaRole: 'dialog',
    surfaceTheme: 'dark',
    summary: 'Compact quick-jump command palette with live action filtering and shortcuts.',
    minStageHeightClass: 'min-h-[360px]',
  },
  {
    id: 18,
    name: 'Micro18',
    title: 'Badge Count & Breakdown Tray',
    category: 'indicators',
    styleTone: 'colourful',
    ariaRole: 'region',
    surfaceTheme: 'tinted',
    summary: 'Live numeric badge trigger with capped 99+ formatting and unread breakdown.',
    minStageHeightClass: 'min-h-[290px]',
  },
  {
    id: 19,
    name: 'Micro19',
    title: 'Notification Dot & Activity Tray',
    category: 'indicators',
    styleTone: 'professional',
    ariaRole: 'dialog',
    surfaceTheme: 'light',
    summary: 'Bell trigger with conditional notification dot that clears when events are read.',
    minStageHeightClass: 'min-h-[320px]',
  },
  {
    id: 20,
    name: 'Micro20',
    title: 'Sync Status Dot & Switcher',
    category: 'indicators',
    styleTone: 'minimal',
    ariaRole: 'menu',
    surfaceTheme: 'dark',
    summary: 'Workspace sync indicator paired with an interactive state switcher menu.',
    minStageHeightClass: 'min-h-[290px]',
  },
];

export function filterMicroItems(
  items: MicroSpec[],
  category: MicroCategory,
  styleFilter: StyleTone | 'all',
  query: string
): MicroSpec[] {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (styleFilter !== 'all' && item.styleTone !== styleFilter) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.styleTone.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function formatBadgeCount(count: number, cap = 99): string {
  const safeCount = Math.max(0, Math.floor(count));
  if (safeCount > cap) {
    return `${cap}+`;
  }
  return String(safeCount);
}

export function filterCommandActions(
  actions: CommandActionItem[],
  query: string
): CommandActionItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return actions;
  }
  return actions.filter(
    (action) =>
      action.label.toLowerCase().includes(normalized) ||
      action.group.toLowerCase().includes(normalized) ||
      action.shortcut.toLowerCase().includes(normalized)
  );
}

export function toggleCheckboxItem(
  items: CheckboxMenuItem[],
  id: string
): CheckboxMenuItem[] {
  return items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
}
