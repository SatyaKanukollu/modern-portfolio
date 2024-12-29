import React from 'react';

export default function ProfileImage() {
  return (
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
      <div className="relative group">
        {/* Outer circle with gradient border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
        
        {/* Profile image container */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20">
          <img 
            src="https://raw.githubusercontent.com/SatyaKanukollu/Portfolio/main/cropped-1234.jpg"
            alt="Satya Kanukollu"
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = "https://raw.githubusercontent.com/SatyaKanukollu/Portfolio/main/1234.jpg";
            }}
          />
        </div>
      </div>
    </div>
  );
}