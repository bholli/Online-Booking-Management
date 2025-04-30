"use client";

import React from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import ButtonPrimary from "@/components/ButtonPrimary";

const AboutPage = () => {
  return (
    <div className="nc-AboutPage overflow-hidden relative">
      <BgGlassmorphism />
      
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="relative py-16">
          <BackgroundSection />
          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">About Our Mission</h2>
            <span className="mt-2 md:mt-4 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Connecting patients with specialized Long COVID care
            </span>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  The Long COVID Clinics Directory was created to help patients suffering from post-COVID conditions find specialized medical care across the United States.
                </p>
                <p>
                  Long COVID affects millions of Americans, with symptoms that can persist for months or even years after the initial infection. Finding appropriate medical care can be challenging, as many healthcare providers are still learning how to treat these complex conditions.
                </p>
                <p>
                  Our directory aims to bridge this gap by connecting patients with clinics that specialize in treating Long COVID and its associated symptoms. We verify each clinic in our database to ensure they offer dedicated services for post-COVID conditions.
                </p>
                <p>
                  We believe that everyone deserves access to quality healthcare, especially those suffering from emerging conditions like Long COVID. By creating this resource, we hope to make the journey to recovery a little easier for those affected.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <ButtonPrimary href="/clinics">Browse Clinics</ButtonPrimary>
            </div>
          </div>
        </div>
        
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20" />
          <div className="relative flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-semibold">What is Long COVID?</h2>
            <span className="mt-2 md:mt-4 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Understanding post-COVID conditions
            </span>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Long COVID, also known as post-COVID conditions, refers to a wide range of new, returning, or ongoing health problems that people experience after being infected with the virus that causes COVID-19.
                </p>
                <p>
                  Most people with COVID-19 get better within a few days to a few weeks. But for some people, symptoms can last for weeks, months, or longer. These long-term symptoms can include:
                </p>
                <ul>
                  <li>Fatigue</li>
                  <li>Difficulty breathing or shortness of breath</li>
                  <li>Brain fog (trouble thinking or concentrating)</li>
                  <li>Headache</li>
                  <li>Heart palpitations</li>
                  <li>Joint or muscle pain</li>
                  <li>Loss of smell or taste</li>
                  <li>Depression or anxiety</li>
                </ul>
                <p>
                  The specialized clinics in our directory focus on diagnosing and treating these persistent symptoms, often with multidisciplinary teams of healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default AboutPage;
