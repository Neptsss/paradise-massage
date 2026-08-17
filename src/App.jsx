import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LayananDetail from './pages/LayananDetail';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, [])
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto p-5">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan/:layananName" element={<LayananDetail />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}