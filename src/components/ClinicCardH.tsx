import React, { FC } from "react";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export interface ClinicCardHProps {
  className?: string;
  clinic: {
    id: string;
    name: string;
    city: string;
    state: string;
    description: string;
  };
}

const ClinicCardH: FC<ClinicCardHProps> = ({ className = "", clinic }) => {
  const {
    id,
    name,
    city,
    state,
    description,
  } = clinic;

  // Use a temp Unsplash image
  const imageUrl = `https://source.unsplash.com/400x300/?clinic,healthcare,building&sig=${id}`;

  return (
    <div
      className={`nc-ClinicCardH group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-3xl overflow-hidden ${className}`}
    >
      <Link href={`/clinic/${id}`} className="absolute inset-0"></Link>
      <div className="h-full w-full flex flex-col sm:flex-row sm:items-center">
        {/* Image */}
        <div className="flex-shrink-0 p-3 w-full sm:w-64">
          <div className="w-full h-40 rounded-2xl overflow-hidden bg-neutral-200">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-grow p-3 sm:pr-6 flex flex-col items-start">
          <div className="space-y-4 w-full">
            <h2 className="text-lg font-medium capitalize line-clamp-2">
              {name}
            </h2>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-0.5" />
              <span className="text-neutral-500 dark:text-neutral-400">
                {city}, {state}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardH; 