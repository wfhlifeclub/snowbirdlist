import React from 'react';
import { X, Thermometer, DollarSign, Wifi, Heart, Globe, Building, Stethoscope, UmbrellaOff, Plane } from 'lucide-react';

interface DetailModalProps {
  destination: {
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
  } | null;
  onClose: () => void;
}

export default function DetailModal({ destination, onClose }: DetailModalProps) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative h-72">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{destination.name}</h2>
              <p className="text-xl text-gray-600">{destination.country}</p>
            </div>
            <button className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition-colors">
              <Heart className="h-6 w-6 text-orange-500" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Temperature: {destination.temperature}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Cost of Living: {'$'.repeat(destination.cost)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Internet: {destination.internetSpeed}</span>
              </div>
              <div className="flex items-center space-x-2">
                <UmbrellaOff className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Rainy Days: {destination.details.rainyDays}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Best Months: {destination.details.bestMonths}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Visa: {destination.details.visaInfo}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Healthcare: {destination.details.healthcare}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Flights from {destination.details.flightFrom.city}: {destination.details.flightFrom.price}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600 leading-relaxed">{destination.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Popular Activities</h3>
            <div className="flex flex-wrap gap-2">
              {destination.details.activities.map((activity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}