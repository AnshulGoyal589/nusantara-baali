// app/page.tsx
'use client'; 

import { useState, useEffect, useMemo } from 'react';
import HeaderAndHero from "./(components)/sections/HeaderAndHero";
import { PackageList } from "./(components)/sections/PackageList";
import { Recommendations } from './(components)/sections/Recommendations';
import Reviews from './(components)/sections/Reviews';
import { ContactModal } from './(components)/ui/ContactModal';
import { allPackages } from './data/packages';
import type { Package } from './data/types';
import type { Filters } from './(components)/ui/FilterCard';
// import { format } from 'date-fns';

export default function Home() {
  // State for the filters controlled by the FilterCard
  const [filters, setFilters] = useState<Filters>({
    location: 'All',
    date: undefined,
    travelType: 'All',
    guests: 2,
  });
  
  // State for the list of packages displayed on the page
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(allPackages);

  // State to control the contact/booking modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // Memoized values to prevent re-calculating on every render
  const uniqueLocations = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.location))], []);
  const uniqueTravelTypes = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.category))], []);

  // Effect to hydrate filter state from localStorage on initial client render
  useEffect(() => {
    const savedFilters = localStorage.getItem('nusantara-filters');
    if (savedFilters) {
      const parsed = JSON.parse(savedFilters);
      if (parsed.date) {
        parsed.date = new Date(parsed.date);
      }
      setFilters(parsed);
    }
  }, []); // Runs only once on mount

  // Effect to update filtered packages and save to localStorage whenever filters change
  useEffect(() => {
    localStorage.setItem('nusantara-filters', JSON.stringify(filters));

    const results = allPackages.filter(pkg => {
      const locationMatch = filters.location === 'All' || pkg.location === filters.location;
      const typeMatch = filters.travelType === 'All' || pkg.category === filters.travelType;
      // Add more complex date/guest logic here in the future if needed
      return locationMatch && typeMatch;
    });
    setFilteredPackages(results);
  }, [filters]);

  /**
   * Handles the "Book Now" click from a package card.
   * It sets the specific package and opens the modal for a booking inquiry.
   */
  const handleBookNow = async (packageId: string) => {
    // const pkg = allPackages.find(p => p.id === packageId);
    // if (!pkg) return;
    console.log("Book Now clicked for package ID:", packageId);

    // // Set the state to show the modal with booking-specific info
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
    
    // Send the booking email in the background
    // try {
    //   await fetch('/api/send-booking-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(bookingDetails),
    //   });
    // } catch (error) {
    //   console.error("Failed to send booking email in the background:", error);
    // }
  };
  
  /**
   * Handles the "Contact Us" click from the header.
   * It opens the modal for a general inquiry (no specific package).
   */
  const openContactModal = () => {
    // Set selectedPackage to null to tell the modal it's a general inquiry
    setSelectedPackage(null); 
    setIsModalOpen(true);
  };

  /**
   * Closes the modal.
   */
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeaderAndHero 
        filters={filters} 
        setFilters={setFilters} 
        locations={uniqueLocations} 
        travelTypes={uniqueTravelTypes}
        onContactClick={openContactModal} // Pass the contact handler to the header
      />
      
      {/* The list of packages that updates based on the filters */}
      <PackageList packages={filteredPackages} onBookNow={handleBookNow} />
      
      {/* The static recommendations section */}
      <Recommendations onBookNow={handleBookNow} />
      
      {/* The reviews slider */}
      <Reviews/>

      {/* The single, reusable modal component, controlled by this page */}
      <ContactModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        selectedPackage={selectedPackage}
      />
    </>
  );
}