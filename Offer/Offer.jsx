"use client"
import { useState, useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { OfferAccordion } from '@/app/components/OfferAccordion/OfferAccordion'
import './Offer.scss'

export const Offer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
      triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
        controls.start({
            opacity: 1,
            y: 0,
        });
    }
}, [controls, inView]);

  return (
    <div className="OfferPage-wrapper h-full w-full xl:px-[5%]">
    <div ref={ref} className='w-full h-auto border-r border-l grid-border-clr  mb-10'> 
      <header className='w-full py-4 border-b grid-border-clr'>
        <m.h2 className='text-5xl xl:px-8 xl:py-6'
                                       animate={controls}
                                       initial={{ opacity: 0, y: 10 }}
                                       transition={{ duration: 2, 
                                                     ease: 'easeInOut',
                                                    delay:  0.5,
                                          }}        
        >Nasza Oferta</m.h2>
      </header>
      <article className='OfferArticle border-b grid-border-clr'>
        <m.p className='OfferParagraph'
                                       animate={controls}
                                       initial={{ opacity: 0, y: 10 }}
                                       transition={{ duration: 2, 
                                                     ease: 'easeInOut',
                                                    delay:  0.8,
                                          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque? Doloremque tenetur sed nostrum dolor, suscipit labore aliquam esse optio ipsam! Impedit sapiente culpa officia sed eligendi laboriosam ut delectus possimus? Minima quidem accusamus eaque dolores voluptate? Quod hic accusamus placeat ex nesciunt, perspiciatis id maxime sint corporis assumenda harum.
        </m.p>
      </article>
       <OfferAccordion /> 
    </div>
    </div>
  )
}

