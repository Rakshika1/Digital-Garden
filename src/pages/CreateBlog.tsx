import React from 'react';
import { BlogForm } from '../components/blog/BlogForm';
import { BlogFormData } from '../types/blog';

export function CreateBlog() {
  const handleCreatePost = (data: BlogFormData) => {
    // Here you would typically save the post to your backend
    console.log('New post:', data);
    // Redirect to the blog list after creation
    window.location.href = '/blog';
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <BlogForm onSubmit={handleCreatePost} />
      </div>
    </div>
  );
}