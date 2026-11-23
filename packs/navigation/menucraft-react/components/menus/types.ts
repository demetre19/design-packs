export interface SheetMenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  contained?: boolean;
  onSelectDestination?: (label: string) => void;
}
