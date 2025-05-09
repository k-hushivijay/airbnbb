
import React from 'react';
import { Star } from 'lucide-react';
import { Listing } from '@/data/listings';
import { Link } from 'react-router-dom';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link to={`/listing/${listing.id}`} className="block">
      <div className="room-card bg-white rounded-xl overflow-hidden border border-gray-200 h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src={listing.imageUrl} 
            alt={listing.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold line-clamp-1">{listing.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm">{listing.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2">{listing.location}</p>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{listing.description}</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold">
              <span className="text-lg">${listing.price}</span>
              <span className="text-sm text-gray-500"> / night</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
