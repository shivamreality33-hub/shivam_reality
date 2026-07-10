"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "100+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Projects Assisted", icon: Award },
  { value: "100%", label: "Transparent Guidance", icon: ShieldCheck },
];

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Luxury Real Estate"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <span className="flex items-center text-white text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" /> RERA Registered
            </span>
            <span className="flex items-center text-white text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" /> Trusted Guidance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Trusted <br className="hidden md:block" />
              <span className="text-secondary">RERA Registered</span><br />
              Channel Partner
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Helping individuals, families, and investors make informed real estate decisions with transparency, trust, and expert guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-secondary text-white text-base font-semibold rounded-full shadow-[0_0_20px_rgba(200,169,106,0.4)] hover:bg-white hover:text-primary transition-all duration-300 text-center flex items-center justify-center group"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border border-white/30 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 text-center flex items-center justify-center"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center text-secondary mb-2">
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="text-3xl font-bold font-serif text-white">{stat.value}</span>
                  </div>
                  <span className="text-sm text-white/70 font-medium tracking-wide uppercase">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
