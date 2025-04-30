import React, { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, ...args }, ref) => {
    return (
      <select
        ref={ref}
        className={`nc-Select block w-full text-sm rounded-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${className}`}
        {...args}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";
export default Select; 