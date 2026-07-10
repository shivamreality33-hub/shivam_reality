"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Channel Partner?",
    answer: "A Real Estate Channel Partner is an authorized consultant who acts as a bridge between reputed builders and property buyers. We provide professional guidance, assist with site visits, and help with documentation, making the buying process seamless."
  },
  {
    question: "Why choose a RERA Registered Consultant?",
    answer: "Working with a RERA (Real Estate Regulatory Authority) registered consultant ensures that you are dealing with a verified, accountable professional. It guarantees transparency, ethical practices, and compliance with government regulations."
  },
  {
    question: "Do I pay additional charges for your consultation?",
    answer: "No. When you buy a new property (primary market) through us, our consultation and services are generally completely free for you. We are remunerated directly by the builders we partner with."
  },
  {
    question: "Can you help with home loans?",
    answer: "Yes, absolutely. We have tie-ups with major banks and financial institutions. Our team will assist you in getting the best interest rates and ensure a hassle-free loan approval process."
  },
  {
    question: "Can you arrange site visits?",
    answer: "Yes, arranging and accompanying you on site visits is a core part of our service. We provide transportation if needed and offer an unbiased on-site overview of the project's pros and cons."
  },
  {
    question: "Do you assist after booking?",
    answer: "Our relationship doesn't end at booking. We provide end-to-end post-sales assistance, including help with builder-buyer agreements, payment schedules, and support right up to the final possession of your property."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="h-[2px] w-12 bg-secondary block"></span>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">FAQ</span>
            <span className="h-[2px] w-12 bg-secondary block"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-lg">
            Find answers to common questions about our services and the real estate buying process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white border ${openIndex === index ? 'border-primary shadow-md' : 'border-gray-200'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-text-main'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
