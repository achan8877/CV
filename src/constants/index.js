
 import { title } from "process";
import lightbulb from "../assets/lightbulb.png";
import HKBU_BMus from '../assets/video/HKBU_BMus.mp4';
import CUHKJP24 from '../assets/video/CUHKJP24.mp4'
import sc3part2 from '../assets/video/sc3part2.mp4'
import Sc4 from '../assets/video/Sc4.MP4'
import YOASOBITW from '../assets/video/YOASOBITW.mp4'
import CUHKJP24Img from '../assets/video/CUHKJP24Img.png'
import HKBU_BMusImg from '../assets/video/HKBU_BMusImg.png'
import ThreePigsImg from '../assets/video/ThreePigsImg.png'
import Sc4Img from '../assets/video/Sc4Img.png'
import YoasobiTw from '../assets/video/YoasobiTw.png'
  export const navLinks = [
    {
      id: "Experience",
      title: "Experience",
  
    },
    {
      id: "Video",
      title: "Video",
    },
    {
      id: "Gallery",
      title: "Gallery",
    }
    

  ];
  

  export const drama = [
    {
      title: "農圃劇團《念念不忘》",
      date: "12-13/12/2024",
      icon: lightbulb,

    },
    {
      title: "集戲綠色教育劇場《黑夜不再來》",
      date: "7-8/9/2024",
      icon: lightbulb,

    },
    {
      title: "原創擊樂音樂劇《三隻小豬狂想曲》",
      date: "3-4/9/2024",
      icon: lightbulb,

    },
    {
      title: "Theatre Formula《自我放戲訓練班》畢業展演",
      date: "17-18/8/2024",
      icon: lightbulb,
    },
    {
      title: "影話戲 Cinematic Theatre《歡迎來到天樂村》",
      date: "27-30/6/2024",
      icon: lightbulb,

    },
    {
      title: "Mine theatre 《霾》",
      date: "17-19/5/2024",
      icon: lightbulb,

    },
    {
      title: "大專戲劇節匯演《圓夢空間》",
      date: "31/3/2024 & 4-5/4/2024",
      icon: lightbulb,

    },
    {
      title: "嶺南劇社周年公演23《日出》",
      date: "27-28/1/2024",
      icon: lightbulb,

    },
    {
      title: "新亞劇社周年公演23《備忘錄》",
      date: "7-9/7/2023",
      icon: lightbulb,

    }, 
    {
      title: "大專戲劇節匯演《看一場 下不完的雪》",
      date: "5-6/4/2023 & 10/4/2023",
      icon: lightbulb,

    },    
    {
      title: "新亞劇社中大劇賽《The World of Orphans》",
      date: "3/11/2022",
      icon: lightbulb,

    },
  ]
  export const live = [
    {
      title: "HKBU BMus Stage 2024《Cosmic Symphony》",
      date: "18/10/2024",
      icon: lightbulb,

    },
    {
      title: "Taipo Spot《C.Live - AC/DB》",
      date: "7/9/2024", 
      icon: lightbulb,
     
    },
    {
      title: "Taipo Spot《B.Live - Go, Go! Goal?》",
      date: "30/12/2023",  
      icon: lightbulb,
 
    },
    {
      title: "Taipo Spot《here with youth 音樂感謝祭》",
      date: "25/11/2023",
      icon: lightbulb,

    },

  ]
  export const assistant = [
    {
      title: "新亞劇社周年公演《從八十號K開始》",
      date: "19-21/7/2024",
      icon: lightbulb,

    },
    {
      title: "風青劇團《微光之下》",
      date: "29-31/12/2023", 
      icon: lightbulb,
     
    },
    {
      title: "新亞劇社劇賽《婦人與鐵道之夜與島嶼之歌》",
      date: "25/10/2023",   
      icon: lightbulb,

    }
  ]
export const videos = [
  { id: '1', title: 'CUHKJP24', description: 'JP24 Highlights', videoUrl: CUHKJP24, image: CUHKJP24Img},
  { id: '2', title: 'HKBU_BMus', description: 'Music Shows Hightlight', videoUrl: HKBU_BMus, image: HKBU_BMusImg},
  { id: '3', title: 'Three Pigs Rhapsody Scene 3', description: 'Preplotting demo', videoUrl: sc3part2, image: ThreePigsImg },
  { id: '4', title: 'Three Pigs Rhapsody Scene 4', description: 'Preplotting demo 2', videoUrl: Sc4, image: Sc4Img },
  { id: '5', title: 'YOASOBI Timecode Relight', description: 'Timecode demo using Tsuen Wan Cultural Activities Hall', videoUrl: YOASOBITW, image: YoasobiTw },

]
export const projects = [
  {
    title: "The World of Orphans",
    description: "新亞劇社中大劇賽",
    imageUrl: "/cuhkdramacomp/cuhkdramacomp1.jpg",
    projectId: "cuhkdramacomp",
    category: "Drama",
  },
  {
    title: "看一場下不完的雪",
    description: "大專戲劇節匯演&港深澳大學生戲劇交流",
    imageUrl: "/cuhkJP23/cuhkJP23_1.jpg",
    projectId: "cuhkJP23",
    category: "Drama",
  },
  {
    title: "備忘錄",
    description: "新亞劇社周年公演2023",
    imageUrl: "/cuhkNADCAp24/cuhkNADCAp24_1.JPG",
    projectId: "cuhkNADCAp24",
    category: "Drama",
  },
  {
    title: "日出",
    description: "嶺南劇社周年公演2023",
    imageUrl: "/linguAp24/lingu1Ap24.jpg",
    projectId: "linguAp24",
    category: "Drama",
  },
  {
    title: "圓夢空間",
    description: "大專戲劇節匯演&港深澳大學生戲劇交流",
    imageUrl: "/cuhkJP24/cuhkJP24_1.jpg",
    projectId: "cuhkJP24",
    category: "Drama",
  },
  {
    title: "霾",
    description: "Mine theatre 編作劇場",
    imageUrl: "/Mine_Theatre/Mine_Theatre_1.jpeg",
    projectId: "Mine_Theatre",
    category: "Drama",
  },
  {
    title: "歡迎來到天樂村",
    description: "影話戲 Cinematic Theatre",
    imageUrl: "/Cinemic/Cinemic_1.jpg",
    projectId: "Cinemic",
    category: "Drama",
  },
  {
    title: "自我放戲2024",
    description: "Theatre Formula 《自我放戲訓練班》畢業展演",
    imageUrl: "/Theatre_Formula/Theatre_Formula_1.jpeg",
    projectId: "Theatre_Formula",
    category: "Drama",
  },
  {
    title: "三隻小豬狂想曲",
    description: "原創擊樂音樂劇",
    imageUrl: "/Three_Pigs/Three_Pigs_1.jpg",
    projectId: "Three_Pigs",
    category: "Drama",
  },
  {
    title: "黑夜不再來",
    description: "2024集戲綠色教育劇場",
    imageUrl: "/Black_Night/Black_Night_1.JPG",
    projectId: "Black_Night",
    category: "Drama",
  },
  {
    title: "GigOff",
    description: "LiveShow in TaiPo Spot",
    imageUrl: "/GigOff/GigOff_1.jpg",
    projectId: "GigOff",
    category: "LiveShow",  
  },
  {
    title: "Cosmic Symphony",
    description: "LiveShow for HKBU BMus at the HKBU",
    imageUrl: "/BMUS_Stage/BMUS_Stage_1.jpg",
    projectId: "BMUS_Stage",
    category: "LiveShow", 
  },
];


  
  