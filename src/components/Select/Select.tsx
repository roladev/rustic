import React, { useState } from 'react';
import { SelectProps } from './Select.types';

export function Select({
  id,
  name,
  label,
  value,
  options,
  ariaLabel,
  ariaDescribedBy,
  required = false,
  disabled = false,
  errorMessage,
  onChange,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(value || '');
  const selectId = id || name || 'select-' + Math.random().toString(36).substr(2, 9);

  const describedByIds = [];
  if (errorMessage) describedByIds.push(`${selectId}-error`);
  if (ariaDescribedBy) describedByIds.push(ariaDescribedBy);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange && onChange(newValue);
  }

  return (
    <div>
      {label && (
        <label htmlFor={selectId}>
          {label}
          {required && ' *'}
        </label>
      )}

      <select
        id={selectId}
        name={name}
        value={internalValue}
        aria-label={ariaLabel}
        aria-describedby={describedByIds.length > 0 ? describedByIds.join(' ') : undefined}
        aria-invalid={!!errorMessage}
        required={required}
        disabled={disabled}
        onChange={handleSelectChange}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errorMessage && (
        <p
          id={`${selectId}-error`}
          style={{ color: 'red' }}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
