import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react'
import { motion as m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { ScoreBanner } from '@/app/components/ScoreBanner/ScoreBanner';
import { PiArrowDownThin } from "react-icons/pi";
import aboutData from './aboutData.json';
import styles from './About.scss'

export const About = () => {
  const controlsArray = aboutData.map(() => useAnimation());
  const refs = aboutData.map(() => useInView({ triggerOnce: true }));

  useEffect(() => {
    aboutData.forEach((item, i) => {
      if (refs[i].inView) {
        controlsArray[i].start({
          opacity: 1,
          y: 0,
        });
      }
    });
  }, [controlsArray, refs]);

  return (
    <>
      <ScoreBanner />
      <div className='grid w-full h-full xl:mx-[5%] xl:border-l xl:border-r grid-border-clr'>
        {aboutData.map((item, i) => (
          <div key={item.id}>
            {item.id % 2 !== 0 ? (
              <div className='xl:flex xs:flex-col xl:pb-8 w-full xl:border-b xl:border-r grid-border-clr '>
                <div ref={refs[i].ref} className='grid-item-left flex-col self-center h-full flex-1 xl:px-6'>
                  <m.h2 className='xl:text-5xl pb-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={controlsArray[i]}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: i * 0.1,
                    }}
                  >{item.title}</m.h2>
                  <p className='mb-16 pr-24'>{item.text}</p>
                  <Link className='flex items-center pb-8' href="#">
                    <span className="font-bold mr-3">czytaj dalej</span> <PiArrowDownThin className="inline-block text-xl -rotate-[90deg]" />
                  </Link>
                </div>
                <div className='grid-item-right w-full flex-1 '>
                  <Image
                    className={`${styles.AboutImage1} xl:mt-8`}
                    src={item.image}
                    width={700}
                    height={50}
                    style={{ objectFit: "contain" }}
                    quality={100}
                    alt={item.title}
                  />
                </div>
              </div>
            ) : (
              <div className='xl:flex xs:flex-col xl:w-full xl:pb-8 border-b grid-border-clr'>
                <div className='grid-item-left flex-1 xl:px-6'>
                  <Image
                    className={`${styles.AboutImage1} xl:mt-8`}
                    src={item.image}
                    width={700}
                    height={50}
                    style={{ objectFit: "contain" }}
                    quality={100}
                    alt={item.title}
                  />
                </div>
                <div ref={refs[i].ref} className='grid-item-right felx-col self-center flex-1 xl:px-6'>
                  <m.h2 className='xl:text-5xl xl:py-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={controlsArray[i]}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: i * 0.1,
                    }}
                  >{item.title}</m.h2>
                  <p className='mb-16 xl:pr-24'>{item.text}</p>
                  <Link className='flex items-center pb-8' href="#">
                    <span className="font-bold mr-3 ">czytaj dalej</span> <PiArrowDownThin className="inline-block text-xl -rotate-[90deg]" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
