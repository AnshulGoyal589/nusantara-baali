'use client'; 

import { useState, useEffect, useMemo } from 'react';
import HeaderAndHero from "./(components)/sections/HeaderAndHero";
import Reviews from './(components)/sections/Reviews';
import { ContactModal } from './(components)/ui/ContactModal';
import type { Package } from './data/types';
import type { Filters } from './(components)/ui/FilterCard';
import { CategoryShowcase } from './(components)/sections/CategoryShowcase';
import { allPackages } from './data';
import { tourPackages } from './data/tourPackages';
import { honeymoonPackages } from './data/honeymoonPackages';
import { weddingPackages } from './data/weddingPackages';
import { airTicketPackages } from './data/airTicketPackages';
import { visaPackages } from './data/visaPackages';
import { transportationPackages } from './data/transportationPackages';

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    location: 'All', date: undefined, travelType: 'All', guests: 2,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const uniqueLocations = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.location))], []);
  const uniqueTravelTypes = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.category))], []);

  useEffect(() => { /* Hydration effect */ }, []);
  // NOTE: The live filtering on the homepage is removed for now to focus on categories.
  // You could add it back by creating a "Search Results" section.

  const handleBookNow = async (packageId: string) => {
    const pkg = allPackages.find(p => p.id === packageId);
    if (!pkg) return;
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };
  
  const openContactModal = () => {
    setSelectedPackage(null); 
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeaderAndHero 
        filters={filters} 
        setFilters={setFilters} 
        locations={uniqueLocations} 
        travelTypes={uniqueTravelTypes}
        onContactClick={openContactModal}
      />
      
      <CategoryShowcase 
        category="Tour Packages"
        packages={tourPackages}
        onBookNow={handleBookNow}
      />
      <CategoryShowcase 
        category="Honeymoon Packages"
        packages={honeymoonPackages}
        onBookNow={handleBookNow}
      />
      <CategoryShowcase 
        category="Wedding Packages"
        packages={weddingPackages}
        onBookNow={handleBookNow}
      />
      <CategoryShowcase 
        category="Air Tickets"
        packages={airTicketPackages}
        onBookNow={handleBookNow}
      />
      <CategoryShowcase 
        category="Visas"
        packages={visaPackages}
        onBookNow={handleBookNow}
      />
      <CategoryShowcase
        category="Transportation"
        packages={transportationPackages}
        onBookNow={handleBookNow}
      />
            
      <Reviews/>

      <ContactModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        selectedPackage={selectedPackage}
      />
    </>
  );
}