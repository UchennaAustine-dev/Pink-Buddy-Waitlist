"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/Pink-Buddy.PNG"
              alt="Pink Buddy Logo"
              width={150}
              height={70}
            />
            {/* <span className="font-alovera text-xl md:text-2xl font-bold text-primary">
              Pink Buddy
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <Link
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors dark:text-gray-300"
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors dark:text-gray-300"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="text-gray-700 hover:text-primary transition-colors dark:text-gray-300"
            >
              Community
            </Link> */}
            <ThemeToggle />
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              onClick={() => {
                const waitlistSection = document.getElementById("waitlist");
                waitlistSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Early Access
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {/* <Link
                  href="#about"
                  className="text-gray-700 hover:text-primary py-2 dark:text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-primary py-2 dark:text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#community"
                  className="text-gray-700 hover:text-primary py-2 dark:text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link> */}
                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
                  onClick={() => {
                    const waitlistSection = document.getElementById("waitlist");
                    waitlistSection?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Early Access
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
