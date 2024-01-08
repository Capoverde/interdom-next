"use client"
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ScoreBanner.scss'

const CounterPage = () => {
    const [counterState, setCounterState] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
    });


    const yearsValue =() => new Date().getFullYear() - 1996;

    const scoreData = [
        { id: 1, amount: yearsValue(), desc: "Lat na rynku" },
        { id: 2, amount: "1200", desc: "odbytych zebrań", suffix: "+" },
        { id: 3, amount: "87", desc: "Przeprowadzonych remontów" },
        { id: 4, amount: "65", desc: "Wygranych spraw w sądzie" },
    ];

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
            });
            setCounterState(true);
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="w-full px-40  text-gray-300 border-b border-[#3e3e3e] bg-slate-950         overflow-hidden">
            <div className="
                            counter-box
                            md:flex md:justify-between
                            xl:flex xl:justify-between"
            >
                {scoreData.map((data, i) => (
                    <div
                        key={data.id}
                        className="w-full flex-col items-center align-center py-12 px-6 border-[#3e3e3e]  border-r last:border-none overflow-hidden"
                    >
                        <m.h2 className="text-center text-5xl pb-8 font-bold"
                              initial={{ opacity: 0, y: 20 }}
                              animate={controls}
                              transition={{ duration: 1, 
                                      ease: 'easeInOut',
                                      delay: i * 0.5,
                                    }}
                        >
                            {counterState && (
                                <CountUp start={0} end={parseInt(data.amount)} duration={5} />
                            )}
                            {data.suffix}
                        </m.h2>
                        <m.p className='text-center'
                             animate={controls}
                             initial={{ opacity: 0, y: 10 }}
                             transition={{ duration: 2, 
                                           ease: 'easeInOut',
                                           delay: i * 0.8,
                                }}
                        >
                            {data.desc}
                        </m.p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CounterPage;

