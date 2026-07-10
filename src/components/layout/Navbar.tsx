"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // If not on home page, we want a solid navbar by default for better visibility
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link and we are on the home page, scroll smoothly
    if (href.startsWith("/#") && isHomePage) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If it's a hash link and we are NOT on home page, let Next Link handle it
    // It will navigate to / and then the browser will scroll to the hash.
  };

  const navBgClass = isScrolled || !isHomePage 
    ? "bg-surface shadow-md py-4" 
    : "bg-transparent py-6";
    
  const textClass = isScrolled || !isHomePage 
    ? "text-primary" 
    : "text-white";

  const linkClass = isScrolled || !isHomePage
    ? "text-text-main hover:text-primary"
    : "text-white/90 hover:text-white";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBgClass}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`font-serif text-2xl font-bold tracking-wider ${textClass}`}
        >
          SHIVAM<span className="text-secondary font-light">REALITY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    pathname === link.href ? "text-secondary font-bold" : linkClass
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "/#contact")}
            className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full shadow-[0_4px_14px_0_rgba(15,76,129,0.39)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(15,76,129,0.23)] transition-all duration-300 ease-in-out"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={textClass} size={28} />
          ) : (
            <Menu className={textClass} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`block font-medium py-2 transition-colors ${
                      pathname === link.href ? "text-secondary font-bold" : "text-text-main hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 pb-4">
                <Link
                  href="/#contact"
                  onClick={(e) => handleScrollTo(e, "/#contact")}
                  className="inline-block px-6 py-3 bg-primary text-white text-sm font-medium rounded-full w-full text-center"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
