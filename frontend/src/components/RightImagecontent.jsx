import React from 'react';

const RightImageContent = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-8 bg-gray-100">
      <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">{description}</p>
      </div>
      <div className="flex-1">
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default RightImageContent;
