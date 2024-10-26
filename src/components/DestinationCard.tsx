import React from 'react';
import { Thermometer, Umbrella, DollarSign, Wifi, Heart } from 'lucide-react';

interface DestinationProps {
  name: string;
  country: string;
  imageUrl: string;
  temperature: string;
  cost: number;
  internetSpeed: string;
  description: string;
  details: {
    bestMonths: string;
    visaInfo: string;
    healthcare: string;
    activities: string[];
    rainyDays: string;
    flightFrom: {
      city: string;
      price: string;
    };
  };
  onViewDetails: () => void;
}

export default function DestinationCard({
  name,
  country,
  imageUrl,
  temperature,
  cost,
  internetSpeed,
  description,
  onViewDetails
}: DestinationProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600">{country}</p>
          </div>
          <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
            <Thermometer className="h-4 w-4 text-orange-500 mr-1" />
            <span className="text-sm text-orange-700">{temperature}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-gray-400" />
            <span className="ml-1 text-sm text-gray-600">
              {'$'.repeat(cost)}
            </span>
          </div>
          <div className="flex items-center">
            <Wifi className="h-4 w-4 text-gray-400" />
            <span className="ml-1 text-sm text-gray-600">{internetSpeed}</span>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <button 
          onClick={onViewDetails}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}