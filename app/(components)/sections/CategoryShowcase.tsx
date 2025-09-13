// app/(components)/sections/CategoryShowcase.tsx
import React from 'react';
import Link from 'next/link';
import { PackageCard } from '../ui/PackageCard'; // We'll reuse our existing card
import type { Package, PackageCategory } from '@/app/data/types';
import { categoryDetails } from '@/app/data';

interface CategoryShowcaseProps {
  category: PackageCategory;
  packages: Package[];
  onBookNow: (packageId: string) => void;
}

export const CategoryShowcase = ({ category, packages, onBookNow }: CategoryShowcaseProps) => {
  const details = categoryDetails[category];
  if (!details) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{details.title}</h2>
          <Link 
            href={`/packages/${details.slug}`}
            className="bg-teal-100 text-teal-600 font-bold py-2 px-5 rounded-full hover:bg-teal-200 transition-colors"
          >
            See more
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.slice(0, 3).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
};