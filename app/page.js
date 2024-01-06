"use client"
import Navbar from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Navbar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className='w-full h-screen flex'>
      <div className="col h-full w-[25.1%]
                      border-r border-l  ml-[4.9%] grid-border-clr">
        <div className="row w-full h-1/2 xl:px-8 flex items-center">
            <header className='block'>
              <h1 className="title text-slate-950 text-[4rem]">
                  Interdom<span className='text-2xl'>s.c.</span>
              </h1>
              <h2 className="subtitle text-[1.3rem]">
                  Zarządzanie Nieruchomościami
              </h2>
            </header>
        </div>
        <div className="row w-full h-1/2 bg-gray-300">
             
        </div>                
      </div>
      <div className="col h-full grow">
        <div className="h-1/4 w-full"></div>
        <div className="imageBox bg-gray-300 h-3/4 w-[90%] mx-auto my-auto"></div>
      </div>
      <div className="col h-full w-[25.1%] border-l border-r mr-[5%] grid-border-clr">
        <div className="w-full h-[15%]"></div>
        <div className="w-full h-[85%] bg-gray-300"></div>
      </div>
    </div>

    </>
  );
}
