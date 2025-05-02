"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { LONG_COVID_CLINICS } from "@/data/longCovidClinics";
import ClinicCardGrid from "@/components/ClinicCardGrid";
import SectionHeroSearchForm from "@/components/SectionHeroSearchForm";

export default function ClinicsPage() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  const radiusParam = searchParams.get("radius");
  const treatmentParams = searchParams.getAll("treatment");
  
  const searchTerm = locationParam || "";
  const selectedTreatments = treatmentParams || [];
  
  // Get unique states for filter dropdown
  const states = Array.from(new Set(LONG_COVID_CLINICS.map(clinic => clinic.state))).sort();
  
  // Filter clinics based on search term, selected state, and treatment types
  const filteredClinics = LONG_COVID_CLINICS.filter(clinic => {
    const matchesSearch = searchTerm === "" || 
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.zipCode.includes(searchTerm);
    
    const matchesState = selectedTreatments.length === 0 || 
      selectedTreatments.some(treatment => clinic.treatmentTypes.includes(treatment));
    
    return matchesSearch && matchesState;
  });
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Long COVID Clinics Directory
      </h1>
      
      <div className="mb-12">
        <SectionHeroSearchForm />
      </div>
      
      {/* Clinics Grid - Full width without filters sidebar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredClinics.length > 0 ? (
          filteredClinics.map(clinic => (
            <ClinicCardGrid key={clinic.id} clinic={clinic} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No clinics found</h3>
            <p className="text-neutral-500 dark:text-neutral-400">
              Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 