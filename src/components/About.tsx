import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
          <p className="text-gray-300 mb-4">
            Over 7+ years of experience as a Full Stack Developer specializing in Java/J2EE Technologies. 
            Expert in Spring Boot, Microservices, and Cloud Technologies (AWS, GCP).
          </p>
          <p className="text-gray-300 mb-4">
            Strong background in developing cloud-native applications and implementing Agile methodologies, 
            resulting in improved delivery timelines and stakeholder satisfaction.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Key Highlights:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Full Stack Development with Java, Spring Boot, and Modern JavaScript Frameworks</li>
              <li>Cloud Architecture and Implementation (AWS, GCP)</li>
              <li>Microservices Architecture Design and Development</li>
              <li>Agile Project Management and Team Leadership</li>
              <li>Performance Optimization and Scalable Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}