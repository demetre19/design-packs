export type AmbientCategory =
  | 'all'
  | 'gradients'
  | 'particles'
  | 'geometry'
  | 'atmospheres';

export type AmbientTechnique = 'CSS Keyframes' | 'SVG + CSS' | 'Layered Radial';

export interface AmbientComponentMeta {
  id: string;
  index: number;
  title: string;
  category: Exclude<AmbientCategory, 'all'>;
  technique: AmbientTechnique;
  summary: string;
  useCase: string;
}
