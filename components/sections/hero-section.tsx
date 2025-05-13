"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Bell, Star, Sparkles } from "lucide-react";

// Emoji animation component
const FloatingEmoji = ({
  emoji,
  delay,
  x,
  y,
  duration = 20,
}: {
  emoji: string;
  delay: number;
  x: number;
  y: number;
  duration?: number;
}) => (
  <motion.div
    className="absolute text-2xl md:text-3xl pointer-events-none select-none"
    initial={{ opacity: 0, x, y: y + 50 }}
    animate={{
      opacity: [0, 1, 1, 0],
      x: [x, x + (Math.random() * 100 - 50)],
      y: [y, y - 150 - Math.random() * 100],
    }}
    transition={{
      delay,
      duration,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 5 + 5,
      times: [0, 0.1, 0.9, 1],
    }}
  >
    {emoji}
  </motion.div>
);

// Cloud component
const Cloud = ({
  top,
  left,
  scale,
  delay,
  duration,
}: {
  top: string;
  left: string;
  scale: number;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left }}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 0.8, x: 0 }}
    transition={{ delay, duration: 1.5 }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      style={{ scale }}
    >
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/80 dark:text-gray-700/40"
      >
        <path
          d="M10,40 A20,20 0 0,1 50,40 A20,20 0 0,1 90,40 Q90,60 50,60 Q10,60 10,40 Z"
          fill="currentColor"
        />
        <path
          d="M30,20 A20,20 0 0,1 70,20 A20,20 0 0,1 110,20 Q110,40 70,40 Q30,40 30,20 Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  </motion.div>
);

// Floating icon component
const FloatingIcon = ({
  icon: Icon,
  color,
  top,
  left,
  size = 24,
  delay = 0,
}: {
  icon: any;
  color: string;
  top: string;
  left: string;
  size?: number;
  delay?: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0, rotate: -20 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
  >
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        rotate: {
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    >
      <div className={`rounded-full p-2 bg-${color}/10 backdrop-blur-sm`}>
        <Icon size={size} className={`text-${color}`} />
      </div>
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  const [showEmojis, setShowEmojis] = useState(false);

  // Start emoji animations after initial load
  useEffect(() => {
    const timer = setTimeout(() => setShowEmojis(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Emojis related to women's organization and wellness
  const emojis = ["💖", "✨", "🌸", "📅", "🎯", "💪", "🧘‍♀️", "🌿", "💭", "🔔"];

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] via-pink-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Decorative clouds */}
      <Cloud top="15%" left="5%" scale={0.8} delay={0.2} duration={6} />
      <Cloud top="10%" left="70%" scale={1.2} delay={0.5} duration={8} />
      <Cloud top="60%" left="80%" scale={0.7} delay={0.8} duration={7} />
      <Cloud top="75%" left="15%" scale={1} delay={1.1} duration={9} />

      {/* Decorative icons */}
      <FloatingIcon
        icon={Heart}
        color="pink-500"
        top="20%"
        left="20%"
        size={28}
        delay={1.2}
      />
      <FloatingIcon
        icon={Calendar}
        color="purple-500"
        top="15%"
        left="75%"
        size={32}
        delay={1.5}
      />
      <FloatingIcon
        icon={Bell}
        color="yellow-500"
        top="70%"
        left="25%"
        size={26}
        delay={1.8}
      />
      <FloatingIcon
        icon={Star}
        color="amber-500"
        top="65%"
        left="80%"
        size={30}
        delay={2.1}
      />
      <FloatingIcon
        icon={Sparkles}
        color="pink-400"
        top="30%"
        left="85%"
        size={28}
        delay={2.4}
      />

      {/* Floating emojis */}
      <AnimatePresence>
        {showEmojis &&
          emojis.map((emoji, i) => (
            <FloatingEmoji
              key={i}
              emoji={emoji}
              delay={i * 2}
              x={Math.random() * 80 - 40}
              y={Math.random() * 100 + 200}
              duration={15 + Math.random() * 10}
            />
          ))}
      </AnimatePresence>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10 py-12 md:py-24 max-w-5xl mx-auto">
        {/* Logo with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 animate-float relative"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow"></div>
          <Image
            src="/images/Pink-Buddy.PNG"
            alt="Pink Buddy Logo"
            width={180}
            height={180}
            className="mx-auto relative z-10"
            priority
          />
        </motion.div>

        {/* Heading with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-4"
        >
          <motion.div
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-30 blur-xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient relative z-10">
            Your All-In-One Personal Assistant
          </h1>
        </motion.div>

        {/* Subheading with staggered reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[800px] text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
        >
          Empower Your Life with Pink Buddy – Your Ultimate Companion for
          Organization, Wellness, and Confidence.
        </motion.p>

        {/* CTA button with enhanced glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-70 animate-pulse-glow"></div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-10 py-6 relative z-10 shadow-lg"
              onClick={() => {
                const waitlistSection = document.getElementById("waitlist");
                waitlistSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="mr-2">✨</span> GET EARLY ACCESS{" "}
              <span className="ml-2">✨</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            "Organization",
            "Wellness",
            "Reminders",
            "Period Tracking",
            "Self Care",
          ].map((feature, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary shadow-sm border border-pink-100 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(231, 1, 118, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
