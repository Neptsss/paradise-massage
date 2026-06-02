import { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Service from './sections/Service';
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  useEffect(()=> {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, [])
  return (
    <div className='p-10'>
      <p className="uppercase font-bold text-secondary m:text-5xl font-display text-3xl">paradise<span className="text-secondary">.</span></p>
      <Hero />
      <Navbar />
      <Home />
      <Service />
      <Footer />
    </div>
  )
}