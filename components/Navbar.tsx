import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PlayCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'ראשי' },
    { path: '/install', label: 'שלב 1: התקנה' },
    { path: '/content', label: 'שלב 2: תוכן' },
    { path: '/subtitles', label: 'שלב 3: עברית' },
    { path: '/real-debrid', label: 'VIP: צפייה חלקה', highlight: true },
    { path: '/support', label: 'עזרה' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <PlayCircle className="w-8 h-8 text-neon group-hover:text-white transition-colors" />
            <span className="font-bold text-xl tracking-wide">Stremio<span className="text-neon">Guide</span></span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                  ${isActive 
                    ? link.highlight ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-neon/20 text-neon border border-neon/30' 
                    : link.highlight ? 'text-yellow-500 hover:text-yellow-300 hover:bg-yellow-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-b border-white/10 absolute w-full left-0 top-16 md:top-20 shadow-2xl animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium 
                  ${isActive 
                    ? link.highlight ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-neon/20 text-neon border border-neon/30' 
                    : link.highlight ? 'text-yellow-500 hover:text-yellow-300 hover:bg-yellow-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};