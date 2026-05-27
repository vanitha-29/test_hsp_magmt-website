import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic Blur Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516715667182-c8e21f1ae6f4?auto=format&fit=crop&q=80&w=1600"
          alt="Atmospheric"
          className="w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-sky-400 text-6xl font-serif mb-8 block opacity-50">“</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight italic mb-8">
            Some bond become <br />
            <span className="text-white">a part of our soul.</span>
          </h2>
          <div className="w-24 h-[1px] bg-sky-500/50 mx-auto mb-8" />
          <p className="text-sky-300/60 uppercase tracking-[0.4em] text-xs">A Bond Beyond Time</p>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-[1px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full blur-[0.5px] animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default QuoteSection;
