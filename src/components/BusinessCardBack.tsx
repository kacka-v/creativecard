import React from 'react';
import { BusinessCardProps } from '../types/businessCard';
import { Globe } from 'lucide-react';

const BusinessCardBack: React.FC<BusinessCardProps> = ({
  website,
  themeColor = 'bg-red-600',
  textColor = 'text-white',
}) => {
  return (
    <div className="w-full aspect-[1.618/1] bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-full relative">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-red-500/10 to-red-600/30 transform -rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-red-700/20 to-transparent transform rotate-12"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center p-8">
          {website && (
            <a 
              href={website.startsWith('http') ? website : `https://${website}`}
              className="group flex flex-col items-center space-y-4 text-gray-800"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className={`${themeColor} ${textColor} p-4 rounded-full transform transition-transform group-hover:scale-110`}>
                <Globe size={24} className="transition-transform group-hover:rotate-12" />
              </div>
              <span className="text-lg font-medium tracking-wide">{website}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardBack