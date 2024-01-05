import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

const navLinks = [
  { title: "O nas", href: "/" },
  { title: "Oferta", href: "/" },
  { title: "e-kartoteka", href: "/" },
  { title: "Contact", href: "/ContactPage/Contact.jsx" },
];

const Navbar = ({ toggleMenu, isOpen }) => {
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
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
      <m.div variants={mobileLinkVars} className="text-5xl mt-8 uppercase text-gray-200">
        <Link href={href} onClick={() => {toggleMenu();}}>{title}</Link>
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
            className="fixed left-0 top-[9%] w-full h-screen origin-top bg-slate-950 text-gray-200 p-10"
          >
            <div className="flex h-full flex-col">
              <m.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {navLinks.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <NavLinks title={link.title} href={link.href} />
                  </div>
                ))}
              </m.div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
  );
};

export default Navbar;

