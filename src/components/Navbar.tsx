import React from 'react';
import { Sun, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">SnowbirdList</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}