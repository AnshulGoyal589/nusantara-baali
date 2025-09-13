
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Recommendation } from '@/app/data/recommendations';

interface RecommendationCardProps {
  recommendation: Recommendation;
  onBookNow: (recommendationId: string) => void;
}

export const RecommendationCard = ({ recommendation, onBookNow }: RecommendationCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
     
      <div className="relative h-48 w-full">
        <Image
          src={recommendation.imageSrc}
          alt={`View of ${recommendation.name}`}
          fill
          className="object-cover rounded-t-2xl"
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          {recommendation.tags.map(tag => (
            <p key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold py-1 px-3 rounded-full">
              {tag}
            </p>
          ))}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">{recommendation.name}</h3>
          <div className="flex items-center gap-1.5 font-semibold text-gray-800">
            <Star size={20} className="text-orange-400 fill-current" />
            <span>{recommendation.rating.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-red-300 border-2 border-white"></div>
            <div className="w-5 h-5 rounded-full bg-blue-300 border-2 border-white"></div>
            <div className="w-5 h-5 rounded-full bg-green-300 border-2 border-white"></div>
          </div>
          <p className="text-sm text-gray-500">+{recommendation.reviews} Reviews</p>
        </div>

      
        <p className="text-gray-600 text-sm mt-3 flex-grow">
          {recommendation.description}
        </p>
        
      
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <p className="text-2xl font-bold text-gray-900">${recommendation.price}</p>
          <button 
            onClick={() => onBookNow(recommendation.id)}
            className="bg-[#61a8a8] text-white font-bold py-2 px-6 rounded-full hover:bg-[#529393] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};