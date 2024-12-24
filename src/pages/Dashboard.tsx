import React from 'react';
import { ActivityHeatmap } from '../components/activity/ActivityHeatmap';
import { AIChat } from '../components/chat/AIChat';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Dashboard() {
  // Example activity data
  const activityData = [
    { date: '2024-03-10', hours: 6, tasks: ['Blog writing', 'Code review'] },
    { date: '2024-03-11', hours: 4, tasks: ['Feature development'] },
    // Add more data as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="px-6 pb-6">
              <div className="relative">
                <img
                  src="dist/ridhuu.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white absolute bottom-2 left-2 right-"
                />
              </div>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900">Rakshika Sharma</h2>
                <p className="text-gray-600"> Developer</p>
                
                <div className="mt-4 flex space-x-4">
                  <a href="https://github.com/Rakshika1" className="text-gray-600 hover:text-blue-600">
                    <Github size={20} />
                  </a>
                  <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/rakshikasharma/" className="text-gray-600 hover:text-blue-600">
                    <Linkedin size={20} />
                  </a>
                  <a href="rakshika2580@gmail.com" className="text-gray-600 hover:text-blue-600">
                    <Mail size={20} />
                  </a>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                  <div className="mt-2 space-y-2">
                    {activityData[0]?.tasks.map((task, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
            <ActivityHeatmap data={activityData} />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <AIChat />
          </div>
        </div>
      </div>
    </div>
  );
}