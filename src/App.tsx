import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

const LazyHome = React.lazy(() => import('./Home'));
const LazyGallery = React.lazy(() => import('./Gallery'));
const LazyImage = React.lazy(() => import('./Image'));
const LazyVideoGallery = React.lazy(() => import('./VideoGallery'));
const LazyExperience = React.lazy(() => import('./Experience'));
const LazyGalleryNavigation = React.lazy(() => import('./GalleryNavigation'));
const LazyVideoPlayerPage = React.lazy(() => import('./VideoPlayerPage'));

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return null;
};

// Loading component with percentage
const LoadingWithPercentage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Call the callback when loading is complete
          return 100;
        }
        return prev + 10; // Increment progress (adjust speed here)
      });
    }, 100); // Adjust interval time for smoother or faster progress

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">Loading... {progress}%</div>
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Stop showing the loading screen
  };

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      {isLoading ? (
        <LoadingWithPercentage onComplete={handleLoadingComplete} />
      ) : (
        <div className="main-content scrollable">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/Gallery" element={<LazyGalleryNavigation />} />
              <Route path="/Gallery/:category" element={<LazyGallery />} />
              <Route path="/Gallery/:category/:projectId" element={<LazyImage />} />
              <Route path="/Video" element={<LazyVideoGallery />} />
              <Route path="/Video/:id" element={<LazyVideoPlayerPage />} />
              <Route path="/Experience" element={<LazyExperience />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </Router>
  );
};

export default App;
