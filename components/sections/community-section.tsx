"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Hover animation variants
  const hoverVariants: Variants = {
    hover: {
      scale: 1.05,
      rotate: [0, 2, 0, -2, 0],
      filter: "grayscale(0%)",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
          repeat: 0,
        },
        filter: {
          duration: 0.3,
        },
      },
    },
  };

  // Real images from Unsplash and Pexels
  const illustrations = [
    {
      src: "/images/woman-working.avif",
      alt: "Woman working on laptop",
      y: y1,
      credit: "Photo by Christina @ wocintechchat.com on Unsplash",
    },
    {
      src: "/images/woman-exercising.webp",
      alt: "Woman exercising",
      y: y2,
      credit: "Photo by Cliff Booth from Pexels",
    },
    {
      src: "/images/woman-socializing.avif",
      alt: "Women socializing",
      y: y3,
      credit: "Photo by Priscilla Du Preez on Unsplash",
    },
  ];

  // Background particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0.3,
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
          }}
        />
      ))}

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community & Inclusivity
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
        >
          {illustrations.map((illustration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{ y: illustration.y }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800"
                variants={hoverVariants}
                whileHover="hover"
                initial={{ filter: "grayscale(100%)" }}
              >
                <Image
                  src={illustration.src || "/placeholder.svg"}
                  alt={illustration.alt}
                  fill
                  className="object-cover transition-all duration-300"
                />

                {/* Animated overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                {illustration.credit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          ref={textRef}
          className="text-center text-gray-700 dark:text-gray-300 max-w-[800px] mx-auto text-lg relative"
          style={{
            opacity: isTextInView ? 1 : 0,
            transform: isTextInView ? "none" : "translateY(20px)",
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            At Pink Buddy, we believe every woman deserves tools to simplify her
            life.
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            Join us in redefining what it means to be organized, healthy, and
            confident.
          </motion.span>
          {/* Animated highlight effect */}
          <motion.span
            className="absolute bottom-0 left-0 h-2 bg-secondary/30 rounded-full"
            initial={{ width: 0 }}
            animate={isTextInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            style={{ zIndex: -1 }}
          />
        </motion.p>

        {/* Call to action button with animation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
            delay: 1,
          }}
        >
          <motion.button
            className="bg-primary text-white px-8 py-3 rounded-full font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(231, 1, 118, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const waitlistSection = document.getElementById("waitlist");
              waitlistSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
