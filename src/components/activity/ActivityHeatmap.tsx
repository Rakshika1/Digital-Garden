import React from 'react';
import { ActivityData } from '../../types/activity';

interface ActivityHeatmapProps {
  data: ActivityData[];
}

export function ActivityHeatmap({ data }: ActivityHeatmapProps) {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364); // Last 365 days

  const getColor = (hours: number) => {
    if (hours === 0) return 'bg-gray-100';
    if (hours < 2) return 'bg-green-100';
    if (hours < 4) return 'bg-green-300';
    if (hours < 6) return 'bg-green-500';
    return 'bg-green-700';
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const getDayData = (date: Date) => {
    const dateStr = formatDate(date);
    return data.find(d => d.date === dateStr) || { date: dateStr, hours: 0, tasks: [] };
  };

  const weeks = [];
  let currentDate = new Date(startDate);

  while (currentDate <= today) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (currentDate <= today) {
        const dayData = getDayData(currentDate);
        week.push({
          date: new Date(currentDate),
          hours: dayData.hours,
          tasks: dayData.tasks
        });
      }
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }
    weeks.push(week);
  }

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`w-3 h-3 rounded-sm ${getColor(day.hours)} hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer`}
                title={`${day.date.toLocaleDateString()}: ${day.hours} hours
${day.tasks.join('\n')}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>Less</span>
          {[100, 300, 500, 700].map((intensity, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm bg-green-${intensity}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}