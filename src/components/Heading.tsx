import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  isCenter?: boolean;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = "",
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative ${
        isCenter ? "text-center" : ""
      } ${className}`}
      {...args}
    >
      <h2 className="text-3xl md:text-4xl font-semibold">{children}</h2>
      {desc && (
        <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
      )}
    </div>
  );
};

export default Heading; 