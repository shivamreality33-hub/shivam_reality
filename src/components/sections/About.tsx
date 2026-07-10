"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Shivam Reality Team Meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-[250px]">
                <h4 className="font-serif text-3xl font-bold text-primary mb-1">15+</h4>
                <p className="text-text-muted text-sm font-medium">Years of Combined Real Estate Expertise</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="h-[2px] w-12 bg-secondary block"></span>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Guiding You Home with <span className="text-secondary">Trust & Transparency</span>
            </h2>

            <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-10">
              <p>
                At <strong>Shivam Reality</strong>, we work as a trusted channel partner for reputed builders and developers. We don't just sell properties; we build lasting relationships based on trust, integrity, and exceptional service.
              </p>
              <p>
                Our mission is to simplify the complex real estate buying process. We help buyers identify the right property according to their unique needs, lifestyle aspirations, and investment goals, providing transparent guidance from your very first enquiry all the way to possession.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "RERA Registered Partner",
                "Trusted Builder Network",
                "100% Transparent Process",
                "No Hidden Charges",
                "End-to-End Assistance",
                "Personalized Consultation"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-text-main font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
