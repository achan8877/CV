const imageFolders: Record<string, { id:string;images: string[];title: string; category: 'Drama' | 'LiveShow' }> = {
  cuhkdramacomp: {
    id: "1",
    images: [
      '/cuhkdramacomp/cuhkdramacomp1.jpg',
      '/cuhkdramacomp/cuhkdramacomp2.jpg',
      '/cuhkdramacomp/cuhkdramacomp3.jpg',
      '/cuhkdramacomp/cuhkdramacomp4.jpg',
      '/cuhkdramacomp/cuhkdramacomp5.jpg',
      '/cuhkdramacomp/cuhkdramacomp6.jpg',
    ],
    category: 'Drama',
    title:"The World of Orphans"
  },
  cuhkJP23: {
    id: "2",
    images: [
      '/cuhkJP23/cuhkJP23_1.jpg',
      '/cuhkJP23/cuhkJP23_2.jpg',
      '/cuhkJP23/cuhkJP23_3.jpg',
      '/cuhkJP23/cuhkJP23_4.jpg',
    ],
    category: 'Drama',
    title:"看一場 下不完的雪"
  },
  cuhkNADCAp24: {
    id: "3",
    images: [
      '/cuhkNADCAp24/cuhkNADCAp24_1.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_2.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_3.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_4.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_5.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_6.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_7.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_8.JPG',
      '/cuhkNADCAp24/cuhkNADCAp24_9.JPG',
    ],
    category: 'Drama',
    title:"備忘錄"
  },
  linguAp24: {
    id: "4",
    images: [
      '/linguAp24/lingu1Ap24.jpg',
      '/linguAp24/lingu2Ap24.jpg',
      '/linguAp24/lingu3Ap24.jpg',
      '/linguAp24/lingu4Ap24.jpg',
      '/linguAp24/lingu5Ap24.jpg',
      '/linguAp24/lingu6Ap24.jpg',
    ],
    
    category: 'Drama',
    title: "日出"
  },
  cuhkJP24: {
    id: "5",
    images: [
      '/cuhkJP24/cuhkJP24_1.jpg',
      '/cuhkJP24/cuhkJP24_2.jpg',
      '/cuhkJP24/cuhkJP24_3.jpg',
      '/cuhkJP24/cuhkJP24_4.jpg',
      '/cuhkJP24/cuhkJP24_5.jpg',
      '/cuhkJP24/cuhkJP24_6.jpg',
    ],
    category: 'Drama',
    title: "圓夢空間"
  },
  Mine_Theatre: {
    id: "6",
    images: [
      '/Mine_Theatre/Mine_Theatre_1.jpg',
      '/Mine_Theatre/Mine_Theatre_2.jpg',
      '/Mine_Theatre/Mine_Theatre_3.jpg',
      '/Mine_Theatre/Mine_Theatre_4.jpg',
      '/Mine_Theatre/Mine_Theatre_5.jpg',
      '/Mine_Theatre/Mine_Theatre_6.jpg',
      '/Mine_Theatre/Mine_Theatre_7.jpg',
      '/Mine_Theatre/Mine_Theatre_8.jpg',
      '/Mine_Theatre/Mine_Theatre_9.jpg',
      '/Mine_Theatre/Mine_Theatre_10.jpg',
      '/Mine_Theatre/Mine_Theatre_11.jpg',
      '/Mine_Theatre/Mine_Theatre_12.jpg',
    ],
    category: 'Drama',
    title: "霾"
  },
  Cinemic: {
    id: "7",
    images: [
      '/Cinemic/Cinemic_1.jpg',
      '/Cinemic/Cinemic_2.jpg',
      '/Cinemic/Cinemic_3.jpg',
      '/Cinemic/Cinemic_4.jpg',
      '/Cinemic/Cinemic_5.jpg',
      '/Cinemic/Cinemic_6.jpg',
      '/Cinemic/Cinemic_7.jpg',
      '/Cinemic/Cinemic_8.jpg',
      '/Cinemic/Cinemic_9.jpg',
    ],
    category: 'Drama',
    title: "歡迎來到天樂村"
  },
  Theatre_Formula: {
    id: "8",
    images: [
      '/Theatre_Formula/Theatre_Formula_1.jpeg',
      '/Theatre_Formula/Theatre_Formula_2.jpg',
      '/Theatre_Formula/Theatre_Formula_3.jpg',
      '/Theatre_Formula/Theatre_Formula_4.jpg',
      '/Theatre_Formula/Theatre_Formula_5.jpg',
      '/Theatre_Formula/Theatre_Formula_6.jpg',
      '/Theatre_Formula/Theatre_Formula_7.jpg',
      '/Theatre_Formula/Theatre_Formula_8.jpg',
      '/Theatre_Formula/Theatre_Formula_9.jpg',
    ],
    category: 'Drama',
    title: "《自我放戲訓練班》畢業展演"
  },
  Three_Pigs: {
    id: "9",
    images: [
      '/Three_Pigs/Three_Pigs_1.jpg',
      '/Three_Pigs/Three_Pigs_2.JPG',
      '/Three_Pigs/Three_Pigs_3.png',
      '/Three_Pigs/Three_Pigs_4.JPG',
      '/Three_Pigs/Three_Pigs_5.JPG',
      '/Three_Pigs/Three_Pigs_6.JPG',
      '/Three_Pigs/Three_Pigs_7.JPG',
      '/Three_Pigs/Three_Pigs_8.JPG',
      '/Three_Pigs/Three_Pigs_9.JPG',
    ],
    category: 'Drama',
    title:"三隻小豬狂想曲"
  },
  Black_Night: {
    id: "10",
    images: [
      '/Black_Night/Black_Night_1.JPG',
      '/Black_Night/Black_Night_2.jpg',
      '/Black_Night/Black_Night_3.jpg',
      '/Black_Night/Black_Night_4.jpg',
      '/Black_Night/Black_Night_5.jpg',
      '/Black_Night/Black_Night_6.jpg',
    ],
    category: 'Drama',
    title: "黑夜不再來"
  },
  GigOff: {
    id: "11",
    images: [
      '/GigOff/GigOff_1.jpg',
      '/GigOff/GigOff_2.jpg',
      '/GigOff/GigOff_3.jpg',
      '/GigOff/GigOff_4.jpg',
      '/GigOff/GigOff_5.jpg',
      '/GigOff/GigOff_6.jpg',
    ],
    category: 'LiveShow',
    title: "GigOff"
  },
  BMUS_Stage: {
    id: "12",
    images: [
      '/BMUS_Stage/BMUS_Stage_1.jpg',
      '/BMUS_Stage/BMUS_Stage_2.jpg',
      '/BMUS_Stage/BMUS_Stage_3.jpg',
      '/BMUS_Stage/BMUS_Stage_4.jpg',
      '/BMUS_Stage/BMUS_Stage_5.jpg',
      '/BMUS_Stage/BMUS_Stage_6.jpg',
    ],
    category: "LiveShow", 
    title: "Cosmic Symphony Credit: instagram @yasenwong"
  }
};

export default imageFolders;
