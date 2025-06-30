
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Research', path: '/research' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Knowledge Base', path: '/knowledge-base' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-genezio-primary">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl mr-2">🎓</span>
              <div>
                <h1 className="text-xl md:text-2xl font-merriweather font-bold text-genezio-charcoalGray">
                  Genezio University
                </h1>
                <div className="text-xs text-genezio-primary font-semibold">Excellence • Innovation • Leadership</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-genezio-primary ${
                  isActive(link.path) ? 'text-genezio-primary border-b-2 border-genezio-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-primary" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-genezio-charcoalGray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium p-2 rounded-md ${
                    isActive(link.path) 
                      ? 'bg-genezio-light text-genezio-primary' 
                      : 'text-gray-700 hover:bg-genezio-light hover:text-genezio-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="btn-primary w-full mt-2" asChild>
                <Link to="/apply" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
