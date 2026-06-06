"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl"
          >
            Young Professionals <span className="text-primary">Helping You Grow.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl"
          >
            We are a dedicated team of Chartered Accountants, Software Developers, MBAs, and other professionals, committed to delivering innovative solutions tailored to your business growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-primary border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-full h-auto rounded-xl object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" 
                alt="Analymate Team" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
