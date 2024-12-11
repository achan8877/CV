import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from './assets/portfolio.png'; // 根據您的項目結構更新路徑
import { navLinks } from './constants'; // 假設 navLinks 包含 'Gallery' 和 'Project'
import { FaGoogleDrive } from 'react-icons/fa'; // Import Google Drive icon
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import artmate from './assets/artmate.jpg'; // Import Artstation icon

const Home: React.FC = () => {
  return (
    <div>
      {/* 這裡插入導航欄下方的內容 */}
      <main className="pt-24 flex justify-center items-center"> {/* 添加上邊距以避免與固定導航欄重疊 */}
        <section className="px-10 sm:px-20 text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            Explore and learn more about my work. (This website only supports Windows and Mac)
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://drive.google.com/drive/folders/1PlgcoCl4gMtOtGuz7DRb4UygAhmoLB08?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaGoogleDrive className="w-full h-9 hover:text-gray-600" />
            </a>
            <a href="https://www.instagram.com/lx_mania_lx/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-full h-9 hover:text-gray-600" />
            </a>
            <a href="https://www.art-mate.net/doc/75292?name=%E9%99%B3%E6%BE%A4%E9%8A%98" target="_blank" rel="noopener noreferrer">
              <img src={artmate} alt="Artstation" className="w-15 h-9 hover:opacity-80" />
            </a>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Home;
