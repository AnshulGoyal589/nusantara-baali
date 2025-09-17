
'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FilterCard, Filters } from '../ui/FilterCard';
import Image from 'next/image';

interface HeaderAndHeroProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  locations: string[];
  travelTypes: string[];
  onContactClick: () => void; // NEW: Add a prop for the contact click
}

const HeaderAndHero = ({ filters, setFilters, locations, travelTypes, onContactClick }: HeaderAndHeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // ... (no changes to useEffect)
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; 
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Destination', href: '/' },
    { name: 'Contact', href: '/' },
  ];

  const handleContactAndCloseMenu = () => {
    onContactClick();
    setIsMenuOpen(false);
  };

  return (
    <section 
      className="relative flex items-center justify-center w-full h-screen min-h-[700px] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? 'bg-black/30 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold my-4">
              <Image src="/images/logo.png" alt="Travel Agency Logo" width={150} height={100} />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="font-medium hover:text-gray-300 transition-colors">{link.name}</Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              
              <button 
                onClick={onContactClick} 
                className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-[#111827]/95 backdrop-blur-lg">
          <div className="pt-5 pb-6 px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-xl font-medium text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/20">
              
              <button
                onClick={handleContactAndCloseMenu}
                className="block w-full text-center bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative z-20 flex flex-col items-center w-full px-4 text-center">
        <h1 id="hero-title" className="text-5xl font-bold sm:text-6xl md:text-8xl mt-20 md:mt-0 tracking-tight">
          Let&apos;s Travel<br />the World!
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">
          Embark on Unforgettable Journeys. Explore, Experience, and Embrace the World with Us!
        </p>
        
        <FilterCard 
          filters={filters} 
          setFilters={setFilters} 
          locations={locations} 
          travelTypes={travelTypes} 
        />
      </div>
    </section>
  );
};

export default HeaderAndHero;