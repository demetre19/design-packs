export type OrnamentCategory =
  | 'dividers'
  | 'frames'
  | 'typography'
  | 'accents';

export interface OrnamentSpec {
  id: string;
  number: number;
  componentName: `Orn${number}`;
  title: string;
  category: OrnamentCategory;
  categoryLabel: string;
  motifs: string[];
  semanticTags: string[];
  description: string;
}
