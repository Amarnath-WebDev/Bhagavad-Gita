import React from 'react';
import { type Verse } from '../types/verse';
import { AudioPlayer } from './AudioPlayer';

interface VerseCardProps {
  verse: Verse;
}

export function VerseCard({ verse }: VerseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Verse {verse.chapter}.{verse.verse}
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-xl sanskrit mb-2 text-gray-800 dark:text-gray-200">
            {verse.sanskrit}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            {verse.transliteration}
          </p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Hindi</h4>
          <p className="text-gray-700 dark:text-gray-300">{verse.hindi}</p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">English</h4>
          <p className="text-gray-700 dark:text-gray-300">{verse.english}</p>
        </div>
        
        {verse.audio_url && (
          <div className="border-t pt-4">
            <AudioPlayer 
              url={verse.audio_url} 
              verseId={`${verse.chapter}-${verse.verse}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}