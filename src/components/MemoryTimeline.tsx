
import React from 'react';
import { motion } from 'framer-motion';

interface Memory {
  id: number;
  year: string;
  title: string;
  description: string;
  imageSrc: string;
}

const memories: Memory[] = [
  {
    id: 1,
    year: "1990s",
    title: "The Early Years",
    description: "When dad taught me how to ride a bike for the first time.",
    imageSrc: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    id: 2,
    year: "2000s",
    title: "School Days",
    description: "Dad always helping with homework and science projects.",
    imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 3,
    year: "2010s",
    title: "Adventures Together",
    description: "Our first camping trip to the mountains.",
    imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 4,
    year: "Recent",
    title: "Special Moments",
    description: "The fishing trip where Dad caught the biggest fish ever!",
    imageSrc: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
];

const MemoryTimeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">Memory Timeline</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A journey through the years with my amazing father</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-birthday-blue opacity-20 hidden md:block"></div>

          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <div className={`memory-card max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <img 
                    src={memory.imageSrc}
                    alt={memory.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-birthday-blue bg-opacity-20 text-birthday-blue rounded-full text-sm font-medium mb-3">
                      {memory.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{memory.title}</h3>
                    <p className="text-gray-600">{memory.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex md:w-1/2 justify-center">
                <div className="w-5 h-5 rounded-full bg-birthday-blue shadow-lg relative z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
