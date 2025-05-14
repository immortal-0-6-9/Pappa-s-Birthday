
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-birthday-cream text-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="confetti absolute"
            style={{
              backgroundColor: ['#FFD700', '#FF7E5F', '#6B7FD7', '#5BCEAE'][Math.floor(Math.random() * 4)],
              left: `${Math.random() * 100}%`,
              top: `-10px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-3xl"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.5 
          }}
          className="text-5xl md:text-7xl font-bold mb-6 text-birthday-blue"
        >
          Happy Birthday Dad!
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Celebrating all the wonderful memories we've shared together
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-birthday-orange text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-lg"
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Memories
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce-slow">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
