import React from 'react';
import { FormProps } from './Form.types';

export function Form({ onSubmit, children }: FormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent refresh
    onSubmit && onSubmit(event);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
}
