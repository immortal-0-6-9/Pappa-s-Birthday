
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Father and son fishing together"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Family gathering at home"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Dad's birthday celebration last year"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    alt: "Family vacation"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    alt: "Dad's favorite hiking spot"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Weekend barbecue at home"
  },
];

const PhotoGallery: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-3 text-center text-gray-800"
        >
          Photo Gallery
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
        >
          A collection of our favorite moments together
        </motion.p>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className="photo-frame aspect-square"
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
