
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { listings } from '@/data/listings';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';

const Listings: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter listings based on the search query
  };

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-airbnb-light py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Find your perfect place to stay</h1>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-lg">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by location or property name"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-airbnb-primary hover:bg-airbnb-secondary">
                Search
              </Button>
            </form>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Price range</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={priceRange}
                      max={300}
                      step={10}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">${priceRange[0]}</span>
                      <span className="text-sm text-gray-600">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Listings Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {filteredListings.length} {filteredListings.length === 1 ? 'place' : 'places'} to stay
                </h2>
              </div>
              
              {filteredListings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No listings found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
