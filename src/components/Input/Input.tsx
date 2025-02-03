import React, { useState } from 'react';
import { InputProps } from './Input.types';

export function Input({
  id,
  name,
  type = 'text',
  label,
  value,
  placeholder,
  ariaLabel,
  ariaDescribedBy,
  required = false,
  disabled = false,
  errorMessage,
  onChange,
}: InputProps) {
  // Track internal state if needed (optional)
  const [internalValue, setInternalValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    onChange && onChange(event);
  };

  const inputId = id || name || 'input-' + Math.random().toString(36).substr(2, 9);
  const describedByIds = [];
  if (errorMessage) {
    describedByIds.push(`${inputId}-error`);
  }
  if (ariaDescribedBy) {
    describedByIds.push(ariaDescribedBy);
  }

  return (
    <div>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && ' *'}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={internalValue}
        placeholder={placeholder}
        aria-label={ariaLabel} 
        aria-describedby={describedByIds.length > 0 ? describedByIds.join(' ') : undefined}
        aria-invalid={!!errorMessage}
        required={required}
        disabled={disabled}
        onChange={handleChange}
      />

      {errorMessage && (
        <p
          id={`${inputId}-error`}
          style={{ color: 'red' }}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
