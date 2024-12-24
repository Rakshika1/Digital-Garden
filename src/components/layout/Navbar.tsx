import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PenLine } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <PenLine className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">DevBlog</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}