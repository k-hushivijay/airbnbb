
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-airbnb-primary">
          <Home className="h-6 w-6" />
          <span>Airbnb</span>
        </Link>

        {/* Navigation for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-airbnb-primary">
            Home
          </Link>
          <Link to="/listings" className="text-gray-600 hover:text-airbnb-primary">
            Listings
          </Link>
          <Button variant="outline" className="ml-2">
            Sign Up
          </Button>
          <Button className="bg-airbnb-primary hover:bg-airbnb-secondary">
            Log In
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md animate-fade-in">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/listings"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Listings
          </Link>
          <div className="mt-2 flex flex-col space-y-2">
            <Button variant="outline">Sign Up</Button>
            <Button className="bg-airbnb-primary hover:bg-airbnb-secondary">
              Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
