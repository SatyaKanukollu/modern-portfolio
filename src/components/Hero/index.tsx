import React from 'react';
import SocialLinks from './SocialLinks';
import ActionButtons from './ActionButtons';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const resumeUrl = "https://raw.githubusercontent.com/SatyaKanukollu/Portfolio/main/kanukollu_satya_Resume%20(1).docx";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Satya Kanukollu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer | Cloud Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Michigan, United States
          </p>
          <SocialLinks />
          <ActionButtons resumeUrl={resumeUrl} />
        </div>
        <ProfileImage />
      </div>
    </div>
  );
}