import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionHeroSearchForm from "@/components/SectionHeroSearchForm";
import Image from "next/image";
import heroImage from "@/images/hero.png";

function PageHome() {
  return (
    <main className="nc-PageHome relative">
      {/* GLASSMORPHISM */}
      <BgGlassmorphism />

      {/* HERO SECTION WITH SEARCH */}
      <div className="relative flex items-center justify-center min-h-[calc(80vh-var(--header-height))] home-hero-section">
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

        <div className="container mx-auto px-4 relative z-10" style={{ marginTop: 'calc(-2 * var(--header-height))' }}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-white">
              Find Long COVID Clinics
            </h1>
            <h3 className="block mt-6 md:text-2xl xl:text-3xl text-white text-opacity-90">
              Connecting patients with specialized care for Long COVID symptoms
            </h3>
          </div>
          {/* Search form */}
          <div className="max-h-[50vh]">
            <SectionHeroSearchForm className="mt-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageHome;
