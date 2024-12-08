import React from 'react';
import VideoCard from './VideoCard';

const Videos: React.FC = () => (
  <div className="videos">
    <h1 className="text-3xl font-bold text-center my-8">My Lighting Design Videos</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <VideoCard
        title="Lighting Design Demo"
        description="A showcase of lighting design techniques"
        videoUrl="/videos/demo1.mp4"
        projectId="demo1"
      />
      <VideoCard
        title="Theatrical Lighting"
        description="Highlights from a recent theatrical production"
        videoUrl="/videos/theatrical1.mp4"
        projectId="theatrical1"
      />
      <VideoCard
        title="Concert Lighting"
        description="Dynamic lighting effects for concerts"
        videoUrl="/videos/concert1.mp4"
        projectId="concert1"
      />
      {/* 添加更多視頻卡片 */}
    </div>
  </div>
);

export default Videos;
