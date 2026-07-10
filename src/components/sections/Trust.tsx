"use client";

import { motion } from "framer-motion";
import { Shield, MessageCircle, Handshake, Users, Gem } from "lucide-react";

const trustFactors = [
  {
    icon: Gem,
    title: "Professional Advice",
    description: "We provide objective, data-driven advice. Our focus is on finding the right fit for you, not just making a sale."
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "We believe in complete honesty. From legalities to pricing, we ensure you have all the facts before deciding."
  },
  {
    icon: Shield,
    title: "Trusted Guidance",
    description: "With our RERA registration and deep market knowledge, you can trust that your investment is in safe hands."
  },
  {
    icon: Handshake,
    title: "Long-term Relationship",
    description: "Our service doesn't end at the transaction. We aim to be your real estate consultants for life."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every client is unique. We take the time to understand your specific needs and tailor our approach accordingly."
  }
];

export default function Trust() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="h-[2px] w-12 bg-secondary block"></span>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Trust & Reliability</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
              Why Clients Trust Us
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              We understand that buying real estate is one of the most significant financial decisions you'll make. That's why we've built our entire business model around trust, integrity, and putting our clients' interests first.
            </p>

            <div className="space-y-6">
              {trustFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mr-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-lg mb-1">{factor.title}</h4>
                      <p className="text-text-muted">{factor.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
             <div className="bg-background rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center relative z-10">
                  Our Commitment to You
                </h3>
                
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-center text-lg text-text-main font-medium pb-6 border-b border-gray-200">
                    <span className="text-4xl text-secondary font-serif mr-4">01.</span>
                    Zero consultation fees for primary market properties.
                  </li>
                  <li className="flex items-center text-lg text-text-main font-medium pb-6 border-b border-gray-200">
                    <span className="text-4xl text-secondary font-serif mr-4">02.</span>
                    Unbiased property comparisons.
                  </li>
                  <li className="flex items-center text-lg text-text-main font-medium pb-6 border-b border-gray-200">
                    <span className="text-4xl text-secondary font-serif mr-4">03.</span>
                    100% adherence to RERA norms.
                  </li>
                  <li className="flex items-center text-lg text-text-main font-medium">
                    <span className="text-4xl text-secondary font-serif mr-4">04.</span>
                    Complete confidentiality of your data.
                  </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
