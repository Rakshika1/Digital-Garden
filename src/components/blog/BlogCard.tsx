import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Calendar size={16} />
          <time>{post.date.toLocaleDateString()}</time>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            {post.category}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center text-sm text-gray-600">
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}