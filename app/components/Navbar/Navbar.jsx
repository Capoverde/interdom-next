import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { Blob } from '../Blob/Blob'
import { containerVars } from "./helpers/containerVars";
import { centerLinkVars } from "./helpers/centerLinkVars"
import { boxVars } from "./helpers/boxVars"
import contactItems from './NavbarData/contactItems.json'
import navLinks from './NavbarData/navLinks.json'
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt, FaMobile, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";
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

   const MailAndPhones = [
    { id: 1, href: "biuro@interdom-nieruchomosci.pl", mail: "biuro@interdom-nieruchomosci.pl", icon: <IoMdMail /> },
    { id: 2, href: "+42 630 84 55", phone1: "+42 630 84 55", icon: <FaPhoneAlt /> },
    { id: 3, href: "+48 530 223 625", phone2: "+48 530 223 625", icon: <FaMobile /> },
    { id: 4, href: "www.facebook.com", title: "sprawdź nasz Facebook", facebook: "Facebook", socIcon: <FaSquareFacebook /> },
    { id: 5, href: "www.linkedin.com", title: "sprawdź nasz profil na LinkedIn", linkedin: "LinkedIn", socIcon: <FaLinkedin /> }
  ];
  

  const NavLinks = ({ title, href }) => {
    return (
      <m.div variants={centerLinkVars} className={`text-5xl mt-8 uppercase  text-gray-200 `}>
        <Link className="navLink" href={href} onClick={() => {toggleMenu();}}>
          <span className="NavLinkSpan">{title}</span>
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

  const PhonesMailTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold" variants={centerLinkVars}>Skontaktuj się z nami:</m.h3>
    )
  }

  const SocialsTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold" variants={centerLinkVars}>Obserwuj nas:</m.h3>
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
                  <NavLinks  title={link.title} href={link.href} />
                </div>
              ))}
            </m.div>
          </div>
          {/* ---------------------- RIGHT ------------------------ */}
          <div className="navbar-right-box relative w-full h-full flex-1">
            <Blob />
            <div className="overflow-hidden xl:pt-24 xl:px-11">
              <PhonesMailTitle />
            </div>
            <m.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"        
              className="w-full"      
            >
              {MailAndPhones.map((item) =>(
                <div key={item.id} className="flex items-center xl:px-11 xl:pt-6 ">
                  <div className="overflow-hidden">
                   <m.div variants={centerLinkVars} className="mr-4">{item.icon}</m.div>
                  </div>
                  <div className="overflow-hidden">
                    <m.div variants={centerLinkVars}>
                     <Link href={`mailto:${item.mail}`} title="kliknij aby napisać maila">{item.mail}</Link>
                     <Link href={`tel:${item.href}`} title="kliknij aby do nas zadzwonić">{item.phone1}</Link>
                     <Link href={`tel:${item.href}`} title="kliknij aby do nas zadzwonić">{item.phone2}</Link>
                    </m.div>
                  </div>
                </div>
              ))}
            </m.div>
            <div className="overflow-hidden xl:px-11">
              <SocialsTitle />
            </div>
            <div className="overflow-hidden flex xl:pl-11 xl:py-5 [&>*:last-child]:ml-4">
              {MailAndPhones.map((item) => (
                <m.div variants={centerLinkVars} key={item.id} className="social-box ">
                  <Link className="text-2xl" title={item.title} href={item.href}>{item.socIcon}</Link>
                </m.div>
              ))}
            </div>
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
};
