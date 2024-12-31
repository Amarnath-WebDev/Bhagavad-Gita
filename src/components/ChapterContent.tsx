import React from 'react';
import { ShlokaCard } from './ShlokaCard';
import { type Chapter } from '../types/chapter';
import { type Shloka } from '../types/shloka';

interface ChapterContentProps {
  chapter: Chapter;
  shlokas: Shloka[];
}

export function ChapterContent({ chapter, shlokas }: ChapterContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Chapter {chapter.id}: {chapter.title}
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4 sanskrit">
          {chapter.sanskrit_title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{chapter.summary}</p>
      </div>

      <div className="space-y-8">
        {shlokas.map((shloka) => (
          <ShlokaCard key={`${shloka.chapter}-${shloka.shloka}`} shloka={shloka} />
        ))}
      </div>
    </div>
  );
}