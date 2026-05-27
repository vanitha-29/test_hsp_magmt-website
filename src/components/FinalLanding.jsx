import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Music, Volume2, VolumeX } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from '../assets/photos/Screenshot_2025-08-25-20-48-11-306_com.instagram.android.jpg';

const photos = [
   img1,
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800"
];

const FinalLanding = () => {
  const [musicOn, setMusicOn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6"
    >
      {/* Background Hearts/Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute text-sky-500/20"
          >
            <Heart size={20 + Math.random() * 30} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-sky-500/30 text-sky-400 text-sm mb-6"
          >
            <Sparkles size={14} />
            <span>The Magical Collection</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Memories in <span className="italic">Motion</span></h1>
          <p className="text-white/60 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Every photo holds a thousand whispers of laughter, the strength we gave each other, and the beautiful silence of true understanding.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="mb-32">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="24px">
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: 40, filter: 'blur(15px)', scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    scale: 1,
                    transition: {
                      delay: i * 0.15,
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="relative group"
                >
                  {/* Floating Outer Glow on Hover */}
                  <div className="absolute -inset-2 bg-sky-400/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 0.5, -0.5, 0]
                    }}
                    transition={{
                      duration: 4 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="glass p-2.5 rounded-[1.5rem] overflow-hidden relative z-10 shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                  >
                    <img
                      src={src}
                      alt={`Memory ${i}`}
                      className="w-full h-auto rounded-[1rem] grayscale group-hover:grayscale-0 contrast-125 brightness-110 transition-all duration-1000 ease-in-out"
                    />

                    {/* Soft Light Sweep Animation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>

        {/* Handwritten Style Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {[
            "You are the person I chose, the one I never want to lose, and the person who knows my silence better than my words.",
            "Life brought us together, but our hearts decided to stay. Thank you for being you, every single day.",
            "Through tears and triumphs, you've been the consistent light in my life. I am lucky to call you mairuuuuu.",
            "To many more years of stupid jokes, midnight Calls, and unconditional love. Happy Birthday, Soulmate."
          ].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 rounded-3xl relative group"
            >
              <div className="absolute top-4 right-4 text-sky-500/30 group-hover:text-sky-400 transition-colors">
                <Heart size={24} />
              </div>
              <p className="text-2xl font-serif leading-relaxed italic text-white/90">
                "{msg}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <div className="text-center py-24 mb-12 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12">
              “No matter where life takes us, our Love will always remain one of the most precious parts of my life. Happy Birthday Mairu.”
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center animate-pulse mb-4">
                <Heart className="text-sky-400" fill="currentColor" />
              </div>
              <p className="text-sky-300 font-bold tracking-[0.5em] uppercase text-xs">Forever & Always</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Music Toggle */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass hover:bg-white/10 transition-all shadow-2xl flex items-center gap-3 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 text-xs text-white/70 whitespace-nowrap">
          {musicOn ? 'Surprise Song' : 'Turn on Music'}
        </span>
        {musicOn ? <Volume2 size={20} className="text-sky-400" /> : <VolumeX size={20} className="text-white/50" />}
      </button>
    </motion.div>
  );
};

export default FinalLanding;
