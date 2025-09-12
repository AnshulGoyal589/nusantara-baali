// app/(components)/sections/Recommendations.tsx
import React from 'react';
import { recommendationsData } from '@/app/data/recommendations';
import { RecommendationCard } from '../ui/RecommendationCard';

interface RecommendationsProps {
  onBookNow: (recommendationId: string) => void;
}

export const Recommendations = ({ onBookNow }: RecommendationsProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <p className="text-gray-500">The best recommendations for you.</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-1">
              Recommendations
            </h2>
          </div>
          <button className="mt-4 sm:mt-0 bg-teal-100 text-teal-600 font-bold py-3 px-6 rounded-full hover:bg-teal-200 transition-colors">
            See more
          </button>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendationsData.map((rec) => (
            <RecommendationCard 
              key={rec.id} 
              recommendation={rec} 
              onBookNow={onBookNow} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};