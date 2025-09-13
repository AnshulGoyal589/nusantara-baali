
import React from 'react';
import { PackageCard } from '../ui/PackageCard';
import type { Package } from '@/app/data/types';
import { SearchX } from 'lucide-react';

interface PackageListProps {
  packages: Package[];
  onBookNow: (packageId: string) => void;
}

export const PackageList = ({ packages, onBookNow }: PackageListProps) => {
  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Available Packages
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Based on your search criteria.
          </p>
        </div>
        
        {packages.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onBookNow={onBookNow} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100">
              <SearchX className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">No Packages Found</h3>
            <p className="mt-2 text-gray-500">
              Please try adjusting your filters to find more travel options.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};