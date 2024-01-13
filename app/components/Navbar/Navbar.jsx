import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { Blob } from '../Blob/Blob'
import { containerVars } from "./helpers/containerVars";
import { centerLinkVars } from "./helpers/centerLinkVars"
import { boxVars } from "./helpers/boxVars"
import contactItems from './NavbarData/contactItems.json'
import navLinks from './NavbarData/navLinks.json'
import './Navbar.scss'

export const Navbar = ({ toggleMenu, isOpen }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const NavLinks = ({ dataText, title, href }) => {
    return (
      <m.div variants={centerLinkVars} className={`text-5xl mt-8 uppercase  text-gray-200 `}>
        <Link className="navLink" href={href} onClick={() => {toggleMenu();}}>
          <span  data-text={dataText} className="NavLinkSpan">{title}</span>
          {/* <span  data-text={dataText} className="NavLinkSpanPolygon">{title}</span> */}
        </Link>
      </m.div>
    );
  };

  const AddressTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold" variants={centerLinkVars}>Adres Biura:</m.h3>
    )
  }

  const WorkHoursTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold xl:py-4" variants={centerLinkVars}> Dni i godziny pracy biura:<sup className="text-red-500">*</sup></m.h3>
    )
  }

  const AddressData = () => {
    return (
      <m.div variants={centerLinkVars} className="mt-8  text-gray-200">
          <div className="xl:pb-3 w-full">
          {contactItems.map((address, id) => (
            <>
              <Link
                href="https://www.google.com/maps/place/Łódź, ul. Rewolucji 1905 r. nr 7"
                target="_blank"
                title="kliknij aby sprawdzić w google maps"
              >
               <m.div key={address.id} variants={centerLinkVars}>
                   {address.address}
               </m.div>
               <m.div className="pt-1" key={address.id} variants={centerLinkVars}>
                 <span>{address.city}</span>
               </m.div>
              </Link>
            </>
          ))}                
        </div>
      </m.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.nav
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className={`page-nav flex fixed left-0 w-full h-screen origin-top 
                    border-t border-[#3e3e3e]
                    bg-slate-950
                    text-gray-200 z-[50]`}
        >
          {/* ----------------- LEFT ------------------ */}
          <m.div className="xl:pt-24 w-full h-full flex-1 xl:border-r relative border-[#3e3e3e] xl:px-11"
            variants={boxVars}
            initial="initial"
            animate="open"
            exit="initial"
          >
            <Blob />
            <div className="overflow-hidden" >
              <AddressTitle />
            </div>
            <div className="overflow-hidden" >
              <AddressData />
            </div>
            <div className="overflow-hidden">
              <WorkHoursTitle />
            </div>
            <div>
              {contactItems.map((item, id)=>(
                <m.div className="flex justify-between overflow-hidden" 
                       key={item.id}
                       variants={containerVars}
                       initial="initial"
                       animate="open"
                       exit="initial"                         
                       >
                  <m.div variants={centerLinkVars} className="xl:py-2">{item.day}</m.div>
                  <m.div variants={centerLinkVars} className="xl:py-2 xl:pr-[4rem]">{item.hours}</m.div>
                </m.div>
              ))}
            </div>
            <div>
             {contactItems.map((info)=>(
                <m.div className="overflow-hidden" 
                 key={info.id}
                 variants={containerVars}
                 initial="initial"
                 animate="open"
                 exit="initial"                         
                >              
                  <m.div variants={centerLinkVars} className="text-xs text-gray-500 text-left pr-[4rem]">
                  <sup className="text-red-500">{info.prefix}</sup>
                    {info.info}
                  </m.div>
                </m.div>  
              ))}
            </div>
          </m.div>
          {/* ----------------- CENTER ------------------ */}
          <div className="relative h-full flex-1 flex-col border-r border-[#3e3e3e] px-8">
            <Blob />
            <m.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full items-center gap-10 md:mb-12 xl:mb-12"
            >
              {navLinks.map((link, index) => (
                <div className="overflow-hidden" key={index}>
                  <NavLinks dataText={link.dataText} title={link.title} href={link.href} />
                </div>
              ))}
            </m.div>
          </div>
          {/* ---------------------- RIGHT ------------------------ */}
          <div className="navbar-right-box relative w-full h-full flex-1">
            <Blob />
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
};
