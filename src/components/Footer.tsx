
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Happy Birthday, Dad!
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Wishing you many more years of happiness, health, and wonderful memories together.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-birthday-gold text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </motion.button>
          
          <div className="mt-12 pt-8 border-t border-gray-800 opacity-70 text-sm">
            &copy; {currentYear} Made with ❤️ for Dad's Birthday
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
