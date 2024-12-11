import React from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (category: string) => {
    navigate(`/Gallery/${category}`);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Choose a Category</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => handleNavigate('Drama')}
          className="px-4 py-2 text-black hover:text-white rounded  underline"
        >
          Drama
        </button>
        <button
          onClick={() => handleNavigate('LiveShow')}
          className="px-4 py-2 text-black hover:text-white rounded  underline"
        >
          LiveShow
        </button>
      </div>
    </div>
  );
};

export default GalleryNavigation;
