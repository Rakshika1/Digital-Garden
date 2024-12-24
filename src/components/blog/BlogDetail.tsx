import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogDetailProps {
  post: BlogPost;
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <time>{post.date.toLocaleDateString()}</time>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </header>

      <div className="mb-8 whitespace-pre-wrap">{post.content}</div>

      <footer className="border-t pt-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}