
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthdayCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-birthday-cream">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800"
        >
          A Special Message For You
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            className="relative max-w-lg w-full perspective-1000 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.02 }}
          >
            <AnimatePresence initial={false}>
              {!isOpen ? (
                <motion.div
                  key="front"
                  className="w-full rounded-xl shadow-2xl overflow-hidden"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.8 }}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-96 bg-birthday-gold bg-opacity-20 flex items-center justify-center">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: `${Math.random() * 20 + 5}px`,
                          height: `${Math.random() * 20 + 5}px`,
                          backgroundColor: ['#FFD700', '#FF7E5F', '#6B7FD7', '#5BCEAE'][Math.floor(Math.random() * 4)],
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                    <div className="relative z-10 text-center px-6">
                      <div className="text-4xl font-bold mb-4">Happy Birthday!</div>
                      <div className="text-xl">Click to open your card</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  className="w-full rounded-xl shadow-2xl overflow-hidden bg-white"
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.8 }}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="p-8 h-96 flex flex-col">
                    <h3 className="text-3xl font-bold mb-6 text-birthday-blue">Dear Dad,</h3>
                    <p className="text-lg text-gray-700 mb-8 flex-grow">
                      On your special day, I want to thank you for all the years of wisdom, support, and love. 
                      You've always been there for me through thick and thin, and I'm incredibly grateful to have you as my father.
                      <br /><br />
                      Wishing you health, happiness, and many more beautiful memories together.
                    </p>
                    <p className="text-xl font-medium text-right">With love,<br/>Your Child</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCard;
