
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon, Search, Users } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, date, guests });
    // In a real app, this would filter listings or navigate to search results
  };

  return (
    <div className="search-container bg-white rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="location"
              placeholder="Where are you going?"
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Check in
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex-1">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="guests"
              placeholder="How many guests?"
              className="pl-10"
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-end">
          <Button type="submit" className="w-full md:w-auto bg-airbnb-primary hover:bg-airbnb-secondary">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
