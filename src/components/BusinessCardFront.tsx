import React from 'react';
import { BusinessCardProps } from '../types/businessCard';
import { Palette } from 'lucide-react';

const BusinessCardFront: React.FC<BusinessCardProps> = ({
  name,
  title,
  company,
  logoUrl,
  themeColor = 'bg-red-600',
  textColor = 'text-white',
}) => {
  return (
    <div className="w-full aspect-[1.618/1] bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-full">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/40 transform rotate-12"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-700/30 to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {logoUrl ? (
              <img src={logoUrl} alt={`${company} logo`} className="h-12" />
            ) : (
              <div className={`${themeColor} ${textColor} p-3 rounded-lg`}>
                <Palette className="h-6 w-6" />
              </div>
            )}
          </div>
          
          <div>
            <div className={`h-0.5 w-12 ${themeColor} mb-4`}></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-lg text-gray-700">{title}</p>
            {company && <p className="text-gray-600 mt-1">{company}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardFront