"use client"
import Navbar from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import HomePage from "./Home/HomePage";
import ScoreBanner from './components/ScoreBanner/ScoreBanner'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Navbar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <HomePage />
      <ScoreBanner />
    </>
  );
}
