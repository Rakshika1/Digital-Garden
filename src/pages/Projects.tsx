import React from 'react';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Project } from '../types/blog';

export function Projects() {
  // Example data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'Personal Blog',
      description: 'A full-stack blog built with React and Node.js',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    // Add more projects here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}