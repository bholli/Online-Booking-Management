"use client";

import React, { FC, useState, Fragment, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import { LONG_COVID_CLINICS } from "@/data/longCovidClinics";
import { MapPinIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

export interface SectionHeroSearchFormProps {
  className?: string;
}

const treatmentTypes = [
  {
    name: "Rehabilitation Services",
    description: "Physical therapy, occupational therapy, and rehabilitation programs"
  },
  {
    name: "Medication Management",
    description: "Prescription medications to manage symptoms"
  },
  {
    name: "Mental Health Support",
    description: "Counseling, therapy, and psychiatric services"
  },
  {
    name: "Specialized Procedures",
    description: "Advanced diagnostic and treatment procedures"
  },
  {
    name: "Supportive Care & Wellness",
    description: "Holistic approaches to managing symptoms"
  },
  {
    name: "Pediatric Long Covid Care",
    description: "Specialized care for children with Long COVID"
  },
  {
    name: "Research & Clinical",
    description: "Participation in clinical trials and research studies"
  }
];

const radiusOptions = [
  {
    name: "5 miles",
    description: "Locations very close to you"
  },
  {
    name: "10 miles",
    description: "Short driving distance"
  },
  {
    name: "25 miles",
    description: "Moderate driving distance"
  },
  {
    name: "50 miles",
    description: "Longer driving distance"
  },
  {
    name: "100 miles",
    description: "Extended regional options"
  },
  {
    name: "Any distance",
    description: "Show all available options"
  }
];

// Recent searches for demo
const recentSearches = [
  "Louisiana",
  "New York",
  "Texas",
  "California", 
  "Alabama"
];

const SectionHeroSearchForm: FC<SectionHeroSearchFormProps> = ({
  className = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [location, setLocation] = useState("");
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedRadius, setSelectedRadius] = useState("Any distance");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const locationInputRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!searchParams) return;
    const locationParam = searchParams.get("location") || "";
    const radiusParam = searchParams.get("radius") || "Any distance";
    const treatmentParams = searchParams.getAll("treatment") || [];
    setLocation(locationParam);
    setSelectedRadius(radiusParam);
    setSelectedTreatments(treatmentParams);
  }, [searchParams]);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (showLocationDropdown && locationInputRef.current) {
      locationInputRef.current.focus();
    }
  }, [showLocationDropdown]);
  
  const handleTreatmentChange = (treatment: string) => {
    setSelectedTreatments(prev => 
      prev.includes(treatment) 
        ? prev.filter(t => t !== treatment) 
        : [...prev, treatment]
    );
  };
  
  const handleRadiusChange = (radius: string) => {
    setSelectedRadius(radius);
  };
  
  const handleSelectLocation = (item: string) => {
    setLocation(item);
    setShowLocationDropdown(false);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let searchParams = new URLSearchParams();
    if (location) searchParams.append("location", location);
    if (selectedTreatments.length > 0) {
      selectedTreatments.forEach(treatment => 
        searchParams.append("treatment", treatment)
      );
    }
    if (selectedRadius) searchParams.append("radius", selectedRadius);
    
    router.push(`/clinics?${searchParams.toString()}`);
  };

  return (
    <div className={`nc-SectionHeroSearchForm ${className}`}>
      <div className="max-w-6xl mx-auto">
        <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0" onSubmit={handleSearch}>
          <div className="relative flex flex-[1.5]" ref={locationRef}>
            <div 
              onClick={() => setShowLocationDropdown(true)}
              className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left ${
                showLocationDropdown ? "nc-hero-field-focused" : ""
              }`}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
              <div className="flex-grow">
                <input
                  ref={locationInputRef}
                  className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  autoFocus={showLocationDropdown}
                />
                <span className="block mt-0.5 text-sm text-neutral-400 font-light">
                  <span className="line-clamp-1">Where are you looking for care?</span>
                </span>
              </div>
            </div>
            
            {/* Background for hover effect */}
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white dark:bg-neutral-800 left-10 -right-0.5"></div>
            
            {/* Location dropdown */}
            {showLocationDropdown && (
              <div className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
                <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800 dark:text-neutral-100">
                  Recent searches
                </h3>
                <div className="mt-2">
                  {recentSearches.map((item) => (
                    <span
                      onClick={() => handleSelectLocation(item)}
                      key={item}
                      className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                    >
                      <span className="block text-neutral-400">
                        <ClockIcon className="h-4 sm:h-6 w-4 sm:w-6" />
                      </span>
                      <span className="block font-medium text-neutral-700 dark:text-neutral-200">
                        {item}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Divider */}
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          
          {/* Treatment Type */}
          <Popover className="flex relative flex-1">
            {({ open }) => (
              <>
                <Popover.Button className="flex z-10 text-left w-full flex-shrink-0 items-center [ nc-hero-field-padding ] space-x-3 focus:outline-none cursor-pointer">
                  <div className="text-neutral-300 dark:text-neutral-400">
                    <AdjustmentsHorizontalIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                  <div className="flex-1">
                    <span className="block xl:text-lg font-semibold overflow-hidden">
                      <span className="line-clamp-1">
                        {selectedTreatments.length > 0 
                          ? `${selectedTreatments.length} selected` 
                          : "Treatment Type"}
                      </span>
                    </span>
                    <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                      What type of care?
                    </span>
                  </div>
                </Popover.Button>
                
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
                    <div>
                      <div className="relative flex flex-col space-y-5">
                        {treatmentTypes.map((type) => (
                          <div key={type.name} className="">
                            <div className="flex text-sm sm:text-base">
                              <input
                                id={type.name}
                                className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700 dark:checked:bg-primary-500 focus:ring-primary-500"
                                type="checkbox"
                                checked={selectedTreatments.includes(type.name)}
                                onChange={() => handleTreatmentChange(type.name)}
                                name={type.name}
                              />
                              <label htmlFor={type.name} className="ml-3.5 flex flex-col flex-1 justify-center">
                                <span className="text-neutral-900 dark:text-neutral-100">{type.name}</span>
                                <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
                                  {type.description}
                                </p>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          
          {/* Divider */}
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          
          {/* Radius with Search Button */}
          <div className="flex relative flex-[1.3]">
            <div className="flex-1 z-10 flex items-center focus:outline-none cursor-pointer">
              <Popover className="flex-1 flex text-left items-center focus:outline-none [ nc-hero-field-padding ] space-x-3">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center focus:outline-none w-full">
                      <div className="text-neutral-300 dark:text-neutral-400">
                        <MagnifyingGlassIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                      </div>
                      <div className="flex-grow ml-3">
                        <span className="block xl:text-lg font-semibold truncate">
                          {selectedRadius}
                        </span>
                        <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                          Search radius
                        </span>
                      </div>
                    </Popover.Button>
                    
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
                        <div>
                          <div className="relative flex flex-col space-y-5">
                            {radiusOptions.map((option) => (
                              <div key={option.name} className="">
                                <div className="flex text-sm sm:text-base">
                                  <input
                                    id={option.name}
                                    className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700 dark:checked:bg-primary-500 focus:ring-primary-500"
                                    type="radio"
                                    checked={selectedRadius === option.name}
                                    onChange={() => handleRadiusChange(option.name)}
                                    name="radius"
                                  />
                                  <label htmlFor={option.name} className="ml-3.5 flex flex-col flex-1 justify-center">
                                    <span className="text-neutral-900 dark:text-neutral-100">{option.name}</span>
                                    <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm font-light">
                                      {option.description}
                                    </p>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              {/* Search Button */}
              <div className="pr-2 xl:pr-4">
                <button
                  type="submit"
                  className="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
                >
                  <span className="mr-3 md:hidden">Search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionHeroSearchForm; 