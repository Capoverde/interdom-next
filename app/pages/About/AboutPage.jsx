import styles from './About.scss'
import Image from 'next/image'

export const About = () => {
  return (
    <div className='xl:flex w-full h-full xl:mx-[5%]  xl:border-l xl:border-r grid-border-clr'>
      {/*------------------------------- LEFT ---------------------------------------*/}
      <div className="xl:w-[82%] h-full xl:border-r  grid-border-clr">
        <section className={`${styles.aboutSection} border-b grid-border-clr xl:h-[500px] xl:flex-col`}>
         <h2 className='xl:text-5xl xl:px-8 xl:pt-16'>O nas</h2>
         <p className="text xl:py-16 xl:px-8 xl:pr-36 ">
          Historia firmy rozpoczęła się w 1996 roku, kiedy to Jolanta Słobińska postanowiła połączyć swoje umiejętności zarządzania nieruchomościami z wizją oferowania kompleksowej obsługi wspólnot mieszkaniowych oraz prywatnych właścicieli kamienic. "Interdom" szybko stał się rozpoznawalnym graczem na lokalnym rynku nieruchomości w Łodzi.
         </p>
        </section>
        {/* MISSION IMAGE */}
        <section class={`${styles.AboutIMageBox} flex justify-end`}>
         <Image 
          className={`${styles.AboutImage1} xl:mt-8`}
          src='/AboutImage2.jpg'
          width={700}
          height={50}
          style={{objectFit: "contain"}}
          quality={100}
          alt='domek'
         />
        </section>
        {/* ANGAŻ */}
        <section className={`${styles.aboutSection} border-b grid-border-clr xl:h-[500px] xl:flex-col`}>
         <h2 className='xl:text-5xl xl:px-8 xl:pt-16'>Zaangażowanie Właścieili</h2>
         <p className="text xl:py-16 xl:pl-8 xl:pr-44">
          Jolanta Słobińska i Wojciech Słobiński aktywnie angażują się w reprezentowanie interesów swoich klientów, występując na podstawie udzielonych pełnomocnictw. Dzięki ich profesjonalizmowi i doświadczeniu "Interdom" skutecznie egzekwuje powierzone zadania, dbając o dobro i stabilność zarządzanych nieruchomości.
         </p>
        </section>
        {/* SOLIDNA WSPÓŁPRACA */}
        <section class={`${styles.AboutIMageBox} flex justify-end`}>
         <Image 
          className={`${styles.AboutImage1} xl:mt-8`}
          src='/AboutImage4.jpg'
          width={700}
          height={50}
          style={{objectFit: "contain"}}
          quality={100}
          alt='domek'
         />
        </section>
        {/* BEZPIECZEŃSTWO FINANSOWE */}
        <section className={`${styles.aboutSection} border-b grid-border-clr xl:h-[500px] xl:flex-col`}>
         <h2 className='xl:text-5xl xl:px-8 xl:pt-16'>Bezpieczeństwo Finansowe</h2>
         <p className="text xl:py-16 xl:pl-8 xl:pr-44">
          "Interdom" nie tylko gwarantuje kompleksową obsługę, ale także dba o bezpieczeństwo finansowe swoich klientów. Posiadamy obowiązkowe OC Zarządcy Nieruchomości na imponującą kwotę 1.000.000,00 zł, co stanowi zabezpieczenie na wypadek ewentualnych szkód wyrządzonych w związku z prowadzoną działalnością.
         </p>
        </section>
      </div>
      {/*------------------------------- RIGHT -----------------------------------*/}
      <div className="w-full h-full">
        <section class={`${styles.AboutIMageBox}`}>
         <Image 
          className={`${styles.AboutImage1} xl:mt-8`}
          src='/AboutImage1.jpg'
          width={700}
          height={50}
          style={{objectFit: "contain"}}
          quality={100}
          alt='domek'
         />
        </section>
        {/* MISSION */}
        <section className={`${styles.aboutSection} border-b grid-border-clr xl:h-[500px] xl:flex-col`}>
         <h2 className='xl:text-5xl xl:px-8 xl:pt-16'>Specjalizacja i Misja</h2>
         <p className="text xl:py-16 xl:pl-8 xl:pr-44">
          Od samego początku firma skoncentrowała się na obszarze zarządzania wspólnotami mieszkaniowymi, oferując kompleksowe rozwiązania dla właścicieli nieruchomości. <br/>
          Misją "Interdom" jest nie tylko zapewnienie skutecznej obsługi finansowo-księgowej, ale także reprezentacja wspólnot i właścicieli przed sądami, urzędami oraz innymi instytucjami.
         </p>
        </section>
        {/* ANGAŻ */}
        <section class={`${styles.AboutIMageBox}`}>
         <Image 
          className={`${styles.AboutImage1} xl:mt-8`}
          src='/AboutImage3.jpg'
          width={700}
          height={50}
          style={{objectFit: "contain"}}
          quality={100}
          alt='domek'
         />
        </section>
        {/* SOLIDNA WSPÓŁPRACA */}
        <section className={`${styles.aboutSection} border-b grid-border-clr xl:h-[500px] xl:flex-col`}>
         <h2 className='xl:text-5xl xl:px-8 xl:pt-16'>Solidna Współpraca</h2>
         <p className="text xl:py-16 xl:pl-8 xl:pr-44">
          Firma "Interdom" zawsze kładzie nacisk na solidność i jakość współpracy. Dlatego też, współpracuje wyłącznie ze sprawdzonymi podmiotami na rynku nieruchomości. Kancelarie prawne, brokerzy ubezpieczeniowi, firmy sprzątające, hydrauliczne, dekarskie, budowlane, elektryczne i inne – wszyscy są wybierani pod kątem ich profesjonalizmu, by gwarantować klientom "Interdom" odpowiedni poziom usług.
         </p>
        </section>
        {/* BEZPIECZŃSTWO FINANSOWE */}
        <section class={`${styles.AboutIMageBox}`}>
         <Image 
          className={`${styles.AboutImage1} xl:mt-8`}
          src='/AboutImage5.jpeg'
          width={700}
          height={50}
          style={{objectFit: "contain"}}
          quality={100}
          alt='domek'
         />
        </section>
      </div>
    </div>
  )
}
