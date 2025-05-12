
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 mb-4 overflow-hidden animate-fade-in">
          <div className="bg-genezio-lavender p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl mr-2">🤖</span>
              <h3 className="font-bold">GenezioBot</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-genezio-light transition-colors"
              aria-label="Close chatbot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-genezio-light rounded-lg p-3 mb-3 max-w-[80%]">
              <p className="text-sm">👋 Hi! I'm Genezio Bot — your virtual guide. Ask me about programs, deadlines, student life, or how to apply!</p>
            </div>
          </div>
          <div className="p-3 border-t flex">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow border rounded-l-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-genezio-lavender"
            />
            <button 
              className="bg-genezio-lavender text-white p-2 rounded-r-lg hover:bg-genezio-accent"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-genezio-lavender hover:bg-genezio-accent flex items-center justify-center shadow-xl"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <img 
            src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
            alt="Chatbot icon" 
            className="w-8 h-8"
          />
        )}
      </Button>
    </div>
  );
};
