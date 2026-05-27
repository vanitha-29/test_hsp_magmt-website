import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = ({ title, story, imageUrl, reverse = false }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="py-12 flex items-center px-6 md:px-12 lg:px-24">
      <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
        {/* Image Part */}
        <motion.div 
          style={{ y }}
          className="w-full md:w-1/2 aspect-[4/3] relative"
        >
          <div className="absolute inset-0 bg-sky-500/10 blur-3xl -z-10 rounded-full" />
          <div className="w-full h-full glass p-2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={imageUrl || `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800`} 
              alt={title}
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Content Part */}
        <motion.div 
          style={{ opacity }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            {title}
          </h2>
          <div className="w-12 h-1 bg-sky-400" />
          <p className="text-lg text-white/70 leading-relaxed font-light">
            {story}
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-4 text-sky-300 italic font-serif"
          >
            Memories that last forever...
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StorySection;
