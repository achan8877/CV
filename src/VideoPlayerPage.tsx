import React, { useState, useEffect } from 'react';
import { videos } from './constants'; // 导入视频数据
import { useParams, useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file

const VideoPlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // 获取路由参数中的视频 ID
  const video = videos.find((v) => v.id === id); // 根据 ID 查找视频
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!video) return;

    const videoElement = document.createElement('video');
    videoElement.src = video.videoUrl;

    const updateProgress = () => {
      if (videoElement.buffered.length > 0) {
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const duration = videoElement.duration;
        if (duration > 0) {
          setLoadingProgress((bufferedEnd / duration) * 100);
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingProgress(100);
      setIsLoaded(true);
    };

    videoElement.addEventListener('progress', updateProgress);
    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      videoElement.removeEventListener('progress', updateProgress);
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [video]);

  if (!video) {
    return <div className="text-center text-red-500">Video not found</div>; // 如果视频不存在
  }

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading video... {Math.round(loadingProgress)}%</div>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${loadingProgress}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-4xl p-4 relative">
        <button
          className="absolute left-4 top-4 px-4 py-2 text-white hover:text-blue rounded underline"
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
