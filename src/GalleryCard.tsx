import React, { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import light from './assets/light.png';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectId: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ title, description, imageUrl, projectId, category }) => {
  const navigate = useNavigate();
  const { category: currentCategory } = useParams();

  console.log('Current Category:', currentCategory);

  const handleClick = useCallback(() => {
    navigate(`/Gallery/${category}/${projectId}`);
  }, [navigate, category, projectId]);

  if (currentCategory?.trim().toLowerCase() !== category.trim().toLowerCase()) {
    console.log('Category does not match. Skipping rendering.');
    return null;
  }

  return (
    <div
      onClick={handleClick}
      className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer group"
      style={{
        height: '300px', // Fixed height for equal-sized grid items
      }}
    >
      {/* Background image */}
      <LazyLoadComponent>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </LazyLoadComponent>

      {/* Text overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm font-medium mt-2">{description}</p>
      </div>
    </div>
  );
});

export default ProjectCard;
