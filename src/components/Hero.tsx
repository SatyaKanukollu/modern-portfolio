import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <a 
              href="https://github.com/SatyaKanukollu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/satyavkanukollu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:kanukollu.satya@gmail.com"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
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
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://raw.githubusercontent.com/SatyaKanukollu/Portfolio/main/1234.jpg"
            alt="Professional headshot"
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}