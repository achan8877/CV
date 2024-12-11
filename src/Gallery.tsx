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
          className="absolute font-bold left-4 px-4 py-2  text-black hover:text-white rounded  underline">
          Back to Category
        </button>
        <h1 className="text-3xl font-bold">My Lighting Design Gallery</h1>
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
