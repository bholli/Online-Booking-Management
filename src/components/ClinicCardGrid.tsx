import React from "react";
import Link from "next/link";

export interface ClinicCardGridProps {
  clinic: {
    id: string;
    name: string;
    city: string;
    state: string;
    photoUrl?: string;
    rating?: number;
  };
}

const ClinicCardGrid: React.FC<ClinicCardGridProps> = ({ clinic }) => {
  return (
    <Link
      href={`/clinic-details/${clinic.id}`}
      className="block h-full group"
      tabIndex={0}
    >
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow group overflow-hidden flex flex-col h-full transition ring-primary-500 focus-within:ring-2 hover:shadow-lg">
        {/* Photo area */}
        <div className="aspect-[3/2] bg-neutral-200 dark:bg-neutral-700 w-full overflow-hidden">
          {clinic.photoUrl ? (
            <img
              src={clinic.photoUrl}
              alt={clinic.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-400 text-4xl">
              🏥
            </div>
          )}
        </div>
        {/* Info */}
        <div className="p-4 flex-1 flex flex-col">
          <div
            className="font-semibold text-base xl:text-lg text-neutral-900 dark:text-neutral-100 truncate"
            title={clinic.name}
          >
            {clinic.name}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {clinic.city}, {clinic.state}
          </div>
          {clinic.rating !== undefined && (
            <div className="mt-2 flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-sm font-medium">
                {clinic.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ClinicCardGrid; 