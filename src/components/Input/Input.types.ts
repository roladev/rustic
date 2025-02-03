import { ChangeEvent } from 'react';

export interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  ariaLabel?: string; 
  ariaDescribedBy?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
