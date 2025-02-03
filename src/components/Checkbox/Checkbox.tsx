import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({
  id,
  name,
  label,
  checked = false,
  ariaLabel,
  ariaDescribedBy,
  disabled = false,
  onChange,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(checked);
  const checkboxId = id || name || 'checkbox-' + Math.random().toString(36).substr(2, 9);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalChecked(event.target.checked);
    onChange && onChange(event.target.checked);
  };

  return (
    <div>
      <input
        id={checkboxId}
        name={name}
        type="checkbox"
        checked={internalChecked}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        onChange={handleChange}
      />
      {label && (
        <label htmlFor={checkboxId}>
          {label}
        </label>
      )}
    </div>
  );
}
