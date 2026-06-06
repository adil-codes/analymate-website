"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, ArrowRight, TrendingDown, Coins, AlertCircle, 
  Calculator, Laptop, PackageSearch, MapPin, Mail, FileCheck2, 
  Banknote, CheckSquare, Store, Activity, ShieldCheck, Stethoscope, 
  Receipt, HeartPulse, ClipboardList 
} from 'lucide-react';
import { FaTwitter as Twitter, FaLinkedin as Linkedin } from 'react-icons/fa';

const servicesData = {
  'general': [
    { title: 'Revenue_Leakage', icon: <TrendingDown/>, color: 'text-purple-400', desc: 'Systematic analysis of department metrics to eliminate resource drain and maximize throughput.' },
    { title: 'Working_Capital', icon: <Coins/>, color: 'text-blue-400', desc: 'Identify and address areas where working capital is inefficiently tied up, improving cash flow.' },
    { title: 'Material_Discrepancies', icon: <AlertCircle/>, color: 'text-pink-400', desc: 'Uncover significant discrepancies in business processes for enhanced control and accuracy.' },
    { title: 'Interest_Recalc', icon: <Calculator/>, color: 'text-cyan-400', desc: 'Verify interest calculations by Banks/NBFCs to ensure compliance and prevent overpayment.' },
    { title: 'Tech_Deploy', icon: <Laptop/>, color: 'text-indigo-400', desc: 'Suggest and guide the implementation of technology-driven solutions across departments.' },
    { title: 'Stock_Audit', icon: <PackageSearch/>, color: 'text-teal-400', desc: 'Conduct thorough stock audits to ensure inventory accuracy and minimize discrepancies.' },
  ],
  'real-estate': [
    { title: 'Transaction_Trail', icon: <FileCheck2/>, color: 'text-purple-400', desc: 'Audit of indent, quotations, POs, and material grading to prevent overbilling.' },
    { title: 'Contractor_Payment', icon: <Banknote/>, color: 'text-blue-400', desc: 'Verify contractor payment releases against agreed rates and contractual terms.' },
    { title: 'Contract_Adherence', icon: <CheckSquare/>, color: 'text-pink-400', desc: 'Ensure full compliance with contractor agreements, including penalty levies.' },
    { title: 'Store_Records', icon: <Store/>, color: 'text-cyan-400', desc: 'Trace items in store records to confirm receipt of paid materials and accuracy.' },
    { title: 'Issue_Tracking', icon: <MapPin/>, color: 'text-indigo-400', desc: 'Verify the authenticity of material issues from stores ensuring legitimate use.' },
    { title: 'BOM_Consumption', icon: <Activity/>, color: 'text-teal-400', desc: 'Compare material consumption against BOM/BOQ to detect discrepancies.' },
    { title: 'Capital_Blockage', icon: <Coins/>, color: 'text-yellow-400', desc: 'Highlight working capital inefficiencies from over-ordering and delays.' },
    { title: 'Tech_Measures', icon: <Laptop/>, color: 'text-rose-400', desc: 'Recommend implementing technology solutions to improve operational efficiency.' },
    { title: 'Interest_Recalc', icon: <Calculator/>, color: 'text-emerald-400', desc: 'Recalculate interest on working capital and term loans.' },
    { title: 'Sales_Recovery', icon: <TrendingDown/>, color: 'text-lime-400', desc: 'Analyze sales recovery processes to identify collection delays.' },
    { title: 'Internal_Control', icon: <ShieldCheck/>, color: 'text-fuchsia-400', desc: 'Provide insights on record-keeping inefficiencies and internal weaknesses.' },
  ],
  'hospital': [
    { title: 'Revenue_Leakage', icon: <Stethoscope/>, color: 'text-purple-400', desc: 'Trace and address revenue leakages in OPD, bed charges, and other streams.' },
    { title: 'Expense_Overbilling', icon: <Receipt/>, color: 'text-blue-400', desc: 'Identify and rectify overbilling in expenses such as pharmacy and equipment.' },
    { title: 'Equip_Verification', icon: <HeartPulse/>, color: 'text-pink-400', desc: 'Conduct verification of equipment and inventory to prevent fraud.' },
    { title: 'Internal_Controls', icon: <ShieldCheck/>, color: 'text-cyan-400', desc: 'Review doctor fees, staff salaries, and overall controls to ensure integrity.' },
    { title: 'Interest_Recalc', icon: <Calculator/>, color: 'text-indigo-400', desc: 'Recalculate interest charged by Banks/NBFCs on working capital.' },
    { title: 'Stock_Control', icon: <ClipboardList/>, color: 'text-teal-400', desc: 'Perform stock audits to eliminate inventory discrepancies.' },
  ]
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* ---------------- NAVBAR (Dark Bordered) ---------------- */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="cursor-pointer group flex items-center">
            <span className="text-2xl font-black text-white tracking-tight">
              Analymate<span className="text-purple-500 font-light drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Solutions</span>
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Team', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 font-medium hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+918962861774" className="text-slate-400 hover:text-white flex items-center text-sm font-medium transition-colors">
              <Phone className="w-4 h-4 mr-2" /> +91 8962861774
            </a>
            <a href="#contact" className="px-6 py-2 border border-purple-500 text-purple-400 font-medium rounded hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
              Initialize
            </a>
          </div>
          <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ---------------- HERO (Neon Tech) ---------------- */}
      <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-purple-400 tracking-wider mb-8">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span>SYSTEM_READY</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                  Data-Driven <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Growth Matrix.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Deploying top-tier Chartered Accountants, Developers, and MBAs to optimize your infrastructure and scale operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contact" className="px-8 py-4 bg-purple-600 text-white font-medium rounded flex items-center hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
                    Execute Protocol <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                {/* Tech Frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-30 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative border border-white/10 bg-slate-900 rounded-lg p-2">
                  <img 
                    src="/hero.png" 
                    alt="Modern Tech Hero" 
                    className="w-full h-auto rounded opacity-80 mix-blend-screen"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES (Dark Neon Cards) ---------------- */}
      <section id="services" className="py-24 bg-slate-950 relative border-t border-white/5 min-h-screen flex flex-col">
        <div className="container mx-auto px-6 max-w-7xl flex-grow">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Analysis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Modules</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">Pinpoint operational bottlenecks and deploy targeted improvements.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'general', label: 'GEN_BUSINESS' },
              { id: 'real-estate', label: 'REAL_ESTATE' },
              { id: 'hospital', label: 'HOSPITALS' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded font-mono text-sm transition-all duration-300 ${activeTab === tab.id ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-transparent text-slate-500 border border-white/5 hover:text-white hover:border-white/20'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((srv, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-900 border border-white/5 rounded-lg p-8 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`mb-6 ${srv.color} drop-shadow-[0_0_8px_currentColor] relative z-10`}>
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-3 text-white relative z-10">{srv.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-light relative z-10">{srv.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ---------------- TEAM (Dark Avatars) ---------------- */}
      <section id="team" className="py-24 bg-slate-900 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Core <span className="text-purple-500">Operatives</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Adil */}
            <div className="bg-slate-950 rounded-lg p-6 border border-white/5 text-center group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src="/avatar_male.png" alt="Adil Khan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Adil Khan</h3>
              <p className="text-purple-400 text-sm tracking-widest uppercase mt-2 mb-4">Chief Tech Officer</p>
              <div className="flex justify-center space-x-4 text-slate-500">
                <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all"><Twitter size={20} /></a>
              </div>
            </div>
            
            {/* Asfiya */}
            <div className="bg-slate-950 rounded-lg p-6 border border-white/5 text-center group relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src="/avatar_female.png" alt="Asfiya Khan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Asfiya Khan</h3>
              <p className="text-purple-400 text-sm tracking-widest uppercase mt-2 mb-4">Founder & Lead</p>
              <div className="flex justify-center space-x-4 text-slate-500">
                <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER & CONTACT ---------------- */}
      <footer id="contact" className="bg-slate-950 pt-24 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 border-b border-white/5 pb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Initialize Connection</h2>
              <p className="text-slate-400 mb-8 max-w-md font-light leading-relaxed">Transmit your requirements and our team will formulate a strategic operational response.</p>
              <div className="space-y-6 font-mono text-sm text-slate-300">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-purple-500 w-5 h-5 shrink-0 mt-1" />
                  <span>LOC: Zenith Co Working, Lalganga Currency Tower, Raipur</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-purple-500 w-5 h-5 shrink-0 mt-1" />
                  <span>NET: asfiya@analymate.in</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded border border-white/5 relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500" />

              <form className="space-y-4">
                <input type="text" placeholder="ID // Name" className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded focus:border-purple-500 outline-none text-white font-mono text-sm transition-all" required />
                <input type="email" placeholder="COM // Email" className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded focus:border-purple-500 outline-none text-white font-mono text-sm transition-all" required />
                <textarea rows={4} placeholder="MSG // Payload" className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded focus:border-purple-500 outline-none text-white font-mono text-sm transition-all resize-none" required></textarea>
                <button className="w-full py-3 bg-white/5 text-purple-400 border border-purple-500/50 font-mono text-sm rounded hover:bg-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">TRANSMIT</button>
              </form>
            </div>
          </div>
          
          <div className="text-center pb-8 font-mono text-xs text-slate-600">
            <p>SYS.DATE: 2026 // ANALYMATE SOLUTIONS // ALL RIGHTS SECURED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
