import React from 'react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About the Bhagavad Gita</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          The Bhagavad Gita, often referred to as the Gita, is a 700-shloka Sanskrit scripture that is part of the Hindu epic Mahabharata. It is a dialogue between Prince Arjuna and Lord Krishna, who serves as his charioteer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Historical Context</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Set on the battlefield of Kurukshetra, the Gita is a dialogue that takes place just before the start of the climactic war between the Pandavas and the Kauravas. The conversation between Krishna and Arjuna covers topics ranging from dharma to the nature of reality.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Philosophical Significance</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Bhagavad Gita presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic paths to moksha. The text encompasses various philosophical systems including Vedanta, Yoga, and Samkhya.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Modern Relevance</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The teachings of the Gita remain relevant today, offering guidance on ethics, self-discovery, and spiritual growth. Its message transcends religious boundaries and speaks to universal human experiences.
        </p>
      </div>
    </div>
  );
}