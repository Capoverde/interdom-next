import { FaPhoneAlt } from 'react-icons/fa';
import { Rotate as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from "../Navbar/Navbar"
import './Header.scss';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const phones = {
    phone1: '+486308437'
  };

  return (
    <header className={`fixed page-header w-full flex justify-between xl:h-[10vh]  border-b grid-border-clr 
    z-[50] ${isOpen ? 'menu-open' : 'menu-closed'}`}>
      {/* NAVBAR */}
      <Navbar isOpen={isOpen} toggleMenu={handleToggle} />
     {/* HAMBURGER */}
      <div className={`z-[100] header-box hamburger-box flex items-center justify-center h-full w-[5%] 
      //border-r 
      //grid-border-clr 
      ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Hamburger
          className="z-[100] sticky"
          toggled={isOpen}
          toggle={handleToggle}
        />
      </div>
      <div className={`header-box flex items-center justify-center h-full w-[20%] md:w-[10%] border-r border-l grid-border-clr ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link href='#'>O nas</Link>
      </div>
      <div className={`header-box flex items-center justify-center h-full w-[15%] border-r grid-border-clr ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link href='#'>Oferta</Link>
      </div>
      <div className={`header-box flex items-center justify-center h-full grow border-r grid-border-clr ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link href='/'>Interdom</Link>
      </div>
      <div className={`header-box flex items-center justify-center h-full w-[15%] border-r grid-border-clr ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link href='#'>e-kartoteka</Link>
      </div>
      <div className={`header-box flex items-center justify-center h-full w-[10%] border-r grid-border-clr ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link 
          href='/ContactPage/Contact'
        >Kontakt</Link>
      </div>
      <div className={`header-box  h-full w-[5%] ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <Link 
          href={`tel:${phones.phone1}`}
          className='w-full h-full flex items-center justify-center'
        >
          <FaPhoneAlt className="text-xl" />
        </Link>
      </div>
    </header>
  );
};
