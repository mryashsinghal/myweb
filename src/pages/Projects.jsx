import React, { useEffect, useRef } from 'react';

// Sample projects with description and image
const projects = [
  {
    title: 'BITEHUB',
    description: 'This is a full-stack food delivery application allowing users to place orders and track them in real-time',
    image: 'foodapp.jpeg', // Replace with your actual image URL
    url : 'https://github.com/mryashsinghal/BiteHub'
  },
  {
    title: 'QUERYEASE',
    description: 'An AI-powered interface to translate natural language queries into MongoDB commands, simplifying database access for non-technical users',
    image: 'ai-app.jpeg', // Replace with your actual image URL
    url : 'https://github.com/mryashsinghal/QueryEase'
  },
  {
    title: 'INTERACTIVE RESUME BUILDER',
    description: 'A responsive resume builder that allows users top review and download resumes in real-time',
    image: 'resume.jpg', // Replace with your actual image URL
    url : 'https://github.com/mryashsinghal/Resume-Builder'
  }
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-grow');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center py-12 min-w-full overflow-hidden">
      {/* Line representing the tree branch */}
      <div className="absolute w-1 bg-gray-500 h-full left-1/2 transform -translate-x-1/2"></div>
      
      {/* Project Cards */}
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          className="max-w-[600px] min-h-[300px] bg-light text-gray-900 p-6 m-4 rounded-lg opacity-0 transform transition-transform duration-700 ease-in-out"
        >
          <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p>{project.description}</p>
          <a className='bg-black text-[whitesmoke] p-1 rounded-md pl-3 pr-3 hover:bg-dark cursor-pointer' href={project.url}>View</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
