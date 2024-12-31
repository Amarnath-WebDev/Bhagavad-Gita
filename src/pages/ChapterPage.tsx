import React from 'react';
import { useParams } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { chapter1Shlokas } from '../data/shlokas/chapter1';
import { ChapterContent } from '../components/ChapterContent';

export function ChapterPage() {
  const { id } = useParams();
  const chapter = chapters.find(c => c.id === Number(id));
  
  // In a real application, you would load shlokas dynamically based on the chapter
  const shlokas = chapter1Shlokas;

  if (!chapter) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Chapter not found
        </h1>
      </div>
    );
  }

  return <ChapterContent chapter={chapter} shlokas={shlokas} />;
}