import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Bookmark, ArrowLeft } from 'lucide-react';
import ModuleCard from '../components/ModuleCard';
import Breadcrumb from '../components/UI/Breadcrumb';
import SearchBar from '../components/UI/SearchBar';
import { levels } from '../data/levels';
import { Level as LevelType } from '../types';

const Level: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const [level, setLevel] = useState<LevelType | null>(null);
  const [filteredModules, setFilteredModules] = useState(level?.modules || []);
  
  useEffect(() => {
    if (!levelId) {
      navigate('/');
      return;
    }
    
    const levelData = levels.find(l => l.id === parseInt(levelId));
    
    if (!levelData) {
      navigate('/');
      return;
    }
    
    setLevel(levelData);
    setFilteredModules(levelData.modules);
    
    // Set page title
    document.title = `${levelData.name} - EduHub`;
  }, [levelId, navigate]);
  
  const handleSearch = (query: string) => {
    if (!level) return;
    
    if (!query.trim()) {
      setFilteredModules(level.modules);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filtered = level.modules.filter(module => 
      module.name.toLowerCase().includes(lowerCaseQuery) || 
      module.description.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredModules(filtered);
  };
  
  if (!level) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="animate-pulse w-full max-w-6xl">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const breadcrumbItems = [
    { label: level.name, path: `/level/${level.id}` }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {level.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {level.description}
          </p>
        </div>
        
        <div className="w-full md:w-auto">
          <SearchBar onSearch={handleSearch} placeholder="Search modules..." />
        </div>
      </div>
      
      {filteredModules.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No modules found</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We couldn't find any modules matching your search.
          </p>
          <button 
            onClick={() => setFilteredModules(level.modules)}
            className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module, index) => (
            <div 
              key={module.id}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards' 
              }}
            >
              <ModuleCard module={module} levelId={level.id} />
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all levels
        </button>
      </div>
    </div>
  );
};

export default Level;