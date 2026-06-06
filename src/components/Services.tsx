"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, Coins, AlertCircle, Calculator, Laptop, PackageSearch,
  FileCheck2, CheckSquare, ShieldCheck, ClipboardList, Activity, MapPin, 
  Banknote, Receipt, Stethoscope, HeartPulse, Building2, Store
} from 'lucide-react';

const categories = [
  { id: 'general', title: 'General Business' },
  { id: 'real-estate', title: 'Real Estate' },
  { id: 'hospital', title: 'Hospitals' }
];

const servicesData = {
  'general': [
    { title: 'Detection of Revenue Leakage', desc: 'Analyze each department to pinpoint and eliminate revenue leaks, enhancing profitability.', icon: <TrendingDown className="w-8 h-8 text-blue-600" />, color: 'bg-blue-100' },
    { title: 'Working Capital Blockage', desc: 'Identify and address areas where working capital is inefficiently tied up, improving cash flow.', icon: <Coins className="w-8 h-8 text-orange-600" />, color: 'bg-orange-100' },
    { title: 'Material Discrepancies', desc: 'Uncover significant discrepancies in business processes for enhanced control and accuracy.', icon: <AlertCircle className="w-8 h-8 text-green-600" />, color: 'bg-green-100' },
    { title: 'Recalculation of Interest', desc: 'Verify interest calculations by Banks/NBFCs to ensure compliance and prevent overpayment.', icon: <Calculator className="w-8 h-8 text-red-600" />, color: 'bg-red-100' },
    { title: 'Tech Implementation', desc: 'Suggest and guide the implementation of technology-driven solutions across departments for efficiency.', icon: <Laptop className="w-8 h-8 text-purple-600" />, color: 'bg-purple-100' },
    { title: 'Stock Audit', desc: 'Conduct thorough stock audits to ensure inventory accuracy and minimize discrepancies in holdings.', icon: <PackageSearch className="w-8 h-8 text-teal-600" />, color: 'bg-teal-100' },
  ],
  'real-estate': [
    { title: 'Transaction Trail Verification', desc: 'Complete audit of indent, quotations, POs, and material grading to prevent overbilling.', icon: <FileCheck2 className="w-8 h-8 text-blue-600" />, color: 'bg-blue-100' },
    { title: 'Contractor Payment Validation', desc: 'Verify contractor payment releases against agreed rates, constructed areas, and contractual terms.', icon: <Banknote className="w-8 h-8 text-orange-600" />, color: 'bg-orange-100' },
    { title: 'Contractual Term Adherence', desc: 'Ensure full compliance with contractor agreements, including penalty levies for delays.', icon: <CheckSquare className="w-8 h-8 text-green-600" />, color: 'bg-green-100' },
    { title: 'Store Record Audits', desc: 'Trace items in store records to confirm receipt of paid materials and accuracy of inventory.', icon: <Store className="w-8 h-8 text-red-600" />, color: 'bg-red-100' },
    { title: 'Issue Tracking from Stores', desc: 'Verify the authenticity of material issues from stores, ensuring legitimate use in construction.', icon: <MapPin className="w-8 h-8 text-purple-600" />, color: 'bg-purple-100' },
    { title: 'BOM vs Consumption', desc: 'Compare material consumption against BOM/BOQ to detect inventory discrepancies or wastage.', icon: <Activity className="w-8 h-8 text-teal-600" />, color: 'bg-teal-100' },
    { title: 'Working Capital Blockage', desc: 'Highlight working capital inefficiencies from over-ordering and high inventory holding.', icon: <Coins className="w-8 h-8 text-yellow-600" />, color: 'bg-yellow-100' },
    { title: 'Tech-Friendly Measures', desc: 'Recommend implementing technology solutions to improve operational efficiency.', icon: <Laptop className="w-8 h-8 text-pink-600" />, color: 'bg-pink-100' },
    { title: 'Interest Recalculation', desc: 'Recalculate interest on working capital and term loans to ensure accurate charges.', icon: <Calculator className="w-8 h-8 text-indigo-600" />, color: 'bg-indigo-100' },
    { title: 'Sales Recovery Analysis', desc: 'Analyze sales recovery processes to identify collection delays and their impact.', icon: <TrendingDown className="w-8 h-8 text-lime-600" />, color: 'bg-lime-100' },
    { title: 'Internal Control Review', desc: 'Provide insights on record-keeping inefficiencies and internal control weaknesses.', icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />, color: 'bg-cyan-100' },
  ],
  'hospital': [
    { title: 'Underbilling & Revenue Leakage', desc: 'Trace and address revenue leakages in OPD, bed charges, and other income streams.', icon: <Stethoscope className="w-8 h-8 text-blue-600" />, color: 'bg-blue-100' },
    { title: 'Expense Overbilling', desc: 'Identify and rectify overbilling in expenses such as pharmacy, equipment, and maintenance.', icon: <Receipt className="w-8 h-8 text-orange-600" />, color: 'bg-orange-100' },
    { title: 'Equipment Verification', desc: 'Conduct verification of equipment and inventory, including pharmacy stocks, to prevent fraud.', icon: <HeartPulse className="w-8 h-8 text-green-600" />, color: 'bg-green-100' },
    { title: 'Internal Controls & Payroll', desc: 'Review doctor fees, staff salaries, and overall internal controls to ensure integrity.', icon: <ShieldCheck className="w-8 h-8 text-red-600" />, color: 'bg-red-100' },
    { title: 'Interest Recalculation', desc: 'Recalculate interest charged by Banks/NBFCs on working capital and term loans.', icon: <Calculator className="w-8 h-8 text-purple-600" />, color: 'bg-purple-100' },
    { title: 'Stock & Inventory Control', desc: 'Perform stock audits to eliminate inventory discrepancies and ensure effective management.', icon: <ClipboardList className="w-8 h-8 text-teal-600" />, color: 'bg-teal-100' },
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Comprehensive <span className="text-primary">Business Analysis</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Drill down to highlight loopholes and suggest improvements for your business processes, tailored to your specific industry.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-primary text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
