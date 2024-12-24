import React from 'react';
import { Plus } from 'lucide-react';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogPost } from '../types/blog';

export function Blog() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Learning React Hooks',
      content: 'Today I learned about useState and useEffect hooks in React...',
      excerpt: 'Exploring React Hooks and their practical applications',
      date: new Date('2024-03-10'),
      category: 'learning',
      tags: ['React', 'Hooks', 'Frontend'],
      slug: 'learning-react-hooks'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog & Learning Journal</h1>
        <a
          href="/blog/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus size={20} className="mr-2" />
          New Post
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}