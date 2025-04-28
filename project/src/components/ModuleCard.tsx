import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  levelId: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, levelId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/level/${levelId}/module/${module.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col h-full overflow-hidden group cursor-pointer rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={module.imageUrl} 
          alt={module.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="flex-1 p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {module.name}
        </h3>
        
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {module.description}
        </p>
        
        <div className="mt-4 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <FileText className="w-4 h-4" />
          <span>{module.materials.length} Materials</span>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center mt-auto">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
          View Materials
        </span>
        <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default ModuleCard;