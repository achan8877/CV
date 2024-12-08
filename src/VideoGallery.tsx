import React from 'react';
import { useNavigate } from 'react-router-dom';
import light from './assets/light.png'; // 示例圖片
import {videos} from './constants'; // 導入視頻數據

const VideoGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="video-gallery">
      <h1 className="text-3xl font-bold text-center my-8">My Video Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => navigate(`/video/${video.id}`)} // 點擊導航到詳細頁面
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <div
              style={{
                backgroundImage: `url(${light})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
              }}
            />
            <div className="p-4">
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
