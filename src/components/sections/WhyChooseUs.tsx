"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Network, Lightbulb, UserCheck, CheckSquare, BadgeX, Headphones } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "RERA Registered",
    description: "We operate with full compliance to RERA guidelines, ensuring authenticity and security."
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden facts. We provide 100% transparent communication at every step."
  },
  {
    icon: Network,
    title: "Trusted Builder Network",
    description: "We partner only with reputed developers who have a proven track record of delivery."
  },
  {
    icon: Lightbulb,
    title: "Expert Market Knowledge",
    description: "In-depth insights into market trends, pricing, and future appreciation potential."
  },
  {
    icon: UserCheck,
    title: "Personalized Consultation",
    description: "Solutions tailored strictly according to your budget, lifestyle, and investment goals."
  },
  {
    icon: CheckSquare,
    title: "End-to-End Assistance",
    description: "From shortlisting properties to handing over the keys, we are with you always."
  },
  {
    icon: BadgeX,
    title: "No Hidden Charges",
    description: "We act as a channel partner for builders, meaning our consultation often comes at zero cost to you."
  },
  {
    icon: Headphones,
    title: "Professional Support",
    description: "Dedicated relationship managers providing prompt and professional customer service."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/3 sticky top-32">
            <div className="flex items-center space-x-4 mb-4">
              <span className="h-[2px] w-12 bg-secondary block"></span>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Shivam Reality Advantage
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Navigating the real estate market can be overwhelming. We bring clarity, expertise, and trust to ensure you make the best property decisions without any stress.
            </p>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-xl text-white italic">
                "Our reputation is built on the foundation of transparency and client satisfaction."
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
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
