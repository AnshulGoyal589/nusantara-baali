// app/(components)/ui/DestinationCard.tsx
import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { Destination } from '@/app/data/destinations';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const DestinationCard = ({ destination, className = '' }: DestinationCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg group ${className}`}>
      <Image
        src={destination.imageSrc}
        alt={`View of ${destination.name}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Most Popular Banner */}
      {destination.isMostPopular && (
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">
          #1 Most Popular
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full text-white">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-bold">{destination.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={16} />
              <p className="text-sm">{destination.location}</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">${destination.price}</p>
            <p className="text-sm text-right text-gray-300">/person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;