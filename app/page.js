"use client"
import Navbar from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    console.log('~~~~~~~~click w hamburger~~~~~~~~~~');
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Navbar isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
