import React, { useState } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { Blob } from '../Blob/Blob';
import './OfferAccordion.scss';
import AccordionData from './AccordionData.json';

export const OfferAccordion = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const controls = useAnimation();

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0,
        ease: 'easeInOut' 
      },
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    controls.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0, delay: 0 },
    });
  };

  return (
    <div className='accordion w-full xl:flex md:flex overflow-hidden'>
      {AccordionData.map((data) => (
        <div
          key={data.id}
          className={`accordionBox relative w-full border-r border-[#3e3e3e] cursor-pointer overflow-hidden ${
            hoveredItem === data.id ? 'hovered' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(data.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className='content relative w-full h-full'>
          {/* <Blob className='accordionBlob'/> */}
            <h3 className='offerTitle md:text-[4rem]  xl:text-[3.5rem] font-bold text-gray-200 p-8'>
              {data.title}
            </h3>
            <m.h3
              className='offerText font-bold text-[2rem] p-8 text-gray-200 z-[30]  overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hoveredItem === data.id ? 1 : 0,
                y: hoveredItem === data.id ? 0 : 20,
              }}
              transition={{
                duration: hoveredItem === data.id ? 0.25 : 0,
                ease: 'easeInOut',
                delay: hoveredItem === data.id ? 0.5 : 0,
              }}
            >{data.title2}</m.h3>
            <m.p
              className='offerText p-8 text-gray-200 z-[30]  overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hoveredItem === data.id ? 1 : 0,
                y: hoveredItem === data.id ? 0 : 20,
              }}
              transition={{
                duration: hoveredItem === data.id ? 0.25 : 0,
                ease: 'easeInOut',
                delay: hoveredItem === data.id ? 0.5 : 0,
              }}
              controls={controls}
            >
              {data.describe}
            </m.p>
          </div>
        </div>
      ))}
    </div>
  );
};

