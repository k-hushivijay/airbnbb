import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getListingById } from '@/data/listings';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, MapPin, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatPriceInINR } from '@/utils/currency';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = id ? getListingById(id) : undefined;
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState<number>(1);
  const { toast } = useToast();
  
  if (!listing) {
    return <Navigate to="/listings" />;
  }
  
  // In a real app, these would be calculated based on actual data
  const cleaningFee = Math.round(listing.price * 0.15);
  const serviceFee = Math.round(listing.price * 0.12);
  const nights = checkInDate && checkOutDate 
    ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    : 1;
  
  const totalPrice = (listing.price * nights) + cleaningFee + serviceFee;
  
  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Please select dates",
        description: "You must select check-in and check-out dates to book.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would submit the booking data to the backend
    toast({
      title: "Booking successful!",
      description: `Your stay at ${listing.title} has been booked.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{listing.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span>{listing.rating}</span>
              <span className="mx-1">·</span>
              <span>{listing.reviews} reviews</span>
            </div>
            <span className="mx-1">·</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{listing.location}</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-8 h-96 md:h-[500px]">
          <img 
            src={listing.imageUrl} 
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-airbnb-primary text-white flex items-center justify-center mr-4">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Hosted by {listing.hostName}</h2>
                  <p className="text-gray-600">Superhost</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-gray-700 whitespace-pre-line">{listing.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M12 4a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span>Wifi</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>TV</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span>Air conditioning</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Free parking</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 border rounded-xl shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  <span className="text-2xl">{formatPriceInINR(listing.price)}</span>
                  <span className="text-gray-600"> / night</span>
                </h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>{listing.rating}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="space-y-1">
                      <Label htmlFor="check-in">Check in</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-in"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left",
                              !checkInDate && "text-muted-foreground"
                            )}
                          >
                            {checkInDate ? format(checkInDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={setCheckInDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="check-out">Check out</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="check-out"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left",
                              !checkOutDate && "text-muted-foreground"
                            )}
                          >
                            {checkOutDate ? format(checkOutDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={setCheckOutDate}
                            initialFocus
                            disabled={(date) => (checkInDate && date <= checkInDate) || date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="guests">Guests</Label>
                    <Input 
                      id="guests" 
                      type="number" 
                      min={1}
                      value={guests} 
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-airbnb-primary hover:bg-airbnb-secondary mb-4"
                onClick={handleBooking}
              >
                Book Now
              </Button>
              
              <div className="text-sm text-gray-500 mb-4 text-center">You won't be charged yet</div>
              
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span>{formatPriceInINR(listing.price)} x {nights} {nights === 1 ? 'night' : 'nights'}</span>
                  <span>{formatPriceInINR(listing.price * nights)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>{formatPriceInINR(cleaningFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>{formatPriceInINR(serviceFee)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-3 border-t">
                  <span>Total</span>
                  <span>{formatPriceInINR(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListingDetail;
