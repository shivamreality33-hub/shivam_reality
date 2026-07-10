"use client";

import { motion } from "framer-motion";
import { Building2, Home, Landmark, LineChart, Map, FileCheck2, HandCoins, KeySquare, HelpCircle, HeartHandshake, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Property",
    description: "Expert guidance in finding your dream home, apartments, and villas tailored to your lifestyle."
  },
  {
    icon: Building2,
    title: "Commercial Property",
    description: "Strategic consultation for office spaces, retail shops, and commercial investments."
  },
  {
    icon: LineChart,
    title: "Investment Guidance",
    description: "Data-driven advice to maximize your ROI with high-appreciation real estate assets."
  },
  {
    icon: Landmark,
    title: "Project Comparison",
    description: "Unbiased comparison of different builder projects to help you choose the best option."
  },
  {
    icon: Map,
    title: "Site Visit Assistance",
    description: "Arranged and guided property tours to give you a first-hand experience of the projects."
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    description: "Complete assistance with legal paperwork, agreements, and property registration."
  },
  {
    icon: HandCoins,
    title: "Home Loan Assistance",
    description: "Hassle-free loan processing through our network of trusted financial partners."
  },
  {
    icon: KeySquare,
    title: "Booking Support",
    description: "Seamless property booking process ensuring all your requirements are met."
  },
  {
    icon: ShieldCheck,
    title: "RERA Guidance",
    description: "Ensuring all transactions comply with RERA regulations for your peace of mind."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="h-[2px] w-12 bg-secondary block"></span>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <span className="h-[2px] w-12 bg-secondary block"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-text-muted text-lg">
            We offer end-to-end assistance to ensure your property buying journey is smooth, secure, and rewarding.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-background border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
