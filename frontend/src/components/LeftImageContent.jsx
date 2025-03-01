import React from 'react';

const LeftImageRightContent = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row-reverse justify-between p-8 bg-white">
      {/* Text Content Section */}
      <div className="flex-1 mb-8 md:mb-0 md:ml-8 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">{description}</p>
      </div>

      {/* Image Section */}
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

export default LeftImageRightContent;
