"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { FaTwitter as Twitter, FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 hidden md:block text-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:asfiya@analymate.in" className="flex items-center hover:text-primary transition-colors">
              <Mail size={14} className="mr-2" /> asfiya@analymate.in
            </a>
            <span className="flex items-center">
              <Phone size={14} className="mr-2" /> +91 8962861774
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary tracking-tight">Analymate Solutions</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-slate-600 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-600 hover:text-primary focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg border-b border-slate-100 absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-3 px-3 text-slate-600">
                <a href="mailto:asfiya@analymate.in" className="flex items-center text-sm">
                  <Mail size={16} className="mr-2 text-primary" /> asfiya@analymate.in
                </a>
                <span className="flex items-center text-sm">
                  <Phone size={16} className="mr-2 text-primary" /> +91 8962861774
                </span>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-slate-400 hover:text-primary"><Twitter size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-primary"><Facebook size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-primary"><Instagram size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-primary"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
