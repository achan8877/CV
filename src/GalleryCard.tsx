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
  const { category: currentCategory } = useParams(); // Use useParams for better reliability

  console.log('Current Category:', currentCategory);

  const handleClick = useCallback(() => {
    navigate(`/Gallery/${category}/${projectId}`);
  }, [navigate, category, projectId]);

  if (currentCategory?.trim().toLowerCase() !== category.trim().toLowerCase()) {
    console.log('Category does not match. Skipping rendering.');
    return null; // Skip rendering if the category doesn't match
  }

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={handleClick}
        className="border rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-xs"
        style={{
          backgroundImage: `url(${light})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          position: 'relative',
        }}
      >
        <LazyLoadComponent>
          <img src={imageUrl} alt={title} className="w-full h-auto max-h-32" />
        </LazyLoadComponent>
        <div className="p-2 bg-white h-full bg-opacity-30">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-black-700 z-10 text-sm font-medium tracking-wide">{description}</p>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
