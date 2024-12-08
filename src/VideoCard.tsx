import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import light from './assets/light.png'; // 替換成您的縮略圖資源路徑

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  projectId: string;
}

const VideoCard: React.FC<VideoCardProps> = memo(({ title, description, videoUrl, projectId }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/video-gallery/${projectId}`);
  }, [navigate, projectId]);

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={handleClick}
        className="border rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-xs"
        style={{
          backgroundImage: `url(${light})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px', // 調整高度以適應您的需求
          position: 'relative',
        }}
      >
        <LazyLoadComponent>
          <video
            src={videoUrl}
            className="w-full h-auto max-h-32"
            controls={false} // 預設不顯示控制條
            muted
            loop
          />
        </LazyLoadComponent>
        <div className="p-2 bg-white h-full bg-opacity-30">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-black-700 z-10 text-sm font-medium tracking-wide">{description}</p>
        </div>
      </div>
    </div>
  );
});

export default VideoCard;
