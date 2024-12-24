import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types/blog';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              className="flex items-center text-gray-600 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="mr-1" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              className="flex items-center text-gray-600 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}