import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "O nas", href: "/" },
  { title: "Oferta", href: "/" },
  { title: "e-kartoteka", href: "/" },
  { title: "Contact", href: "/" },
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
      y: "30vh",
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

  const MobileNavLink = ({ title, href }) => {
    return (
      <motion.div variants={mobileLinkVars} className="text-5xl uppercase text-gray-200">
        <Link href={href}>{title}</Link>
      </motion.div>
    );
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2 ">
        <div
          className="cursor-pointer lg:hidden text-md text-gray-200"
          onClick={() => {
            toggleMenu();
          }}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-slate-950 text-gray-200 p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md text-gray-200"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {navLinks.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <MobileNavLink title={link.title} href={link.href} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
