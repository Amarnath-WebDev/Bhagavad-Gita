import React from 'react';
import { Link } from 'react-router-dom';
import type { Chapter } from '../types/chapter';

interface ChapterCardProps {
  chapter: Chapter;
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <Link to={`/chapter/${chapter.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
        <img
          src={chapter.image_url}
          alt={chapter.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{chapter.title}</h3>
          <p className="mt-1 text-sm sanskrit">{chapter.sanskrit_title}</p>
          <p className="mt-2 text-sm text-gray-200">{chapter.shlokas} shlokas</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        {chapter.summary}
      </p>
    </Link>
  );
}