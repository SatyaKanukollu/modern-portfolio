import React from 'react';

interface ActionButtonsProps {
  resumeUrl: string;
}

export default function ActionButtons({ resumeUrl }: ActionButtonsProps) {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      <a 
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Contact Me
      </a>
      <a 
        href={resumeUrl}
        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
        download="SatyaKanukollu_Resume.docx"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </div>
  );
}