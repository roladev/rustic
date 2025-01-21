import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text or content displayed inside the button.
   */
  label: string;
}

/**
 * Reusable Button component supports all native button props.
 */
function Button({ label, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
}

export default Button;
