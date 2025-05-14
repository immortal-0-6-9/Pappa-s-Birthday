
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import PhotoGallery from '@/components/PhotoGallery';
import MemoryTimeline from '@/components/MemoryTimeline';
import BirthdayCard from '@/components/BirthdayCard';
import PhotoCollage from '@/components/PhotoCollage';
import Footer from '@/components/Footer';
import { motion, useAnimationControls } from 'framer-motion';

const Index = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const showConfetti = () => {
      controls.start({
        opacity: [0, 1, 0],
        y: ['0%', '100%'],
        transition: { duration: 5 }
      });
    };

    // Start confetti when the page loads
    showConfetti();

    // Set a timer to show confetti every 15 seconds
    const intervalId = setInterval(showConfetti, 15000);

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <div className="bg-celebration min-h-screen">
      {/* Confetti animation overlay */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none"
          animate={controls}
          style={{
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            backgroundColor: ['#FFD700', '#FF7E5F', '#6B7FD7', '#5BCEAE'][Math.floor(Math.random() * 4)],
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
        />
      ))}

      <Header />
      <PhotoGallery />
      <MemoryTimeline />
      <BirthdayCard />
      <PhotoCollage />
      <Footer />
    </div>
  );
};

export default Index;
