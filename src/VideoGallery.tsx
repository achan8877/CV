import React from 'react';
import { useNavigate } from 'react-router-dom';
import { videos } from './constants'; // Import videos data
import light from './assets/light.png'; // Base light image

const VideoGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="video-gallery">
      <button 
        className="absolute left-4 px-4 py-2 text-black hover:text-white rounded underline"
        onClick={() => navigate('/gallery')} // Navigate back to gallery
      >
        Back to Gallery
      </button>
      <h1 className="text-3xl font-bold text-center my-8">My Video Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => navigate(`/video/${video.id}`)} // Navigate to the detailed page
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer relative"
            style={{
              backgroundImage: `url(${light})`, // Light image covers the entire card
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay video-specific image */}
            <div className="relative" style={{ height: '200px' }}>
              <img
                src={video.image} // Video-specific image
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover z-10" // Cover the entire grid cell
              />
            </div>
            {/* Text container */}
            <div className="p-4 z-20 bg-white relative opacity-30 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
