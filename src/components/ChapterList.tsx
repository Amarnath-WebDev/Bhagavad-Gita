import React from 'react';
import { chapters } from '../data/chapters';
import { ChapterCard } from './ChapterCard';

export function ChapterList() {
  const totalShlokas = chapters.reduce((total, chapter) => total + chapter.shlokas, 0);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore the Chapters
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {chapters.length} अध्याय और {totalShlokas} श्लोक
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
    </div>
  );
}