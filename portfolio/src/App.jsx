import MainHeader from './components/MainHeader/MainHeader';
import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/ServicePage/ServicePage';
import Projects from './components/ProjectPage/Project';
import About from './components/AboutPage/About';
import Footer from './components/FooterPage/Footer';

import { useState } from 'react';
import { FiClipboard, FiDownload, FiArrowUp } from 'react-icons/fi';
import Testimonies from './components/Testimonies/Testimonies';

function App() {
  const [HomeMenuOpen, setAboutMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText("connect.anandhukannan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};


  return (
    <div className="bg-black text-white relative">
      <MainHeader setHomeMenuOpen={setAboutMenuOpen} />

      <div className={`flex flex-col justify-center items-center ${HomeMenuOpen ? 'filter blur-sm' : ''}`}>
        <LandingPage />
        <Services />
        <Projects />
        <About />
        <Testimonies />
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50">
        {/* Copy Email */}
        <button
          onClick={handleCopyEmail}
          className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white p-2 rounded-full transition shadow"
          title="Copy Email"
        >
          <FiClipboard size={18} />
        </button>
        {copied && (
          <span className="text-xs text-gray-400 mt-[-4px]">Copied</span>
        )}

        {/* Download CV */}
        <a
          href="/cv.pdf"
          download
          className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white p-2 rounded-full transition shadow"
          title="Download CV"
        >
          <FiDownload size={18} />
        </a>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white p-2 rounded-full transition shadow"
          title="Back to Top"
        >
          <FiArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;
