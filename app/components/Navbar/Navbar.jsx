import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { Blob } from '../Blob/Blob'
import contactItems from './components/contactItems.json'
import navLinks from './components/navLinks.json'
import './Navbar.scss'

// const navLinks = [
//   { title: "Home", href: "/" },
//   { title: "O nas", href: "/" },
//   { title: "Oferta", href: "/" },
//   { title: "e-kartoteka", href: "/" },
//   { title: "Contact", href: "/ContactPage/Contact.jsx" },
// ];

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

  const containerVars = {
    initial: {
      y:"-100%",
      transition: {
        duration: 0.5,
        delay: 0.8,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      y:"9%",
      transition: {
        duration: 0.4,
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const centerLinkVars = {
    initial: {
      y: "8vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const NavLinks = ({ title, href }) => {
    return (
      <m.div variants={centerLinkVars} className={`navLink text-5xl mt-8 uppercase  text-gray-200 `}>
        <Link href={href} onClick={() => {toggleMenu();}}>
          <span className="NavLinkSpan">{title}</span>
        </Link>
      </m.div>
    );
  };

  const AddressTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold xl:pt-4" variants={centerLinkVars}>Adres Biura:</m.h3>
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
               <m.div className="overflow-hidden" key={address.id} variants={centerLinkVars}>
                   {address.address}
               </m.div>
               <m.div className="overflow-hidden pt-1" key={address.id} variants={centerLinkVars}>
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
          <m.div className="w-full h-full flex-1 xl:border-r relative border-[#3e3e3e] xl:px-11"
            variants={containerVars}
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
                  <NavLinks title={link.title} href={link.href} />
                </div>
              ))}
            </m.div>
          </div>
          <div className="relative w-full h-full flex-1">
            <Blob />

          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
};
