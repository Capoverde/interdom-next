"use client"
import { Header } from "./components/Header/Header";
import { HomePage } from "../Home/HomePage";
import { About } from '../About/AboutPage'
import { Offer } from '../Offer/Offer'
import { ContactPage } from "../ContactPage/ContactPage";
import { Footer } from './components/Footer/Footer'
import { ScoreBanner } from "./components/ScoreBanner/ScoreBanner";
import { Map } from "./components/Map/Map"


export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <ScoreBanner />
      <About />
      <Offer />
      <ContactPage />
      <Map />
      <Footer />
    </>
  );
}
