"use client";

import { motion } from 'framer-motion';
import { FaTwitter as Twitter, FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Adil Khan',
    role: 'CTO',
    image: 'https://img.freepik.com/free-vector/cute-man-working-laptop-with-coffee-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3869.jpg',
  },
  {
    name: 'Asfiya Khan',
    role: 'Founder',
    image: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg',
  },
  {
    name: 'Simran',
    role: 'Kuch toh hai',
    image: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg',
  },
  {
    name: 'Mamma',
    role: 'OTP Executive',
    image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034079.jpg',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our Hardworking <span className="text-primary">Team</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who work tirelessly to bring innovative solutions to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Social Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-slate-100 transition-colors transform hover:scale-110">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-slate-100 transition-colors transform hover:scale-110">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-slate-100 transition-colors transform hover:scale-110">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-slate-100 transition-colors transform hover:scale-110">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
