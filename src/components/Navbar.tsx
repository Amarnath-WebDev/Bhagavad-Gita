import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => 
    `px-3 py-2 ${isActive(path) 
      ? 'text-indigo-600 dark:text-indigo-400 font-semibold' 
      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center text-xl font-semibold text-gray-900 dark:text-white"
            >
              <BookOpen className="h-6 w-6 mr-2" />
              <span>Bhagavad Gita</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/chapters" className={linkClass('/chapters')}>
            Adhyaay
            </Link>
            <Link to="/about" className={linkClass('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
            <Link to="/search" className={linkClass('/search')}>
              <Search className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/chapters"
              className={`block ${linkClass('/chapters')}`}
              onClick={() => setIsOpen(false)}
            >
              Chapters
            </Link>
            <Link
              to="/about"
              className={`block ${linkClass('/about')}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block ${linkClass('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/search"
              className={`block ${linkClass('/search')}`}
              onClick={() => setIsOpen(false)}
            >
              <Search className="h-5 w-5 inline mr-2" />
              Search
            </Link>
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}