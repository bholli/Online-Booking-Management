import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionHeroSearchForm from "@/components/SectionHeroSearchForm";
import Image from "next/image";
import heroImage from "@/images/hero.png";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMORPHISM */}
      <BgGlassmorphism />

      {/* HERO SECTION WITH SEARCH */}
      <div className="relative flex items-center justify-center min-h-screen home-hero-section">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Long COVID Clinics"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-white">
              Find Long COVID Clinics Near You
            </h1>
            <span className="block mt-6 text-white text-opacity-90">
              Connecting patients with specialized care for Long COVID symptoms
            </span>
          </div>
          {/* Search form with 50% screen height */}
          <div className="h-[50vh]">
            <SectionHeroSearchForm className="mt-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

// This tells Next.js not to include the footer for this page
PageHome.hideFooter = true;

export default PageHome;
