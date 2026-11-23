export type FormStyle = 'Minimal' | 'Professional' | 'Dark' | 'Warm';
export type FormLayout = 'Single Column' | 'Two-Column' | 'Inline-Compact' | 'Carded Sections';
export type FormGroup = 'All' | 'Contact & Apps' | 'Search & Filter' | 'Inputs & Files' | 'Settings & Data';

export interface FormSpec {
  id: string;
  number: number;
  componentName: string;
  title: string;
  category: string;
  group: Exclude<FormGroup, 'All'>;
  layout: FormLayout;
  style: FormStyle;
  summary: string;
}

export const FORM_SPECS: FormSpec[] = [
  {
    id: 'form-1',
    number: 1,
    componentName: 'Form1',
    title: 'Editorial Contact Form',
    category: 'Contact Form',
    group: 'Contact & Apps',
    layout: 'Single Column',
    style: 'Minimal',
    summary: 'Single-column inquiry with character counter, topic select, and consent validation.',
  },
  {
    id: 'form-2',
    number: 2,
    componentName: 'Form2',
    title: 'Enterprise Consultation Request',
    category: 'Contact Form',
    group: 'Contact & Apps',
    layout: 'Two-Column',
    style: 'Professional',
    summary: 'Two-column B2B contact form with phone, company size, and preferred contact radio.',
  },
  {
    id: 'form-3',
    number: 3,
    componentName: 'Form3',
    title: 'Engineering Role Application',
    category: 'Multi-Field Application',
    group: 'Contact & Apps',
    layout: 'Carded Sections',
    style: 'Professional',
    summary: 'Three structured sections covering candidate profile, portfolio URL, and availability.',
  },
  {
    id: 'form-4',
    number: 4,
    componentName: 'Form4',
    title: 'Studio Residency & Grant Proposal',
    category: 'Multi-Field Application',
    group: 'Contact & Apps',
    layout: 'Two-Column',
    style: 'Warm',
    summary: 'Two-column grant submission with budget range validation and abstract summary.',
  },
  {
    id: 'form-5',
    number: 5,
    componentName: 'Form5',
    title: 'Inline Dispatch Newsletter Bar',
    category: 'Newsletter Signup',
    group: 'Contact & Apps',
    layout: 'Inline-Compact',
    style: 'Minimal',
    summary: 'Compact horizontal email signup with cadence selector and instant confirmation.',
  },
  {
    id: 'form-6',
    number: 6,
    componentName: 'Form6',
    title: 'Nightly Engineering Digest Signup',
    category: 'Newsletter Signup',
    group: 'Contact & Apps',
    layout: 'Single Column',
    style: 'Dark',
    summary: 'Dark-surface subscription block requiring email and at least one topic interest.',
  },
  {
    id: 'form-7',
    number: 7,
    componentName: 'Form7',
    title: 'Scoped Search Bar with Suggestions',
    category: 'Search with Suggestions',
    group: 'Search & Filter',
    layout: 'Inline-Compact',
    style: 'Minimal',
    summary: 'Live-filtering command search with scope dropdown, keyboard navigation, and empty validation.',
  },
  {
    id: 'form-8',
    number: 8,
    componentName: 'Form8',
    title: 'Dark Library Quick-Search Input',
    category: 'Search with Suggestions',
    group: 'Search & Filter',
    layout: 'Inline-Compact',
    style: 'Dark',
    summary: 'High-contrast dark search bar with category filter, instant matches, and minimum-length hint.',
  },
  {
    id: 'form-9',
    number: 9,
    componentName: 'Form9',
    title: 'Catalog Inventory Filter Panel',
    category: 'Filter Panel',
    group: 'Search & Filter',
    layout: 'Carded Sections',
    style: 'Professional',
    summary: 'Carded multi-section filter panel with cross-field price range validation and active count.',
  },
  {
    id: 'form-10',
    number: 10,
    componentName: 'Form10',
    title: 'Archive Collection Filter Grid',
    category: 'Filter Panel',
    group: 'Search & Filter',
    layout: 'Two-Column',
    style: 'Warm',
    summary: 'Warm two-column archival filter with year-span validation, condition radios, and reset.',
  },
  {
    id: 'form-11',
    number: 11,
    componentName: 'Form11',
    title: 'Consultation Date & Slot Picker',
    category: 'Date/Time Picker',
    group: 'Inputs & Files',
    layout: 'Two-Column',
    style: 'Minimal',
    summary: 'Two-column appointment scheduler validating future dates, slot selection, and timezone.',
  },
  {
    id: 'form-12',
    number: 12,
    componentName: 'Form12',
    title: 'Maintenance Window Scheduler',
    category: 'Date/Time Picker',
    group: 'Inputs & Files',
    layout: 'Carded Sections',
    style: 'Dark',
    summary: 'Dark operations scheduler validating start/end timestamps and computing exact duration.',
  },
  {
    id: 'form-13',
    number: 13,
    componentName: 'Form13',
    title: 'Compliance Document Dropzone',
    category: 'File-Upload Dropzone',
    group: 'Inputs & Files',
    layout: 'Single Column',
    style: 'Professional',
    summary: 'Drag-and-drop multi-file uploader with extension/size validation and removable file queue.',
  },
  {
    id: 'form-14',
    number: 14,
    componentName: 'Form14',
    title: 'Creative Asset Submission Dropzone',
    category: 'File-Upload Dropzone',
    group: 'Inputs & Files',
    layout: 'Two-Column',
    style: 'Warm',
    summary: 'Two-column media dropzone pairing file validation with license and attribution metadata.',
  },
  {
    id: 'form-15',
    number: 15,
    componentName: 'Form15',
    title: 'Notification & Quiet Hours Settings',
    category: 'Settings with Toggles',
    group: 'Settings & Data',
    layout: 'Carded Sections',
    style: 'Dark',
    summary: 'Dark settings panel with accessible switch toggles, quiet-hours range, and dirty-state save.',
  },
  {
    id: 'form-16',
    number: 16,
    componentName: 'Form16',
    title: 'Workspace Privacy & Webhook Form',
    category: 'Settings with Toggles',
    group: 'Settings & Data',
    layout: 'Single Column',
    style: 'Minimal',
    summary: 'Single-column settings form with slug validation and conditional HTTPS webhook requirement.',
  },
  {
    id: 'form-17',
    number: 17,
    componentName: 'Form17',
    title: 'Shipping & Billing Address Form',
    category: 'Address Form',
    group: 'Settings & Data',
    layout: 'Two-Column',
    style: 'Professional',
    summary: 'Two-column address entry with country-specific postal code validation and formatted preview.',
  },
  {
    id: 'form-18',
    number: 18,
    componentName: 'Form18',
    title: 'Product Experience Rating Form',
    category: 'Feedback & Rating',
    group: 'Settings & Data',
    layout: 'Single Column',
    style: 'Warm',
    summary: 'Warm 1–5 interactive rating scale requiring improvement notes on lower scores.',
  },
  {
    id: 'form-19',
    number: 19,
    componentName: 'Form19',
    title: '3-Step Onboarding Survey',
    category: 'Survey Steps',
    group: 'Settings & Data',
    layout: 'Carded Sections',
    style: 'Minimal',
    summary: 'Multi-step wizard with per-step validation gating, NPS slider, and completion summary.',
  },
  {
    id: 'form-20',
    number: 20,
    componentName: 'Form20',
    title: 'Inline-Edit Rows & Validation Matrix',
    category: 'Inline-Edit & Validation States',
    group: 'Settings & Data',
    layout: 'Inline-Compact',
    style: 'Dark',
    summary: 'Inline-editable member directory demonstrating live error and success validation hints.',
  },
];

export interface CatalogFilterCriteria {
  query: string;
  style: FormStyle | 'All';
  layout: FormLayout | 'All';
  group: FormGroup;
}

export function filterFormSpecs(specs: FormSpec[], criteria: CatalogFilterCriteria): FormSpec[] {
  const q = criteria.query.trim().toLowerCase();
  return specs.filter((spec) => {
    if (criteria.style !== 'All' && spec.style !== criteria.style) return false;
    if (criteria.layout !== 'All' && spec.layout !== criteria.layout) return false;
    if (criteria.group !== 'All' && spec.group !== criteria.group) return false;
    if (!q) return true;
    return (
      spec.title.toLowerCase().includes(q) ||
      spec.category.toLowerCase().includes(q) ||
      spec.summary.toLowerCase().includes(q) ||
      spec.componentName.toLowerCase().includes(q)
    );
  });
}
