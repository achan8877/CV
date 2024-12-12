import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./styles";
import { drama, live, assistant } from "./constants";
import SectionWrapper from "./hoc/SectionWrapper";
import { textVariant } from "./utils/motion";
import lightbulb from './assets/lightbulb.png'; // 根據你的實際路徑調整
import './AboutMe.css';
import { useNavigate } from 'react-router-dom';

interface Event {
  date: string;
  title: string;
  icon: string;
}

const EventCard: React.FC<{ event: Event; position: string }> = ({ event, position }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={event.date}
      iconStyle={{
        backgroundImage: `url(${event.icon})`,
        backgroundSize: '180%',
        backgroundPosition: 'center',
        backgroundColor: '#000',
      }}
      position={position}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{event.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // Replace '/' with your desired path
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Events & Performances.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col text-left'>
        <p className="text-black text-center mb-8 text-2xl font-bold">
          近年演出經驗
        </p>
        <button
          onClick={handleButtonClick}
          className="absolute font-bold left-4 px-4 py-2  text-black hover:text-white rounded  underline">
          Back to Home
        </button>
        <h3 className='text-xl font-bold mb-4 text-center'>Drama</h3>
        <VerticalTimeline  className="vertical-timeline-custom-line left-timeline">
          {drama.map((event, index) => (
            <EventCard key={`drama-${index}`} event={event} position="left" />
          ))}
        </VerticalTimeline>

        <h3 className='text-xl text-center font-bold mt-10 mb-4'>Live</h3>
        <VerticalTimeline  className="vertical-timeline-custom-line right-timeline">
          {live.map((event, index) => (
            <EventCard key={`live-${index}`} event={event} position="right" />
          ))}
        </VerticalTimeline>

        <h3 className='text-xl text-center font-bold mt-10 mb-4'>Assistant</h3>
        <VerticalTimeline  className="vertical-timeline-custom-line left-timeline">
          {assistant.map((event, index) => (
            <EventCard key={`assistant-${index}`} event={event} position="left" />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
