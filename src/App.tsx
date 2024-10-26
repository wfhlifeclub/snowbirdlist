import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import DestinationCard from './components/DestinationCard';
import DetailModal from './components/DetailModal';
import { destinations } from './data/destinations';
import { MapPin } from 'lucide-react';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Filters />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Find Your Perfect Winter Escape
            </h1>
            <p className="text-xl opacity-90">
              Discover the best destinations for snowbirds with warm weather, great healthcare, and strong internet.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">25+</div>
            <div className="text-gray-600">Curated Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">60°F+</div>
            <div className="text-gray-600">Minimum Temperature</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">100k+</div>
            <div className="text-gray-600">Happy Snowbirds</div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              {...destination}
              onViewDetails={() => setSelectedDestination(destination)}
            />
          ))}
        </div>
      </div>

      <DetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
}

export default App;