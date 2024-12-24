import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-6">
            Welcome to My Digital Garden
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I'm a passionate developer documenting my journey through code, sharing what I learn,
            and showcasing my projects.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-gray-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="/blog"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">Blog & Learning Journal</h2>
              <p className="text-gray-600">
                Explore my daily learnings, thoughts, and experiences in the world of development.
              </p>
            </a>
            
            <a 
              href="/projects"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">Project Portfolio</h2>
              <p className="text-gray-600">
                Check out my latest projects and see what I've been building.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}