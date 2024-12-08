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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Drama
        </button>
        <button
          onClick={() => handleNavigate('LiveShow')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          LiveShow
        </button>
      </div>
    </div>
  );
};

export default GalleryNavigation;
