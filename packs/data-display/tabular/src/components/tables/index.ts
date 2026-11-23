import type { ComponentType } from 'react';
import { Table1 } from './Table01';
import { Table2 } from './Table02';
import { Table3 } from './Table03';
import { Table4 } from './Table04';
import { Table5 } from './Table05';
import { Table6 } from './Table06';
import { Table7 } from './Table07';
import { Table8 } from './Table08';
import { Table9 } from './Table09';
import { Table10 } from './Table10';
import { Table11 } from './Table11';
import { Table12 } from './Table12';
import { Table13 } from './Table13';
import { Table14 } from './Table14';
import { Table15 } from './Table15';
import { Table16 } from './Table16';
import { Table17 } from './Table17';
import { Table18 } from './Table18';
import { Table19 } from './Table19';
import { Table20 } from './Table20';

export {
  Table1,
  Table2,
  Table3,
  Table4,
  Table5,
  Table6,
  Table7,
  Table8,
  Table9,
  Table10,
  Table11,
  Table12,
  Table13,
  Table14,
  Table15,
  Table16,
  Table17,
  Table18,
  Table19,
  Table20,
};

export type TableCategory = 'Users & Teams' | 'Invoices & Finance' | 'Orders & Ops' | 'Files & Docs';

export interface TableCatalogItem {
  id: string;
  number: number;
  exportName: string;
  title: string;
  category: TableCategory;
  styleTone: 'Minimal' | 'Professional' | 'Dark' | 'Colourful';
  features: string;
  Component: ComponentType;
}

export const TABLE_CATALOG: TableCatalogItem[] = [
  { id: 'table-1', number: 1, exportName: 'Table1', title: 'Workspace Members', category: 'Users & Teams', styleTone: 'Minimal', features: 'Avatars, status pills, sortable headers, bulk selection bar', Component: Table1 },
  { id: 'table-2', number: 2, exportName: 'Table2', title: 'IAM Identity Roster', category: 'Users & Teams', styleTone: 'Dark', features: 'Dark console, status filter tabs, row action dropdown', Component: Table2 },
  { id: 'table-3', number: 3, exportName: 'Table3', title: 'Accounts Receivable Ledger', category: 'Invoices & Finance', styleTone: 'Professional', features: 'Invoice numbers, bulk mark-paid, tfoot totals row', Component: Table3 },
  { id: 'table-4', number: 4, exportName: 'Table4', title: 'Vendor Payables Queue', category: 'Invoices & Finance', styleTone: 'Colourful', features: 'High-contrast colourful status coding, filter chips, row menu', Component: Table4 },
  { id: 'table-5', number: 5, exportName: 'Table5', title: 'Order Fulfillment Queue', category: 'Orders & Ops', styleTone: 'Minimal', features: 'Expandable rows revealing line items & carrier tracking', Component: Table5 },
  { id: 'table-6', number: 6, exportName: 'Table6', title: 'Live Order Dispatch Stream', category: 'Orders & Ops', styleTone: 'Dark', features: 'Dark compact density, sticky header, bulk print/export', Component: Table6 },
  { id: 'table-7', number: 7, exportName: 'Table7', title: 'Document Repository', category: 'Files & Docs', styleTone: 'Minimal', features: 'File type icons, byte sorting, bulk delete, copy link menu', Component: Table7 },
  { id: 'table-8', number: 8, exportName: 'Table8', title: 'Hierarchical Workspace Tree', category: 'Files & Docs', styleTone: 'Professional', features: 'Nested folder/file sub-rows with indented tree structure', Component: Table8 },
  { id: 'table-9', number: 9, exportName: 'Table9', title: 'Employee Density Switcher', category: 'Users & Teams', styleTone: 'Professional', features: 'Compact / Standard / Roomy density toggle, live search', Component: Table9 },
  { id: 'table-10', number: 10, exportName: 'Table10', title: 'Regulatory Compliance Ledger', category: 'Files & Docs', styleTone: 'Colourful', features: 'Sticky header + sticky first column, icon-paired statuses', Component: Table10 },
  { id: 'table-11', number: 11, exportName: 'Table11', title: 'Backorder Intake Queue', category: 'Orders & Ops', styleTone: 'Minimal', features: 'Empty state variant with 1-click sample data restore', Component: Table11 },
  { id: 'table-12', number: 12, exportName: 'Table12', title: 'Monthly Billing Statements', category: 'Invoices & Finance', styleTone: 'Professional', features: 'Loading skeleton variant matching exact row geometry', Component: Table12 },
  { id: 'table-13', number: 13, exportName: 'Table13', title: 'Departmental Cost Centers', category: 'Invoices & Finance', styleTone: 'Professional', features: 'Dynamic tfoot totals, variance coding, checked subtotal', Component: Table13 },
  { id: 'table-14', number: 14, exportName: 'Table14', title: 'Engineering Work Orders', category: 'Orders & Ops', styleTone: 'Dark', features: 'Dark nested sub-rows for milestone tasks & hour rollups', Component: Table14 },
  { id: 'table-15', number: 15, exportName: 'Table15', title: 'Organization Seat Management', category: 'Users & Teams', styleTone: 'Minimal', features: 'Row action menus that mutate role and active seat state', Component: Table15 },
  { id: 'table-16', number: 16, exportName: 'Table16', title: 'Logistics Fulfillment Pipeline', category: 'Orders & Ops', styleTone: 'Colourful', features: 'Vibrant stage pills & bulk stage transitions', Component: Table16 },
  { id: 'table-17', number: 17, exportName: 'Table17', title: 'Executive Governance Library', category: 'Files & Docs', styleTone: 'Minimal', features: 'Roomy density, expandable abstracts, approval menu', Component: Table17 },
  { id: 'table-18', number: 18, exportName: 'Table18', title: 'Object Storage Buckets', category: 'Files & Docs', styleTone: 'Dark', features: 'Dark console, usage progress bars & tfoot storage totals', Component: Table18 },
  { id: 'table-19', number: 19, exportName: 'Table19', title: 'Monochrome Access Matrix', category: 'Users & Teams', styleTone: 'Minimal', features: 'Compact monochrome sticky header & role filter tabs', Component: Table19 },
  { id: 'table-20', number: 20, exportName: 'Table20', title: 'Enterprise Reconciliation Ledger', category: 'Invoices & Finance', styleTone: 'Professional', features: 'Sticky header, density toggle, expand, menu, bulk & tfoot totals', Component: Table20 },
];
