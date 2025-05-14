
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const photoItems: PhotoItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Family photo",
    width: 2,
    height: 2
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Dad's birthday party",
    width: 1,
    height: 1
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Fishing trip",
    width: 1,
    height: 1
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    alt: "Hiking adventure",
    width: 1,
    height: 2
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    alt: "Backyard barbecue",
    width: 1,
    height: 1
  }
];

const PhotoCollage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Function to generate random rotation for images
  const getRandomRotation = (id: number) => {
    // Use the photo ID to generate a consistent random rotation
    // between -5 and 5 degrees
    return ((id * 9) % 10) - 5;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-3 text-center text-gray-800"
        >
          Photo Collage
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center mb-16 text-gray-600 max-w-2xl mx-auto"
        >
          Our precious memories scattered like snapshots of time
        </motion.p>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {photoItems.map((photo) => (
            <motion.div
              key={photo.id}
              className={`relative overflow-hidden rounded-lg shadow-lg 
                col-span-${photo.width} row-span-${photo.height}`}
              initial={{ opacity: 0, scale: 0.8, rotate: getRandomRotation(photo.id) }}
              whileInView={{ opacity: 1, scale: 1, rotate: getRandomRotation(photo.id) }}
              transition={{ duration: 0.6, delay: photo.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 10, 
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredId(photo.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === photo.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm">{photo.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
