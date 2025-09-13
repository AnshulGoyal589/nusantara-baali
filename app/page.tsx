
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

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    location: 'All',
    date: undefined,
    travelType: 'All',
    guests: 2,
  });
  
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(allPackages);

  
  const uniqueLocations = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.location))], []);
  const uniqueTravelTypes = useMemo(() => ['All', ...new Set(allPackages.map(pkg => pkg.category))], []);

  useEffect(() => {
    const savedFilters = localStorage.getItem('nusantara-filters');
    if (savedFilters) {
      const parsed = JSON.parse(savedFilters);
      if (parsed.date) {
        parsed.date = new Date(parsed.date);
      }
      setFilters(parsed);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('nusantara-filters', JSON.stringify(filters));

    const results = allPackages.filter(pkg => {
      const locationMatch = filters.location === 'All' || pkg.location === filters.location;
      const typeMatch = filters.travelType === 'All' || pkg.category === filters.travelType;
      return locationMatch && typeMatch;
    });
    setFilteredPackages(results);
  }, [filters]);

  const handleBookNow = (packageId: string) => {
    const selectedPackage = allPackages.find(p => p.id === packageId);
    if (!selectedPackage) return;
    const bookingFilters = JSON.parse(localStorage.getItem('nusantara-filters') || '{}');
    const bookingDetails = {
      package: selectedPackage,
      searchCriteria: {
        ...bookingFilters,
        date: bookingFilters.date ? format(new Date(bookingFilters.date), 'PPP') : 'Any date',
      },
      timestamp: new Date().toISOString(),
    };
    console.log("--- BOOKING DETAILS TO SEND TO ADMIN ---", bookingDetails);
    alert(`Booking request for ${selectedPackage.name} is ready! Check the console.`);
  };

  return (
    <>
      <HeaderAndHero 
        filters={filters} 
        setFilters={setFilters} 
        locations={uniqueLocations} 
        travelTypes={uniqueTravelTypes}
      />
      <PackageList packages={filteredPackages} onBookNow={handleBookNow} />
      <Recommendations onBookNow={handleBookNow} />
      <Reviews/>
    </>
  );
}
      

