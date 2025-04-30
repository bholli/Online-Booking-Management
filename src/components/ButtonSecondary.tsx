import React, { FC } from "react";
import Link from "next/link";

export interface ButtonSecondaryProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  sizeClass?: string;
  disabled?: boolean;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  className = "",
  href,
  children,
  onClick = () => {},
  sizeClass = "py-3 px-4 sm:py-3.5 sm:px-6",
  disabled = false,
}) => {
  const classes = `relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${sizeClass} ${className} ${disabled ? "opacity-70 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary; 