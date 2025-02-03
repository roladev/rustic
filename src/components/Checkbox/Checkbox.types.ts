export interface CheckboxProps {
    id?: string;
    name?: string;
    label?: string;
    checked?: boolean;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
  }
  