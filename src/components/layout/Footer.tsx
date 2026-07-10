"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white/90 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="#home" className="font-serif text-2xl font-bold tracking-wider text-white inline-block mb-6">
              SHIVAM<span className="text-secondary font-light">REALITY</span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Your trusted RERA registered real estate channel partner. We guide you through transparent, secure, and profitable property decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Projects', href: '/projects' },
                { name: 'Insights', href: '/insights' },
                { name: 'About Us', href: '/#about' },
                { name: 'FAQ', href: '/#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary transition-colors inline-flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Residential Property', 'Commercial Spaces', 'Investment Guidance', 'Home Loan Assistance', 'Legal & Documentation'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                <span>Premium Business Hub, City Center, India</span>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="w-5 h-5 text-secondary mr-3 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-white/70">
                <Mail className="w-5 h-5 text-secondary mr-3 shrink-0" />
                <a href="mailto:shivam.reality33@gmail.com" className="hover:text-white transition-colors">
                  shivam.reality33@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shivam Reality. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:text-primary transition-colors z-20 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
