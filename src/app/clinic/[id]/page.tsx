"use client";

import React, { Fragment, useState } from "react";
import { useParams } from "next/navigation";
import { LONG_COVID_CLINICS } from "@/data/longCovidClinics";
import Image from "next/image";
import StartRating from "@/components/StartRating";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import Input from "@/shared/Input";
import ButtonCircle from "@/shared/ButtonCircle";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ClinicDetailsPage() {
  const { id } = useParams();
  // Find the clinic by id
  const clinic = LONG_COVID_CLINICS.find((c) => String(c.id) === String(id));

  if (!clinic) {
    return <div className="container mx-auto py-16">Clinic not found.</div>;
  }

  return (
    <div className="nc-ClinicDetailsPage container mx-auto py-10">
      <main className="relative z-10 flex flex-col lg:flex-row gap-10">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {/* Title/Header */}
          <h1 className="text-3xl sm:text-4xl font-bold">{clinic.name}</h1>

          {/* Description */}
          <div className="text-neutral-700 dark:text-neutral-300 text-lg">
            {clinic.description || "No description available."}
          </div>

          {/* Photos */}
          {clinic.photos && clinic.photos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {clinic.photos.map((photo: string, idx: number) => (
                <div key={idx} className="aspect-[3/2] relative rounded-lg overflow-hidden">
                  <Image
                    src={photo}
                    alt={clinic.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Treatment Types */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Treatment Types</h2>
            <div className="flex flex-wrap gap-2">
              {clinic.treatmentTypes?.map((type: string) => (
                <span
                  key={type}
                  className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-200 text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Rating/Comment Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
            <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
            <div className="mt-4 relative">
              <Input
                fontClass=""
                sizeClass="h-16 px-4 py-3"
                rounded="rounded-3xl"
                placeholder="Share your thoughts ..."
              />
              <ButtonCircle
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                size=" w-12 h-12 "
              >
                <ArrowRightIcon className="w-5 h-5" />
              </ButtonCircle>
            </div>
            {/* You can map over clinic.comments here if you have them */}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-2/5 xl:w-1/3 flex flex-col gap-8">
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] ring-1 ring-black/10">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${clinic.address || ""} ${clinic.city || ""} ${clinic.state || ""}`
              )}&output=embed`}
            ></iframe>
          </div>

          {/* Contact/Location Details */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 space-y-3">
            <div>
              <div className="font-semibold">Address:</div>
              <div>
                {clinic.address}, {clinic.city}, {clinic.state} {clinic.zipCode}
              </div>
            </div>
            {clinic.phone && (
              <div>
                <div className="font-semibold">Phone:</div>
                <div>{clinic.phone}</div>
              </div>
            )}
            {clinic.website && (
              <div>
                <div className="font-semibold">Website:</div>
                <a
                  href={clinic.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  {clinic.website}
                </a>
              </div>
            )}
            {clinic.rating !== undefined && (
              <div>
                <div className="font-semibold">Rating:</div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm font-medium">{clinic.rating.toFixed(1)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 