"use client";

import React from 'react';

interface GoogleMapWrapperProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  children?: React.ReactNode; // Not used with iframe approach
}

const GoogleMapWrapper: React.FC<GoogleMapWrapperProps> = ({ center, zoom }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${center.lat},${center.lng}&zoom=${zoom}`;
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default GoogleMapWrapper; 