import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Rotate as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import './Header.scss';

export const Header = ({ toggleMenu }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className='page-header w-full  flex justify-between xl:h-[10vh] font-bold fixed border-b grid-border-clr'>
      <div className="header-box flex items-center justify-center h-full w-[5%] border-r grid-border-clr">
        <Hamburger
          className="z-50"
          onClick={() => {
            toggleMenu();
            setOpen((prevOpen) => !prevOpen);
          }}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div className="header-box flex items-center justify-center h-full w-[10%] border-r grid-border-clr">
        <Link href='#'>O nas</Link>
      </div>
      <div className="header-box flex items-center justify-center h-full w-[15%] border-r grid-border-clr">
        <Link href='#'>Oferta</Link>
      </div>
      <div className="header-box flex items-center justify-center h-full grow border-r grid-border-clr">
        <Link href='/'>Interdom</Link>
      </div>
      <div className="header-box flex items-center justify-center h-full w-[15%] border-r grid-border-clr">
        <Link href='#'>e-kartoteka</Link>
      </div>
      <div className="header-box flex items-center justify-center h-full w-[10%] border-r grid-border-clr">
        <Link href='#'>Kontakt</Link>
      </div>
      <div className="header-box flex items-center justify-center h-full w-[5%] ">
        <FaPhoneAlt className="text-xl" />
      </div>
    </header>
  );
};
