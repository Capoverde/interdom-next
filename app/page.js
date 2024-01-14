"use client"
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { HomePage } from "./pages/Home/HomePage";
import { ScoreBanner } from './components/ScoreBanner/ScoreBanner'
import { About } from './pages/About/AboutPage'
import { Offer } from './pages/Offer/Offer'
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Footer } from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <ScoreBanner />
      <About />
      <Offer />
      <ContactPage />
      <Footer />
    </>
  );
}
