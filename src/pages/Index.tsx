
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedListings />
        
        <section className="py-16 bg-airbnb-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose StayScape?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Easy to Search</h3>
                    <p className="text-gray-600">Find your ideal stay quickly with our powerful search features.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                    <p className="text-gray-600">Book with confidence using our secure payment system.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                    <p className="text-gray-600">All our properties are verified to ensure quality and accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-airbnb-primary bg-opacity-10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Host</h2>
                  <p className="text-gray-700 mb-6">
                    Have a spare room or property? Start earning extra income by hosting on StayScape.
                    It's easy to get started, and we provide support every step of the way.
                  </p>
                  <Button className="bg-airbnb-primary hover:bg-airbnb-secondary">
                    Learn More
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                    alt="Become a host" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
