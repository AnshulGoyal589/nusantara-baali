
'use client'; 

import { useState, useEffect, useMemo } from 'react';
import HeaderAndHero from "./(components)/sections/HeaderAndHero";
import { PackageList } from "./(components)/sections/PackageList";
import { allPackages } from './data/packages';
import type { Package } from './data/types';
import type { Filters } from './(components)/ui/FilterCard';
import { format } from 'date-fns';
import { Recommendations } from './(components)/sections/Recommendations';
import Reviews from './(components)/sections/Reviews';
import { ContactModal } from './(components)/ui/ContactModal';

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    location: 'All', date: undefined, travelType: 'All', guests: 2,
  });
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(allPackages);

  // Modal state, now used for both booking and general contact
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const uniqueLocations = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.location))], []);
  const uniqueTravelTypes = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.category))], []);

  useEffect(() => { /* ... existing useEffect for hydration */ }, []);
  useEffect(() => { /* ... existing useEffect for filtering */ }, [filters]);

  const handleBookNow = async (packageId: string) => {
    // const pkg = allPackages.find(p => p.id === packageId);
    // if (!pkg) return;

    // Set the selected package and open the modal
    // setSelectedPackage(pkg);
    setIsModalOpen(true);

    // const bookingFilters = JSON.parse(localStorage.getItem('nusantara-filters') || '{}');
    // const bookingDetails = {
    //   package: pkg,
    //   searchCriteria: {
    //     ...bookingFilters,
    //     date: bookingFilters.date ? format(new Date(bookingFilters.date), 'PPP') : 'Any date',
    //   },
    //   timestamp: new Date().toISOString(),
    // };
    
    // Send email in the background
    // try {
    //   await fetch('/api/send-booking-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(bookingDetails),
    //   });
    // } catch (error) {
    //   console.error("Failed to send booking email:", error);
    // }
  };
  
  // NEW function for the "Contact Us" button
  const openContactModal = () => {
    // Set selectedPackage to null to indicate a general inquiry
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
        onContactClick={openContactModal} // Pass the new function down
      />
      <PackageList packages={filteredPackages} onBookNow={handleBookNow} />
      <Recommendations onBookNow={handleBookNow} />
      <Reviews/>

      <ContactModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        selectedPackage={selectedPackage}
      />
    </>
  );
}