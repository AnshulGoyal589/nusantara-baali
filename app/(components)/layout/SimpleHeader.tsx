// app/(components)/layout/SimpleHeader.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface SimpleHeaderProps {
  onContactClick: () => void;
}

export const SimpleHeader = ({ onContactClick }: SimpleHeaderProps) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Go back to previous page"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline font-medium">Back</span>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              Nusantara Travels
            </Link>
          </div>
          
          {/* Contact Button */}
          <button 
            onClick={onContactClick} 
            className="bg-gray-800 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-gray-900 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};