// app/(components)/ui/BookNowHandler.tsx
'use client';

import { useState } from 'react';
import type { Package } from '@/app/data/types';
import { allPackages } from '@/app/data';
import { ContactModal } from './ContactModal'; // Your existing modal
// import { format } from 'date-fns';

interface BookNowHandlerProps {
  children: (handleBookNow: (packageId: string) => void) => React.ReactNode;
}

export const BookNowHandler = ({ children }: BookNowHandlerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleBookNow = async (packageId: string) => {
    const pkg = allPackages.find(p => p.id === packageId);
    // if (!pkg) return;
    console.log("Book Now clicked for package ID:", packageId);
    setSelectedPackage(pkg ?? null);
    setIsModalOpen(true);

    // const bookingDetails = { package: pkg, timestamp: new Date().toISOString() };
    
    // You can still send the email, but without filter context
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

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {children(handleBookNow)}
      <ContactModal 
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedPackage={selectedPackage}
      />
    </>
  );
};