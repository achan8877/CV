import React from 'react';
import { videos } from './constants'; // 導入視頻數據
import { useParams, useNavigate } from 'react-router-dom';
const VideoPlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // 獲取路由參數中的視頻 ID
  const video = videos.find((v) => v.id === id); // 根據 ID 查找視頻
  const navigate = useNavigate();
  if (!video) {
    return <div className="text-center text-red-500">Video not found</div>; // 如果視頻不存在
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-4xl p-4">
      <button
        className="absolute left-4 px-4 py-2 text-white hover:text-blue rounded underline"
        onClick={() => navigate(`/Video`)} // Navigate back to the category
      >
        Back to Video Page
      </button>

        <h1 className="text-2xl font-bold text-white mb-4 text-center">{video.title}</h1>
        <video
          controls
          autoPlay
          className="w-full border rounded-lg shadow-lg"
          style={{ maxHeight: '600px' }}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-gray-300 mt-4 text-center">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
