import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onFinished }) => {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "A special surprise...",
    "For someone truly important...",
    "Crafting memories...",
    "Our story begins..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1));
    }, 2000);

    if (textIndex === messages.length) {
      clearInterval(timer);
      setTimeout(onFinished, 1000);
    }

    return () => clearInterval(timer);
  }, [textIndex, onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        {textIndex < messages.length && (
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center px-6"
          >
            <h1 className="text-2xl md:text-4xl font-serif italic text-white/90">
              {messages[textIndex]}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-[1px] bg-sky-400 mt-4 mx-auto"
            />
            {/* Music Bars Animation */}
            <div className="flex justify-center gap-1 mt-6 h-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="w-[2px] bg-sky-400/50"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
