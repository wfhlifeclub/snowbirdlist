import React from 'react';
import { Thermometer, Umbrella, DollarSign, Wifi } from 'lucide-react';

export default function Filters() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500">
            <option>Temperature (°F)</option>
            <option>60-70°F</option>
            <option>70-80°F</option>
            <option>80-90°F</option>
          </select>
          
          <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500">
            <option>Cost of Living</option>
            <option>$: Budget</option>
            <option>$$: Moderate</option>
            <option>$$$: Expensive</option>
          </select>
          
          <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500">
            <option>Internet Speed</option>
            <option>10+ Mbps</option>
            <option>25+ Mbps</option>
            <option>50+ Mbps</option>
          </select>
          
          <select className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500">
            <option>Healthcare Quality</option>
            <option>Basic</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
      </div>
    </div>
  );
}