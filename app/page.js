"use client"
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/Home/HomePage";
import { About } from './pages/About/AboutPage'
import { Offer } from './pages/Offer/Offer'
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Footer } from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Offer />
      <ContactPage />
      <Footer />
    </>
  );
}
