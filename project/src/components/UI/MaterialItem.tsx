import React from 'react';
import { FileText, Video, Link as LinkIcon, Download, ExternalLink } from 'lucide-react';
import { Material } from '../../types';

interface MaterialItemProps {
  material: Material;
}

const MaterialItem: React.FC<MaterialItemProps> = ({ material }) => {
  const getIcon = () => {
    switch (material.type) {
      case 'pdf':
      case 'doc':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'ppt':
        return <FileText className="h-5 w-5 text-orange-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      case 'link':
      default:
        return <LinkIcon className="h-5 w-5 text-purple-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-gray-900 dark:text-white truncate">
            {material.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {material.description}
          </p>
          <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>Added: {formatDate(material.dateAdded)}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{material.type}</span>
          </div>
        </div>
        <div className="flex-shrink-0 flex space-x-2">
          <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Open link"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={material.url}
            download
            className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Download"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaterialItem;