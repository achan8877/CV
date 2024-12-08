import React from 'react';
import GalleryCard from './GalleryCard';
import { projects } from './constants'; // 引入項目數據
import { useNavigate } from 'react-router-dom';

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Gallery'); // Replace '/' with your desired path
  };

  return (
    <div className="projects">
      <div className="relative flex items-center justify-center px-4 my-8">
        {/* Add a button on the left */}
        <button
          onClick={handleButtonClick}
          className="absolute left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-3xl font-bold">My Lighting Design Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <GalleryCard
            key={project.projectId}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectId={project.projectId}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
