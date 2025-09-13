

import React from 'react';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import type { Package } from '@/app/data/types'; 

interface PackageCardProps {
  pkg: Package;
  onBookNow: (packageId: string) => void;
}

export const PackageCard = ({ pkg, onBookNow }: PackageCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      <div className="relative h-52 w-full">
        <Image 
          src={pkg.imageSrc} 
          alt={pkg.name} 
          fill 
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
       
       
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{pkg.name}</h3>
          <div className="flex-shrink-0 flex items-center gap-1 text-sm font-semibold bg-gray-100 px-2 py-1 rounded-md">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-black">{pkg.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 gap-2 mt-2">
          <MapPin size={14} />
          <span>{pkg.location}</span>
        </div>
        
        <div className="mt-4">
           <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
             {pkg.category}
           </span>
        </div>
        
        <div className="flex-grow"></div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-teal-600">${pkg.price}</p>
            <p className="text-xs text-gray-500">per person</p>
          </div>
          <button 
            onClick={() => onBookNow(pkg.id)}
            className="bg-[#61a8a8] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-[#529393] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};