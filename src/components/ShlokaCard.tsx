import React from 'react';
import { type Shloka } from '../types/shloka';
import { AudioPlayer } from './AudioPlayer';

interface ShlokaCardProps {
  shloka: Shloka;
}

export function ShlokaCard({ shloka }: ShlokaCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Shloka {shloka.chapter}.{shloka.shloka}
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-xl sanskrit mb-2 text-gray-800 dark:text-gray-200">
            {shloka.sanskrit}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            {shloka.transliteration}
          </p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Hindi</h4>
          <p className="text-gray-700 dark:text-gray-300">{shloka.hindi}</p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">English</h4>
          <p className="text-gray-700 dark:text-gray-300">{shloka.english}</p>
        </div>
        
        {shloka.audio_url && (
          <div className="border-t pt-4">
            <AudioPlayer 
              url={shloka.audio_url} 
              shlokaId={`${shloka.chapter}-${shloka.shloka}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}