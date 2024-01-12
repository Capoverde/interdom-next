import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import './Navbar.scss'

const navLinks = [
  { title: "Home", href: "/" },
  { title: "O nas", href: "/" },
  { title: "Oferta", href: "/" },
  { title: "e-kartoteka", href: "/" },
  { title: "Contact", href: "/ContactPage/Contact.jsx" },
];

const contactItems = [
  {id: 1, day: "Poniedziałek", hours: "09:00 - 16:00"},
  {id: 2, day: "Wtorek", hours: "09:00 - 17:00"},
  {id: 3, day: "Środa", hours: "Dzień bez przyjęć interesantów"},
  {id: 4, day: "Czwartek", hours: "09:00 - 16:00"},
  {id: 5, day: "Piątek", hours: "09:00 - 16:00"},
  {id: 6, address: "ul. Rewolucji 1905 r. Nr 7, lok. 3/3a"},
]

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
        delay: 1,
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
      y: "10vh",
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
      <m.div variants={centerLinkVars} className={`navLink text-5xl mt-8 uppercase relative text-gray-200 `}>
        <Link href={href} onClick={() => {toggleMenu();}}>
          <span className="NavLinkSpan">{title}</span>
        </Link>
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
                      bg-slate-950 text-gray-200 z-[50]`}
          >
            {/* ----------------- LEFT ------------------ */}
            <div className="w-full h-full grid place-content-center flex-1 xl:border-r border-[#3e3e3e] xl:px-11">
            <div className="address mb-10 w-full">
                <h3 className="text-3xl  uppercase" >
                  Adres biura:
                </h3>
                {contactItems.map((address, id) => (
                      <address className="mt-3" key={address.id}>
                        <Link
                         href="https://www.google.com/maps/place/Łódź, ul. Rewolucji 1905 r. nr 7"
                         target="_blank"
                         title="kliknij aby sprawdzić w google maps"
                        >
                         {address.address}
                        </Link>
                      </address>
                  ))}                
              </div>
              <h3 className="text-3xl xl:mb-6  uppercase">dni i godziny pracy biura:</h3>
              {contactItems.map((item) =>(
                <div className="flex justify-between" key={item.id}>
                    <div className="py-2">{item.day}</div>
                    <div className="py-2">{item.hours}</div>
                </div>
              ))}

            </div>
            {/* ----------------- CENTER ------------------ */}
            <div className="h-full flex-1 flex-col border-r border-[#3e3e3e] px-8">
              <m.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full  items-center gap-10 md:mb-12 xl:mb-12"
              >
                {navLinks.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <NavLinks title={link.title} href={link.href} />
                  </div>
                ))}
              </m.div>
            </div>
            <div className="w-full h-full flex-1"></div>
          </m.nav>
        )}
      </AnimatePresence>
  );
};

