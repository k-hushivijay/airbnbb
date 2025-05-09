
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-airbnb-primary text-7xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <p className="text-gray-600 mb-8">
            We can't seem to find the page you're looking for. Please check the URL or go back to the home page.
          </p>
          <Button className="bg-airbnb-primary hover:bg-airbnb-secondary">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
