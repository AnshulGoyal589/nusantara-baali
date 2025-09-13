
'use client'; 

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export interface Filters {
  location: string;
  date: Date | undefined;
  travelType: string;
  guests: number;
}

interface FilterCardProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  locations: string[];
  travelTypes: string[];
}

export const FilterCard = ({ filters, setFilters, locations, travelTypes }: FilterCardProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [calendarRef]);

  return (
    <div className="mt-12 p-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-5xl text-black">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          
          <div className="p-4 flex flex-col items-start text-left">
            <label className="text-sm font-semibold text-gray-700">Location</label>
            <div className="flex items-center gap-2 mt-2 w-full">
              <MapPin size={20} className="text-gray-500" />
              <select 
                value={filters.location}
                onChange={(e) => setFilters(prev => ({...prev, location: e.target.value}))}
                className="font-semibold text-gray-900 flex-grow bg-transparent border-none focus:ring-0"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </div>

          <div className="p-4 flex flex-col items-start text-left relative">
            <label className="text-sm font-semibold text-gray-700">Date</label>
            <div onClick={() => setShowCalendar(!showCalendar)} className="flex items-center gap-2 mt-2 w-full cursor-pointer">
              <Calendar size={20} className="text-gray-500" />
              <span className="font-semibold text-gray-900 flex-grow">
                {filters.date ? format(filters.date, 'LLL dd, yyyy') : 'Any date'}
              </span>
              <ChevronDown size={20} className="text-gray-500" />
            </div>
            {showCalendar && (
              <div ref={calendarRef} className="absolute top-full mt-2 z-50 bg-white rounded-lg shadow-lg">
                <DayPicker
                  mode="single"
                  selected={filters.date}
                  onSelect={(day) => {
                    setFilters(prev => ({...prev, date: day}));
                    setShowCalendar(false);
                  }}
                />
              </div>
            )}
          </div>

          <div className="p-4 flex flex-col items-start text-left">
            <label className="text-sm font-semibold text-gray-700">Travel type</label>
            <div className="flex items-center gap-2 mt-2 w-full">
              <MapPin size={20} className="text-gray-500" />
              <select 
                value={filters.travelType}
                onChange={(e) => setFilters(prev => ({...prev, travelType: e.target.value}))}
                className="font-semibold text-gray-900 flex-grow bg-transparent border-none focus:ring-0"
              >
                {travelTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          </div>

          <div className="p-4 flex flex-col items-start text-left">
            <label className="text-sm font-semibold text-gray-700">Guest</label>
            <div className="flex items-center gap-2 mt-2 w-full">
              <Users size={20} className="text-gray-500" />
              <input 
                type="number"
                min="1"
                value={filters.guests}
                onChange={(e) => setFilters(prev => ({...prev, guests: parseInt(e.target.value, 10)}))}
                className="font-semibold text-gray-900 flex-grow bg-transparent border-none focus:ring-0 w-16"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-auto p-2">
          <button className="w-full lg:w-auto bg-[#61a8a8] text-white font-bold py-3 px-12 rounded-2xl">Explore</button>
        </div>
      </div>
    </div>
  );
};