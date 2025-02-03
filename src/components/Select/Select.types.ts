export interface Option {
    value: string;
    label: string;
  }
  
  export interface SelectProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    options: Option[];
    ariaLabel?: string;
    ariaDescribedBy?: string;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    onChange?: (value: string) => void;
  }
  