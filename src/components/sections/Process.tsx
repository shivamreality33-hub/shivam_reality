"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, Search, Scale, FileSignature, Home, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "We understand your budget, location preferences, and lifestyle needs."
  },
  {
    icon: Search,
    title: "Property Suggestions",
    description: "We shortlist the best matching properties from our trusted builder network."
  },
  {
    icon: MapPin,
    title: "Site Visit",
    description: "We arrange and accompany you on site visits to view the properties firsthand."
  },
  {
    icon: Scale,
    title: "Comparison & Guidance",
    description: "We provide an unbiased comparison to help you make an informed decision."
  },
  {
    icon: FileSignature,
    title: "Documentation",
    description: "We assist with all legal checks, paperwork, and loan processing if required."
  },
  {
    icon: Home,
    title: "Booking Support",
    description: "We ensure a smooth booking process and help negotiate the best terms."
  },
  {
    icon: HeartHandshake,
    title: "Post Sales Assistance",
    description: "Our relationship continues with support until handover and beyond."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="h-[2px] w-12 bg-secondary block"></span>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Process</span>
            <span className="h-[2px] w-12 bg-secondary block"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
            7 Steps to Your Dream Property
          </h2>
          <p className="text-text-muted text-lg">
            We've streamlined the property buying journey to make it as effortless and transparent as possible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-[7.2%] right-[7.2%] border-t-2 border-dashed border-secondary/30 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="font-bold text-text-main mb-3 text-lg leading-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed max-w-[250px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
