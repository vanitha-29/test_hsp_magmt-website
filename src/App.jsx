import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Timeline from './components/Timeline';
import QuoteSection from './components/QuoteSection';
import FinalLanding from './components/FinalLanding';
import { Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from './assets/photos/14e1758c-2a0e-406b-9c5c-62ea38419492.png';
import img2 from './assets/photos/pexels-photo-1024960.jpeg';
import img3 from './assets/photos/image2.png';
import img4 from './assets/photos/picture2.jpg';


function App() {
  const [loading, setLoading] = useState(true);
  const [showFinal, setShowFinal] = useState(false);

  // Stories Data
  const stories = [
    {
      title: "The First Message",
      story: "It started with a simple 'Hii'. I remember you saying 'nee romba nalla ponnu nu sonnanga athan'... that was the moment I knew you were different. A tiny spark that turned into our entire world.",
      imageUrl: img1,
      reverse: false
    },
    {
      title: "The Funniest Memories",
      story: "From that time we couldn't stop laughing in the library to our failed attempt at cooking—every moment with you is a comedy special. You make the mundane feel extraordinary.",
      imageUrl: img3,
      reverse: true
    },
    {
      title: "The Hard Times",
      story: "We didn't just survive the storms; we learned to dance in the rain. Your strength inspired me, and your presence was the only light I needed in the dark.",
      imageUrl:img4,
      reverse: false
    },
    {
      title: "Why You Are Special",
      story: "In a world of constant change, you are my constant. You see the parts of me I try to hide and love them anyway. That is a rare kind of magic.",
      imageUrl: img2,
      reverse: true
    }
  ];

  if (loading) {
    return <LoadingScreen onFinished={() => setLoading(false)} />;
  }

  return (
    <div className="relative bg-black min-h-screen text-white font-sans selection:bg-sky-400 selection:text-black">
      <AnimatePresence mode="wait">
        {!showFinal ? (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Home/Hero */}
            <Hero onOpenSurprise={() => {
              const el = document.getElementById('stories');
              el?.scrollIntoView({ behavior: 'smooth' });
            }} />

            {/* Story Sections */}
            <div id="stories">
              {stories.map((s, i) => (
                <StorySection key={i} {...s} />
              ))}
            </div>

            {/* Interactive Timeline */}
            <Timeline />

            {/* Quote Section */}
            <QuoteSection />

            {/* Hidden Surprise Section */}
            <section className="py-24 flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden">
              {/* Secret Pulse Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full animate-pulse-slow" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center px-6 relative z-10"
              >
                {/* Sparkle Icon with Orbit Effect */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-sky-500/20"
                >
                  <Sparkles className="text-sky-400 animate-pulse" />
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 2 }}
                  className="text-sky-300/60 font-serif italic text-sm mb-4 tracking-[0.3em] uppercase"
                >
                  Wait... can you feel it?
                </motion.p>

                <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
                  The most magical part <br /> 
                  <span className="text-white">is still hidden.</span>
                </h2>

                <div className="relative group">
                  {/* Outer Glow for Button */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'instant' });
                      setShowFinal(true);
                    }}
                    className="relative px-12 py-5 bg-black border border-white/10 rounded-full overflow-hidden transition-all duration-500"
                  >
                    <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-3 text-sky-100">
                      Step Into Our Magic
                      <Heart size={16} fill="currentColor" className="text-sky-400 group-hover:animate-ping" />
                    </span>
                    
                    {/* Inner Hover Slide Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </motion.button>
                </div>

                <motion.p
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mt-8 text-white/20 text-[10px] tracking-widest uppercase"
                >
                  A final gift for a special soul
                </motion.p>
              </motion.div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
              <p className="text-white/30 text-sm italic font-serif">
                “A friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words.”
              </p>
              <div className="mt-8 opacity-20 text-[10px] tracking-[0.4em] uppercase">
                Crafted with love &copy; 2024
              </div>
            </footer>
          </motion.div>
        ) : (
          <FinalLanding key="final-surprise" />
        )}
      </AnimatePresence>

      {/* Persistent Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-black">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-sky-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-sky-900/5 to-transparent" />
      </div>
    </div>
  );
}

export default App;
