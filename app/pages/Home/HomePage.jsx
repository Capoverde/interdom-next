"use client"
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion as m, AnimatePresence } from 'framer-motion';
import {  BsArrowUpRight } from "react-icons/bs";
import styles from './HomePage.scss'

export const HomePage = () => {

  const headerOne = {
    initial: {
      y: "30px",
      opacity: 0,
      transition: {
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <AnimatePresence>
    <div className='w-full h-[101vh] flex'>
    <div className="col  h-full w-[25.1%] 
                    border-r border-l  xl:ml-[5%] grid-border-clr">
      <div className="row w-full h-1/2 xl:px-8 flex-col align-center items-center">
          <header className='block  pt-24'>
            <m.h1 className="title text-slate-950 text-[4rem] overflow-hidden"
                  initial="initial"
                  animate="open"                  
                  variants={headerOne}
            >
                Interdom<span className='text-2xl'>s.c.</span>
            </m.h1>
            <m.h2 className="subtitle text-[1.3rem] pb-12"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.5, delay: 0.45}}
            >
                Zarządzanie Nieruchomościami
            </m.h2>
          </header>
          <Link href="/AboutPage" className=' w-full text-left relative overflow-hidden flex align-center'
                     
          >
             <m.span className='mr-2'
                               variants={{
                                hidden: { 
                                  opacity: 0,
                                  x: -15 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0 }
                              }}
                              initial="hidden"
                              animate="visible"
                              transition={{duration: 1, delay: 0.45}} 
             >więcej</m.span>
             <m.div className="inline-block"
                              variants={{
                                hidden: { 
                                  opacity: 0,
                                  x: -15 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0 }
                              }}
                              initial="hidden"
                              animate="visible"
                              transition={{duration: 1, delay: 1.5}}              
             >
              <BsArrowUpRight className=' text-xl rotate-[45deg]'/>
             </m.div>  
          </Link>
      </div>
      <m.div className={`${styles.heroImageBox} row w-full h-1/2 bg-gray-300`}
       variants={{
         hidden: { 
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
         visible: { 
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        }
       }}
       initial="hidden"
       animate="visible"
       transition={{duration: 0.5, delay: 0.45}}
      ></m.div>                
    </div>
    <div className="col h-full grow">
      <div className="h-1/4 w-full"></div>
      <m.div className={`${styles.heroImageBox} bg-gray-300 h-3/4 w-[90%] mx-auto my-auto`}
       variants={{
        hidden: { 
         clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
       },
        visible: { 
         clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
       }
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.8, delay: 1}}  
      >
      </m.div>
    </div>
    <div className="col h-full w-[25.1%] border-l border-r mr-[5%] grid-border-clr">
      <div className="w-full h-[15%]"></div>
      <m.div className={`${styles.heroImageBox} w-full h-[85%] bg-gray-300`}
       variants={{
        hidden: { 
         clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
       },
        visible: { 
         clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
       }
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 1.2, delay: 1.4}} 
      ></m.div>
    </div>
  </div>
  </AnimatePresence>
  )
}
