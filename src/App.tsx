import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Videos from './Videos';// Lazy load components
import VideoPlayerPage from './VideoPlayerPage';
const LazyHome = React.lazy(() => import('./Home'));
const LazyGallery = React.lazy(() => import('./Gallery'));
const LazyImage = React.lazy(() => import('./Image'));
const LazyVideoGallery = React.lazy(() => import('./VideoGallery'));
const LazyExperience = React.lazy(() => import('./Experience'));
const LazyVideos = React.lazy(() => import('./Videos'));
const LazyVideoPlayerPage = React.lazy(() => import('./VideoPlayerPage'));
const LazyGalleryNavigation = React.lazy(() => import('./GalleryNavigation'));
const LoadingFallback = () => (
  <div className="loading">Loading...</div>
);
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

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <div className="main-content scrollable">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/Gallery" element={<LazyGalleryNavigation/>} />
            <Route path = "/Gallery/:category" element = {<LazyGallery/>}/>
            <Route path="/Gallery/:category/:projectId" element={<LazyImage />} />
            <Route path="/Video" element={<LazyVideoGallery />} /> {/* 不需要傳遞空屬性 */}
            <Route path="/Video/:id" element={<LazyVideoPlayerPage />} />
            <Route path="/Experience" element={<LazyExperience />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
