import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, BookOpen } from 'lucide-react';
import Breadcrumb from '../components/UI/Breadcrumb';
import MaterialItem from '../components/UI/MaterialItem';
import { levels } from '../data/levels';
import { Level, Module as ModuleType } from '../types';

const Module: React.FC = () => {
  const { levelId, moduleId } = useParams<{ levelId: string; moduleId: string }>();
  const navigate = useNavigate();
  const [level, setLevel] = useState<Level | null>(null);
  const [module, setModule] = useState<ModuleType | null>(null);
  
  useEffect(() => {
    if (!levelId || !moduleId) {
      navigate('/');
      return;
    }
    
    const levelData = levels.find(l => l.id === parseInt(levelId));
    
    if (!levelData) {
      navigate('/');
      return;
    }
    
    const moduleData = levelData.modules.find(m => m.id === moduleId);
    
    if (!moduleData) {
      navigate(`/level/${levelId}`);
      return;
    }
    
    setLevel(levelData);
    setModule(moduleData);
    
    // Set page title
    document.title = `${moduleData.name} - ${levelData.name} - EduHub`;
  }, [levelId, moduleId, navigate]);
  
  if (!level || !module) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-10"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-24"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const breadcrumbItems = [
    { label: level.name, path: `/level/${level.id}` },
    { label: module.name, path: `/level/${level.id}/module/${module.id}` }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64">
            <img 
              src={module.imageUrl} 
              alt={module.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 to-transparent">
              <h1 className="text-3xl font-bold mb-2">{module.name}</h1>
              <p className="text-blue-100">{module.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
          Materials
          <span className="ml-3 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-full">
            {module.materials.length} items
          </span>
        </h2>
      </div>
      
      {module.materials.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No materials available</h3>
          <p className="text-gray-600 dark:text-gray-300">
            There are currently no materials available for this module.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {module.materials.map((material, index) => (
            <div 
              key={material.id}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards' 
              }}
            >
              <MaterialItem material={material} />
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate(`/level/${level.id}`)}
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {level.name}
        </button>
      </div>
    </div>
  );
};

export default Module;