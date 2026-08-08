"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    // IMPORTANT: Replace this access key with your actual Web3Forms access key
    // Get it for free at https://web3forms.com/
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Form error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Company Details (Left) */}
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="h-[2px] w-12 bg-secondary block"></span>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Contact Us</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
              Let's Discuss Your Real Estate Goals
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              Whether you are looking to buy a dream home or make a strategic commercial investment, our experts are here to guide you. Reach out today for a free consultation.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-lg mb-1">Email Us</h4>
                  <a href="mailto:shivam.reality33@gmail.com" className="text-text-muted hover:text-primary transition-colors">
                    shivam.reality33@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-lg mb-1">Call Us</h4>
                  <a href="tel:+917567714703" className="text-text-muted hover:text-primary transition-colors">
                    +91 75677 14703
                  </a>
                  <p className="text-text-muted text-sm mt-0.5">(Mon-Sat, 10am-7pm)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:shivam.reality33@gmail.com" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md">
                Email Us
              </a>
              <a href="tel:+917567714703" className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100"
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Book a Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="New Enquiry from Shivam Realty Website" />
                <input type="hidden" name="from_name" value="Shivam Realty Website" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-background border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-background border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="+91 75677 14703"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-text-main mb-2">Interested In</label>
                  <select 
                    name="interest" 
                    id="interest" 
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-background border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Residential Property">Residential Property</option>
                    <option value="Commercial Property">Commercial Property</option>
                    <option value="Investment Advice">Investment Advice</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading" || status === "success"}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" /> Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    Something went wrong. Please try again later or email us directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
