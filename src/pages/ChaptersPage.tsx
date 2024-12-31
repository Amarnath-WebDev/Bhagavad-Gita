import React from 'react';
import { ChapterList } from '../components/ChapterList';

export function ChaptersPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bhagavad Gita Chapters
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore the divine wisdom across 18 chapters
          </p>
        </div>
        <ChapterList />
      </div>
    </div>
  );
}