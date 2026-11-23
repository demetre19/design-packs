import React from 'react';
import { Nav1, Nav2, Nav3, Nav18, Nav20 } from './MenusAndOverlays';
import { Nav4, Nav5, Nav6, Nav7 } from './TabBars';
import { Nav8, Nav9, Nav10, Nav19 } from './PaginationAndSteps';
import { Nav11, Nav12, Nav13, Nav14 } from './SegmentedAndTrees';
import { Nav15, Nav16, Nav17 } from './DocksAndBreadcrumbs';

export {
  Nav1,
  Nav2,
  Nav3,
  Nav4,
  Nav5,
  Nav6,
  Nav7,
  Nav8,
  Nav9,
  Nav10,
  Nav11,
  Nav12,
  Nav13,
  Nav14,
  Nav15,
  Nav16,
  Nav17,
  Nav18,
  Nav19,
  Nav20,
};

export type NavCategory = 'Overlays' | 'Tabs' | 'Pagination' | 'Structure' | 'Bars';

export interface NavCatalogItem {
  id: string;
  number: string;
  title: string;
  category: NavCategory;
  semantics: string;
  defaultOpen?: boolean;
  wide?: boolean;
  Component: React.ComponentType;
}

export const NAV_CATALOG: NavCatalogItem[] = [
  {
    id: 'Nav1',
    number: '01',
    title: 'Rich Action Dropdown Menu',
    category: 'Overlays',
    semantics: 'menu · sections · checkboxes · danger · shortcuts',
    defaultOpen: true,
    Component: Nav1,
  },
  {
    id: 'Nav2',
    number: '02',
    title: 'Context Menu',
    category: 'Overlays',
    semantics: 'role="menu" · right-click canvas · shortcuts',
    defaultOpen: true,
    Component: Nav2,
  },
  {
    id: 'Nav3',
    number: '03',
    title: 'Command Palette',
    category: 'Overlays',
    semantics: 'search input · grouped actions · keyboard hints',
    defaultOpen: true,
    wide: true,
    Component: Nav3,
  },
  {
    id: 'Nav4',
    number: '04',
    title: 'Underline Tab Bar',
    category: 'Tabs',
    semantics: 'role="tablist" · aria-selected · tabpanel',
    Component: Nav4,
  },
  {
    id: 'Nav5',
    number: '05',
    title: 'Pill Tab Bar',
    category: 'Tabs',
    semantics: 'role="tablist" · capsule switcher · tabpanel',
    Component: Nav5,
  },
  {
    id: 'Nav6',
    number: '06',
    title: 'Icon + Label Tab Bar',
    category: 'Tabs',
    semantics: 'role="tablist" · leading icons · tabular counts',
    Component: Nav6,
  },
  {
    id: 'Nav7',
    number: '07',
    title: 'Vertical Sidebar Tabs',
    category: 'Tabs',
    semantics: 'aria-orientation="vertical" · split panel',
    wide: true,
    Component: Nav7,
  },
  {
    id: 'Nav8',
    number: '08',
    title: 'Numbered Pagination Controls',
    category: 'Pagination',
    semantics: 'nav > ol · aria-current="page" · ellipsis',
    Component: Nav8,
  },
  {
    id: 'Nav9',
    number: '09',
    title: 'Compact Pagination Controls',
    category: 'Pagination',
    semantics: 'first/prev/next/last · disabled boundaries',
    Component: Nav9,
  },
  {
    id: 'Nav10',
    number: '10',
    title: 'Sequential Prev / Next Pagination',
    category: 'Pagination',
    semantics: 'chapter navigation · boundary disabled state',
    Component: Nav10,
  },
  {
    id: 'Nav11',
    number: '11',
    title: 'Segmented Control',
    category: 'Structure',
    semantics: 'role="radiogroup" · timeframe switcher',
    Component: Nav11,
  },
  {
    id: 'Nav12',
    number: '12',
    title: 'Icon Segmented Controls',
    category: 'Structure',
    semantics: 'aria-pressed · layout & alignment controls',
    Component: Nav12,
  },
  {
    id: 'Nav13',
    number: '13',
    title: 'Collapsible File Tree Menu',
    category: 'Structure',
    semantics: 'role="tree" · aria-expanded · nested nodes',
    Component: Nav13,
  },
  {
    id: 'Nav14',
    number: '14',
    title: 'Collapsible Document Outline',
    category: 'Structure',
    semantics: 'nav > ol · aria-current="location"',
    Component: Nav14,
  },
  {
    id: 'Nav15',
    number: '15',
    title: 'Dock-Style Icon Bar',
    category: 'Bars',
    semantics: 'nav · tooltips · hover elevation · active state',
    Component: Nav15,
  },
  {
    id: 'Nav16',
    number: '16',
    title: 'Mobile Bottom Tab Bar',
    category: 'Bars',
    semantics: 'touch targets ≥ 44px · aria-current="page"',
    Component: Nav16,
  },
  {
    id: 'Nav17',
    number: '17',
    title: 'Breadcrumb with Dropdown',
    category: 'Overlays',
    semantics: 'nav > ol · environment switcher menu',
    defaultOpen: true,
    Component: Nav17,
  },
  {
    id: 'Nav18',
    number: '18',
    title: 'Account & Workspace Switcher',
    category: 'Overlays',
    semantics: 'menuitemradio · menuitemcheckbox · danger item',
    defaultOpen: true,
    Component: Nav18,
  },
  {
    id: 'Nav19',
    number: '19',
    title: 'Multi-Step Progress Rail',
    category: 'Pagination',
    semantics: 'nav > ol · aria-current="step" · stepper',
    wide: true,
    Component: Nav19,
  },
  {
    id: 'Nav20',
    number: '20',
    title: 'Cascading Flyout Menu',
    category: 'Overlays',
    semantics: 'role="menu" · nested submenu · shortcuts',
    defaultOpen: true,
    Component: Nav20,
  },
];
