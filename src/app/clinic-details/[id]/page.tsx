"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { LONG_COVID_CLINICS, LongCovidClinic } from "@/data/longCovidClinics";
import Image from "next/image";
import BackgroundSection from "@/components/BackgroundSection";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonSecondary from "@/components/ButtonSecondary"
import { 
  PhoneIcon, 
  GlobeAltIcon, 
  MapPinIcon, 
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import CommentListing from "@/components/CommentListing";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import ButtonPrimary from "@/components/ButtonPrimary";
import GoogleMapWrapper from '@/components/GoogleMapWrapper';

// Marker component for the map
const MapMarker = ({ text, lat, lng }: { text: string; lat: number; lng: number }) => (
  <div className="flex items-center justify-center w-8 h-8 bg-primary-6000 text-white rounded-full">
    <MapPinIcon className="w-5 h-5" />
  </div>
);

const ClinicDetailPage = () => {
  const params = useParams();
  const [clinic, setClinic] = useState<LongCovidClinic | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    if (params?.id) {
      const foundClinic = LONG_COVID_CLINICS.find(c => c.id === String(params.id));
      setClinic(foundClinic || null);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="container py-16 lg:py-28">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!clinic) {
    return (
      <div className="container py-16 lg:py-28">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Clinic not found</h2>
          <p className="mt-4">The clinic you're looking for doesn't exist or has been removed.</p>
          <ButtonSecondary href="/clinics" className="mt-8">
            Back to Clinics
          </ButtonSecondary>
        </div>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the comment submission
    // For now, just reset the form
    alert("Comment submitted! (This is a demo - no actual submission occurs)");
    setCommentName("");
    setCommentEmail("");
    setCommentContent("");
  };

  const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col space-y-8">
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Location</span>
              {clinic.verified && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  <CheckBadgeIcon className="w-4 h-4 mr-1" />
                  Verified
                </span>
              )}
            </div>
            
            <div className="w-full h-52 sm:h-80">
              {clinic.lat && clinic.lng ? (
                <GoogleMapWrapper
                  center={{ lat: clinic.lat, lng: clinic.lng }}
                  zoom={14}
                >
                  <MapMarker
                    lat={clinic.lat}
                    lng={clinic.lng}
                    text={clinic.name}
                  />
                </GoogleMapWrapper>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                  <span className="text-neutral-500">Map location not available</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 mt-0.5 text-neutral-500" />
                <span className="text-neutral-700 dark:text-neutral-300">{clinic.fullAddress}</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 mt-0.5 text-neutral-500" />
                <a href={`tel:${clinic.phone}`} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-6000">
                  {clinic.phone}
                </a>
              </div>
              
              {clinic.website && (
                <div className="flex items-start space-x-3">
                  <GlobeAltIcon className="w-5 h-5 mt-0.5 text-neutral-500" />
                  <a 
                    href={clinic.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-primary-6000 truncate"
                  >
                    {clinic.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-ClinicDetailPage">
      <div className="container pt-10 pb-24 lg:pb-32">
        <div className="space-y-10">
          <div>
            <h1 className="text-3xl font-semibold">{clinic.name}</h1>
            <div className="flex items-center space-x-4 mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {clinic.city}, {clinic.state}
              </span>
              {clinic.verified && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  <CheckBadgeIcon className="w-4 h-4 mr-1" />
                  Verified
                </span>
              )}
            </div>
          </div>
          
          <div className="relative grid grid-cols-3 gap-1 sm:gap-2">
            <div className="col-span-2 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden">
              <Image
                fill
                src={clinic.images[0]}
                alt={clinic.name}
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {clinic.images.slice(1, 3).map((img, index) => (
              <div key={index} className="relative rounded-md sm:rounded-xl overflow-hidden">
                <Image
                  fill
                  src={img}
                  alt={`${clinic.name} ${index + 1}`}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">About this clinic</h2>
                <div className="prose prose-sm sm:prose dark:prose-invert">
                  <p>{clinic.description || "No description available for this clinic."}</p>
                </div>
              </div>
              
              <div className="pt-10 border-t border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold flex items-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2 text-neutral-500" />
                  Comments & Reviews
                </h3>
                
                <CommentListing className="mt-8" />
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold">Leave a comment</h3>
                  <form className="mt-5 space-y-5" onSubmit={handleSubmitComment}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">Name</span>
                        <Input 
                          type="text" 
                          className="mt-1" 
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">Email</span>
                        <Input 
                          type="email" 
                          className="mt-1" 
                          value={commentEmail}
                          onChange={(e) => setCommentEmail(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-neutral-800 dark:text-neutral-200">Comment</span>
                      <Textarea 
                        className="mt-1" 
                        rows={6} 
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                      />
                    </label>
                    <ButtonPrimary type="submit">Submit Comment</ButtonPrimary>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {renderSidebar()}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container pb-24 lg:pb-32">
        <div className="relative py-16">
          <BackgroundSection />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold">Other clinics you might like</h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
              Similar clinics in the same state
            </span>
            <div className="mt-10 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {LONG_COVID_CLINICS.filter(c => c.state === clinic.state && c.id !== clinic.id)
                .slice(0, 4)
                .map(item => (
                  <div key={item.id} className="relative flex flex-col">
                    <a href={`/clinic-details/${item.id}`} className="block">
                      <div className="relative w-full h-0 aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                        <Image
                          fill
                          src={item.images[0]}
                          alt={item.name}
                          className="object-cover w-full h-full"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-base font-medium">{item.name}</h3>
                        <span className="block mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                          {item.city}, {item.state}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <SectionSubscribe2 className="pt-16" />
      </div>
    </div>
  );
};

export default ClinicDetailPage; 