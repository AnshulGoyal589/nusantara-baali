// app/(components)/sections/PopularDestinations.tsx
import React from 'react';
import { popularDestinationsData } from '@/app/data/destinations';
import DestinationCard from '../ui/DestinationCard';

const PopularDestinations = () => {
  // We separate the most popular destination from the rest for the layout
  const mostPopular = popularDestinationsData.find(d => d.isMostPopular);
  const otherDestinations = popularDestinationsData.filter(d => !d.isMostPopular);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="popular-destinations-title">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <p className="text-gray-500">Travel around the world!</p>
            <h2 id="popular-destinations-title" className="text-4xl font-bold text-gray-900 mt-1">
              Popular Destinations
            </h2>
          </div>
          <button className="mt-4 sm:mt-0 bg-brand-teal text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-teal-dark transition-colors duration-300">
            See more
          </button>
        </div>

        {/* This is the complex grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[520px]">
          
          {/* #1 Most Popular Card (Large) */}
          {mostPopular && (
            <div className="md:col-span-1 lg:col-span-2 h-full">
              <DestinationCard destination={mostPopular} className="h-full" />
            </div>
          )}

          {/* Other Cards Container (Right side) */}
          <div className="md:col-span-1 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            
            {/* The two stacked cards */}
            {otherDestinations.slice(0, 2).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}

            {/* The single card below them - we merge them using grid-cols-2 */}
            {otherDestinations.length > 2 && (
              <div className="sm:col-span-2 md:col-span-1">
                 <DestinationCard key={otherDestinations[2].id} destination={otherDestinations[2]} />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;