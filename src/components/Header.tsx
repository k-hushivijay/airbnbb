
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

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
          {user ? (
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">
                {user.email}
              </div>
              <Button 
                variant="outline"
                onClick={handleAuthAction}
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="ml-2"
                onClick={() => navigate('/auth')}
              >
                Sign Up
              </Button>
              <Button 
                className="bg-airbnb-primary hover:bg-airbnb-secondary"
                onClick={() => navigate('/auth')}
              >
                Log In
              </Button>
            </>
          )}
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
          {user ? (
            <div className="mt-2">
              <div className="px-4 py-2 text-sm text-gray-600">
                {user.email}
              </div>
              <Button 
                variant="outline"
                onClick={handleAuthAction}
                className="w-full flex items-center justify-center gap-2 mt-2"
              >
                <LogOut size={16} />
                Log Out
              </Button>
            </div>
          ) : (
            <div className="mt-2 flex flex-col space-y-2">
              <Button 
                variant="outline"
                onClick={() => {
                  navigate('/auth');
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
              <Button 
                className="bg-airbnb-primary hover:bg-airbnb-secondary"
                onClick={() => {
                  navigate('/auth');
                  setIsMenuOpen(false);
                }}
              >
                Log In
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
