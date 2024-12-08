import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from './assets/portfolio.png'; // 根據您的項目結構更新路徑
import { navLinks } from './constants'; // 假設 navLinks 包含 'Gallery' 和 'Project'

const Home: React.FC = () => {
  return (
    <div>


      {/* 這裡插入導航欄下方的內容 */}
      <main className="pt-24"> {/* 添加上邊距以避免與固定導航欄重疊 */}
        <section className="px-10 sm:px-20">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            Explore my projects and learn more about my work.
          </p>
          {/* 可以在這裡添加更多內容 */}
        </section>
      </main>
    </div>
  );
}

export default Home;
