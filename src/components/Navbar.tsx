import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from '../assets/images/web_builders_logo_1780131687033.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled || isOpen
          ? 'bg-[#03050c]/90 backdrop-blur-xl border-b border-slate-800/40 py-2.5 shadow-sm'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="font-display font-semibold text-[17px] md:text-lg tracking-tight text-white flex items-center space-x-2.5 hover:opacity-80 transition-opacity">
          <span className="w-8 h-8 md:w-9 md:h-9 rounded-[8px] flex items-center justify-center overflow-hidden">
            <img 
              src={logoImage} 
              alt="Web Builders Logo" 
              className="w-full h-full object-cover"
            />
          </span>
          <span>WEB BUILDERS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => window.location.reload()}
            className="text-slate-400 hover:text-white transition-colors group p-1 ml-4"
            aria-label="Refresh website"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="text-slate-400 hover:text-white transition-colors group p-1"
            aria-label="Refresh website"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </button>
          <button
            className="text-slate-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[56px] z-30 bg-[#03050c]/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[64px] right-4 sm:right-5 z-40 md:hidden flex flex-col w-[85%] max-w-[320px] bg-[#0A0D18] border border-slate-800/60 rounded-[16px] shadow-2xl shadow-black/50 px-3 py-4"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative flex items-center py-3 px-3.5 text-[15px] font-sans font-medium text-slate-300 hover:text-white active:text-white hover:bg-slate-800/50 active:bg-slate-800/50 rounded-lg transition-all duration-300"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-blue-500 group-hover:h-[50%] active:h-[50%] rounded-r-full transition-all duration-300 opacity-0 group-hover:opacity-100 active:opacity-100"></span>
                    <span className="ml-2 tracking-wide">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
