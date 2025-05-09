
import React from 'react';
import { listings } from '@/data/listings';
import ListingCard from './ListingCard';

const FeaturedListings: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Places to Stay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.slice(0, 6).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
