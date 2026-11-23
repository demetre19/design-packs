export type ControlCategory = 'core' | 'feedback' | 'utilities' | 'links';

export type FilterCategory = 'all' | ControlCategory;

export interface ControlSpec {
  id:
    | 'Btn1'
    | 'Btn2'
    | 'Btn3'
    | 'Btn4'
    | 'Btn5'
    | 'Btn6'
    | 'Btn7'
    | 'Btn8'
    | 'Btn9'
    | 'Btn10'
    | 'Btn11'
    | 'Btn12'
    | 'Btn13'
    | 'Btn14'
    | 'Btn15'
    | 'Btn16'
    | 'Btn17'
    | 'Btn18'
    | 'Btn19'
    | 'Btn20';
  index: string;
  title: string;
  category: ControlCategory;
  categoryLabel: string;
  summary: string;
  ariaNote: string;
}
