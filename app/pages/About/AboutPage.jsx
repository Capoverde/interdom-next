import Image from 'next/image'
import { ScoreBanner } from '@/app/components/ScoreBanner/ScoreBanner';
import aboutData from './aboutData.json';
import styles from './About.scss'

export const About = () => {
  return (
    <>
    <ScoreBanner />
    <div className='grid w-full h-full xl:mx-[5%] xl:border-l xl:border-r grid-border-clr'>
      {aboutData.map((item) => (
        <div key={item.id}>
          {item.id % 2 !== 0 ? (
            <div className='xl:flex xs:flex-col w-full xl:border-b xl:border-r grid-border-clr'>
              <div className='grid-item-left flex-col self-center flex-1 xl:px-6'>
                <h2 className='xl:text-5xl pb-6'>{item.title}</h2>
                <p className='pr-24'>{item.text}</p>
              </div>
              <div className='grid-item-right w-full flex-1 '>
                <Image 
                  className={`${styles.AboutImage1} xl:mt-8`}
                  src={item.image}
                  width={700}
                  height={50}
                  style={{objectFit: "contain"}}
                  quality={100}
                  alt={item.title}
                />
              </div>
            </div>
          ) : (
            <div className='xl:flex xs:flex-col xl:w-full border-b grid-border-clr'>
              <div className='grid-item-left flex-1 xl:px-6'>
                <Image 
                  className={`${styles.AboutImage1} xl:mt-8`}
                  src={item.image}
                  width={700}
                  height={50}
                  style={{objectFit: "contain"}}
                  quality={100}
                  alt={item.title}
                />
              </div>
              <div className='grid-item-right felx-col self-center flex-1 xl:px-6'>
                <h2 className='xl:text-5xl xl:py-6'>{item.title}</h2>
                <p className='xl:pr-24'>{item.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};
