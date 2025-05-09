
import React from 'react';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-airbnb-light to-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Find your next perfect stay
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover amazing places to stay around the world at unbeatable prices
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-white">Learn How to Host</Button>
            <Button className="bg-airbnb-primary hover:bg-airbnb-secondary">
              <Link to="/listings">Explore Listings</Link>
            </Button>
          </div>
        </div>
        
        <SearchBar />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            More than <span className="font-semibold">1,000,000</span> guests have found their perfect stay with us
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </div>
  );
};

export default HeroSection;
