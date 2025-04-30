import React, { FC } from "react";
import { LongCovidClinic } from "@/data/longCovidClinics";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, GlobeAltIcon, MapPinIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export interface ClinicCardProps {
  className?: string;
  data: LongCovidClinic;
}

const ClinicCard: FC<ClinicCardProps> = ({ className = "", data }) => {
  const {
    id,
    name,
    fullAddress,
    city,
    state,
    phone,
    website,
    images,
    verified,
    treatmentTypes,
  } = data;

  const defaultImage = "/images/clinics/default-clinic.jpg";

  const renderVerifiedBadge = () => {
    if (!verified) return null;
    return (
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          <CheckBadgeIcon className="w-4 h-4 mr-1" />
          Verified
        </span>
      </div>
    );
  };

  return (
    <div
      className={`nc-PropertyCardH group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
    >
      <Link href={`/clinic-details/${id}`} className="flex flex-col sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-40 h-48 sm:h-full flex-shrink-0 overflow-hidden">
          <Image
            fill
            src={images[0] || defaultImage}
            alt={name}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
          {renderVerifiedBadge()}
        </div>
        
        <div className="flex-grow p-4 sm:p-5 flex flex-col">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">{name}</h2>
            <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{fullAddress}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <PhoneIcon className="w-4 h-4 flex-shrink-0" />
              <span>{phone}</span>
            </div>
            {website && (
              <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                <GlobeAltIcon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{website}</span>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{city}, {state}</span>
              <span className="inline-flex px-3 py-1 rounded-full font-medium text-xs bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors">
                View details
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Treatment Types:</h4>
            <div className="flex flex-wrap gap-2">
              {treatmentTypes.map((type) => (
                <span 
                  key={type} 
                  className="inline-block bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClinicCard; 