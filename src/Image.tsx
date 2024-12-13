import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import imageFolders from './data/imageFolders';

const Image: React.FC = () => {
  const { category, projectId } = useParams<{ category: string; projectId: string }>();
  const navigate = useNavigate();
  const project = imageFolders[projectId || ''];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const title = project?.title || 'Unknown';
  const images = project?.images || [];
  const projectCategory = project?.category || 'Unknown';

  // Preload images with progress tracking
  useEffect(() => {
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      setLoadingProgress((loadedCount / images.length) * 100);

      if (loadedCount === images.length) {
        setIsLoaded(true);
      }
    };

    images.forEach((image) => {
      const img = new window.Image();
      img.src = image;
      img.onload = handleImageLoad;
    });
  }, [images]);

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading... {Math.round(loadingProgress)}%</div>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${loadingProgress}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <button
        className="absolute left-4 px-4 py-2 text-black hover:text-white rounded underline"
        onClick={() => navigate(`/Gallery/${category}`)}
      >
        Back to {category} Gallery
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">
        {projectCategory} - {title}
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
