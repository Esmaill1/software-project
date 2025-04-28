import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Level } from '../types';

interface LevelCardProps {
  level: Level;
}

const LevelCard: React.FC<LevelCardProps> = ({ level }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/level/${level.id}`);
  };

  // Different background colors based on level
  const getBgColor = () => {
    switch (level.id) {
      case 1:
        return 'from-emerald-500 to-teal-600';
      case 2:
        return 'from-blue-500 to-indigo-600';
      case 3:
        return 'from-violet-500 to-purple-600';
      case 4:
        return 'from-rose-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden group cursor-pointer rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getBgColor()} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>
      
      <div className="relative p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
            {level.name}
          </h2>
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 group-hover:bg-white text-gray-900 dark:text-white group-hover:text-gray-900 font-bold rounded-full transition-colors duration-300">
            {level.id}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
          {level.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {level.modules.slice(0, 3).map((module) => (
            <span 
              key={module.id}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
            >
              {module.name}
            </span>
          ))}
          {level.modules.length > 3 && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
              +{level.modules.length - 3} more
            </span>
          )}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300">
            {level.modules.length} Modules
          </span>
          <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default LevelCard;