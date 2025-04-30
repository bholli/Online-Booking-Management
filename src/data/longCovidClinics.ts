export interface LongCovidClinic {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
  phone: string;
  website: string;
  description: string;
  featured: boolean;
  verified: boolean;
  images: string[];
  lat?: number;
  lng?: number;
  treatmentTypes: string[];
  image?: string;
}

// Sample data converted from your Google Sheet
export const LONG_COVID_CLINICS: LongCovidClinic[] = [
  {
    id: "1",
    name: "University of Alabama at Birmingham COVID Respiratory Clinic",
    address: "1720 2nd Ave South",
    city: "Birmingham",
    state: "AL",
    zipCode: "35294",
    fullAddress: "1720 2nd Ave South Birmingham, AL 35294",
    phone: "(205) 975-1881",
    website: "http://www.uabmedicine.org/coronavirus",
    description: "The UAB COVID Respiratory Clinic specializes in treating patients with respiratory symptoms related to COVID-19, including long COVID.",
    featured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1631217868264-e6036a81fcc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
    ],
    lat: 33.5207,
    lng: -86.8025,
    treatmentTypes: ["Rehabilitation Services", "Specialized Procedures", "Research & Clinical"],
    image: "/images/clinics/uab.jpg"
  },
  {
    id: "2",
    name: "Dignity Health COVID-19 and Chronic Illness Recovery Program",
    address: "1391 E Highland Ave.",
    city: "Selma",
    state: "AL",
    zipCode: "36703",
    fullAddress: "1391 E Highland Ave. Selma, AL 36703",
    phone: "(334) 875-6110",
    website: "https://www.dignityhealthpt.com/our-services/recovery-and-reconditioning/",
    description: "Our Recovery and Reconditioning program helps patients return to activity after COVID-19 and other chronic illnesses.",
    featured: false,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    ],
    lat: 32.4072,
    lng: -87.0211,
    treatmentTypes: ["Rehabilitation Services", "Mental Health Support", "Medication Management", "Research & Clinical"],
    image: "/images/clinics/dignity-health.jpg"
  },
  {
    id: "3",
    name: "University of Alabama at Birmingham COVID Respiratory Clinic",
    address: "1720 2nd Ave South",
    city: "Birmingham",
    state: "AL",
    zipCode: "35294",
    fullAddress: "1720 2nd Ave South Birmingham, AL 35294",
    phone: "(205) 975-1881",
    website: "http://www.uabmedicine.org/coronavirus",
    description: "A specialized clinic for long COVID patients offering comprehensive care and rehabilitation services.",
    featured: false,
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    lat: 32.9646,
    lng: -86.7561,
    treatmentTypes: [],
    image: "/images/clinics/default.jpg"
  },
  {
    id: "4",
    name: "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning Program",
    address: "1391 E Highland Ave.",
    city: "Selma",
    state: "AL",
    zipCode: "36703",
    fullAddress: "1391 E Highland Ave. Selma, AL 36703",
    phone: "(334) 875-6110",
    website: "https://www.dignityhealthpt.com/our-services/recovery-and-reconditioning/",
    description: "A specialized clinic for long COVID patients offering comprehensive care and rehabilitation services.",
    featured: false,
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    lat: 32.9126,
    lng: -86.8548,
    treatmentTypes: [],
    image: "/images/clinics/default.jpg"
  },
  {
    id: "5",
    name: "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning Program",
    address: "1824 Glynwood Dr",
    city: "Prattville",
    state: "AL",
    zipCode: "36066",
    fullAddress: "1824 Glynwood Dr, Prattville, AL 36066",
    phone: "(334) 361-4711",
    website: "https://www.dignityhealthpt.com/our-services/recovery-and-reconditioning/",
    description: "A specialized clinic for long COVID patients offering comprehensive care and rehabilitation services.",
    featured: false,
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    lat: 32.9412,
    lng: -86.8676,
    treatmentTypes: [],
    image: "/images/clinics/default.jpg"
  },
  {
    id: "6",
    name: "Results Physiotherapy Post-Covid Rehabilitation",
    address: "4601 Whitesburg Dr",
    city: "Huntsville",
    state: "AL",
    zipCode: "35802",
    fullAddress: "4601 Whitesburg Dr, Huntsville, AL 35802",
    phone: "(256) 883-1734",
    website: "https://www.resultspt.com/post-covid-treatment",
    description: "A specialized clinic for long COVID patients offering comprehensive care and rehabilitation services.",
    featured: false,
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    lat: 32.7214,
    lng: -86.5354,
    treatmentTypes: [],
    image: "/images/clinics/default.jpg"
  },
  {
    id: "7",
    name: "Results Physiotherapy Post-Covid Rehabilitation",
    address: "5285 US-280",
    city: "Birmingham",
    state: "AL",
    zipCode: "35242",
    fullAddress: "5285 US-280 Birmingham, AL 35242",
    phone: "(205) 607-0903",
    website: "https://www.resultspt.com/post-covid-treatment",
    description: "A specialized clinic for long COVID patients offering comprehensive care and rehabilitation services.",
    featured: false,
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    lat: 32.7551,
    lng: -86.5329,
    treatmentTypes: [],
    image: "/images/clinics/default.jpg"
  },
  // Add more clinics from your data...
]; 