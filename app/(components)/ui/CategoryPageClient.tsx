// app/(components)/ui/CategoryPageClient.tsx
'use client';

import { useState } from 'react';
import type { Package } from '@/app/data/types';
import { allPackages } from '@/app/data';
import { ContactModal } from './ContactModal';
import { PackageCard } from './PackageCard';
import { SimpleHeader } from '../layout/SimpleHeader'; // <-- IMPORT THE NEW HEADER

interface CategoryPageClientProps {
  title: string;
  packages: Package[];
}

export const CategoryPageClient = ({ title, packages }: CategoryPageClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleBookNow = async (packageId: string) => {
    const pkg = allPackages.find(p => p.id === packageId);
    if (!pkg) return;
    setSelectedPackage(pkg);
    setIsModalOpen(true);

    // const bookingDetails = { package: pkg, timestamp: new Date().toISOString() };
    
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

  const openContactModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SimpleHeader onContactClick={openContactModal} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-10 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
            <p className="mt-4 text-base text-gray-500">
              Discover the perfect package for your needs.
            </p>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {packages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} onBookNow={handleBookNow} />
            ))}
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedPackage={selectedPackage}
      />
    </>
  );
};