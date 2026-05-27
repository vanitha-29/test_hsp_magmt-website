import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: "2022", title: "The First Message", detail: "It all started with a simple 'Hii'. 'Nee romba nalla ponnu nu sonnanga athan'—those words were the start of our beautiful journey." },
  { year: "2023", title: "The First Phone Call", detail: "Koopda matanu nenachen 😅. I still remember you saying, 'En voice konjam kevalama than irukum, throat pain athan'—it was the sweetest sound to me." },
  { year: "2023", title: "The College Meetup", detail: "Our convocation. Taking the risk just to see you for the first time in college. It was the most blissful moment of my life." },
  { year: "2024", title: "Long Distance Love", detail: "Our long distance journey started. Waiting for your messages and those precious 10-minute calls that made my whole day blissful." },
  { year: "2025", title: "More Fight, More Love", detail: "We had our ups and downs—more fights, but always leading to even more love. We grew stronger through it all." },
  { year: "2026", title: "The Deep Understanding", detail: "A stage of pure understanding. No words needed, just the peace of knowing we're always there for each other. Here's to us." }
];

const Timeline = () => {
  return (
    <section className="py-12 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-serif text-center mb-16">Our Journey Together</h2>
        
        {/* The Center Line */}
        <div className="absolute left-1/2 top-[120px] bottom-0 w-[2px] bg-gradient-to-b from-sky-400/50 via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="w-full md:w-1/2 flex justify-center md:justify-end md:even:justify-start">
                <div className={`glass-dark p-8 rounded-2xl max-w-sm relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-sky-400 font-bold mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                  
                  {/* Glowing Dot for Desktop */}
                  <div className={`absolute top-1/2 hidden md:block w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)] -translate-y-1/2 ${index % 2 === 0 ? '-right-[50px]' : '-left-[50px]'}`} />
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Timeline;
