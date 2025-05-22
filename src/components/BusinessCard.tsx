import React, { useState } from 'react';
import { BusinessCardProps } from '../types/businessCard';
import BusinessCardFront from './BusinessCardFront';
import BusinessCardBack from './BusinessCardBack';

const BusinessCard: React.FC<BusinessCardProps> = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full max-w-md cursor-pointer" onClick={handleFlip}>
      <div 
        className={`relative transition-transform duration-700 transform-style-3d w-full ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="absolute w-full backface-visibility-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <BusinessCardFront {...props} />
        </div>
        <div 
          className="absolute w-full backface-visibility-hidden rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <BusinessCardBack {...props} />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;