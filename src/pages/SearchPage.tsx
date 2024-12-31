import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { chapters } from '../data/chapters';

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredChapters = chapters.filter(chapter => 
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chapter.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search chapters, verses, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mt-8">
          {searchQuery && (
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Search Results
            </h2>
          )}
          
          <div className="space-y-6">
            {filteredChapters.map(chapter => (
              <div
                key={chapter.id}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Chapter {chapter.id}: {chapter.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {chapter.summary}
                  </p>
                </div>
              </div>
            ))}
            
            {searchQuery && filteredChapters.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No results found for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}