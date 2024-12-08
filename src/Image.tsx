import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import imageFolders from './data/imageFolders';

const Image: React.FC = () => {
  const { category, projectId } = useParams<{ category: string; projectId: string }>(); // Extract parameters
  const navigate = useNavigate();
  const project = imageFolders[projectId || ''];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = project?.images || [];
  const projectCategory = project?.category || 'Unknown';

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate(`/Gallery/${category}`)} // Navigate back to the category
      >
        Back to {category} Gallery
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {projectCategory} - Project {projectId}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg relative ${
              projectId === 'Three_Pigs' ? 'aspect-video' : 'aspect-square'
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Project ${projectId} - Image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal for magnified image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Magnified"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
