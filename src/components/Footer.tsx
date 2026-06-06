import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FaTwitter as Twitter, FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Newsletter Section */}
        <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between border border-slate-700/50">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Join Our Newsletter</h3>
            <p className="text-slate-400">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          </div>
          <form className="w-full md:w-auto flex max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-l-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">Analymate Solutions</span>
            </Link>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Zenith Co Working, 7th Floor, Currency Tower</p>
              <p>VIP Chowk, Raipur</p>
              <p className="pt-2"><strong className="text-slate-200">Phone:</strong> +91 8962861774</p>
              <p><strong className="text-slate-200">Email:</strong> asfiya@analymate.in</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#hero" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Home</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> About us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Terms of service</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Business Analysis of Real Estate</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Business Analysis of Hospitals</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Inventory Holding analysis</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-primary" /> Internal Control</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <p className="text-sm text-slate-400 mb-6">Connect with us on social media for updates and industry insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© Copyright <strong className="text-slate-300 font-semibold">Analymate Solutions</strong>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
