import React, { FC } from "react";
import Heading from "@/components/Heading";
import { LongCovidClinic } from "@/data/longCovidClinics";
import ClinicCard from "./ClinicCard";

export interface SectionFeaturedClinicsProps {
  className?: string;
  data: LongCovidClinic[];
  heading?: string;
  subHeading?: string;
}

const SectionFeaturedClinics: FC<SectionFeaturedClinicsProps> = ({
  className = "",
  data,
  heading = "Featured Clinics",
  subHeading = "Discover specialized Long COVID treatment centers",
}) => {
  return (
    <div className={`nc-SectionFeaturedClinics relative ${className}`}>
      <Heading desc={subHeading}>{heading}</Heading>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {data.map((item) => (
          <ClinicCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionFeaturedClinics; 