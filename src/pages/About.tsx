import React from 'react';
import { Book, Code, Coffee } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Hi! I'm a passionate developer who loves to learn and build things.
            This space serves as my digital garden where I document my journey,
            share my learnings, and showcase my projects.
          </p>              

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="text-center">
              <Book className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Always Learning</h3>
              <p className="text-gray-600">Constantly exploring new technologies and best practices</p>
            </div>
            
            <div className="text-center">
              <Code className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Building</h3>
              <p className="text-gray-600">Creating projects that solve real problems</p>
            </div>
            
            <div className="text-center">
              <Coffee className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Sharing</h3>
              <p className="text-gray-600">Documenting my journey to help others learn</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 mb-6">
            [Just Do My own Job Yoo! Radhe Radhe 
            Hare Krishna!]          </p>
          
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map(skill => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}