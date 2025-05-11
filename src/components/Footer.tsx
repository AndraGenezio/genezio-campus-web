
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-genezio-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-3xl mr-2">🎓</span>
              <h2 className="text-xl font-merriweather font-bold">Genezio University</h2>
            </Link>
            <p className="text-sm mb-4">
              Empowering Minds, Shaping Futures
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-genezio-lavender transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-genezio-lavender transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-genezio-lavender transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-genezio-lavender transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-genezio-lavender transition-colors">Home</Link></li>
              <li><Link to="/admissions" className="hover:text-genezio-lavender transition-colors">Admissions</Link></li>
              <li><Link to="/academics" className="hover:text-genezio-lavender transition-colors">Academics</Link></li>
              <li><Link to="/campus-life" className="hover:text-genezio-lavender transition-colors">Campus Life</Link></li>
              <li><Link to="/knowledge-base" className="hover:text-genezio-lavender transition-colors">Knowledge Base</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-genezio-lavender transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-genezio-lavender transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-genezio-lavender transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-genezio-lavender transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-genezio-lavender transition-colors">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic space-y-2">
              <p>123 Campus Drive</p>
              <p>Berkeley, CA 94720</p>
              <p>+1 (555) 123-4567</p>
              <p>info@genezio.edu</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Genezio University. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-genezio-lavender transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-genezio-lavender transition-colors">Terms of Use</a>
              <a href="#" className="text-sm hover:text-genezio-lavender transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="flex items-center justify-center text-sm">
            <span className="mr-2">💬</span>
            Need help? Ask GenezioBot – our 24/7 assistant.
          </p>
        </div>
      </div>
    </footer>
  );
};
