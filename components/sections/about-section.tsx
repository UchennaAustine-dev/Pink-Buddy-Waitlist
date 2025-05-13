"use client";

import { motion } from "framer-motion";
import { Calendar, Heart, Bell } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: "Smart Scheduling",
      description: "Organize your daily activities and events with ease.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Health Tracking",
      description: "Monitor periods, wellness metrics, and health goals.",
    },
    {
      icon: <Bell className="w-10 h-10 text-primary" />,
      title: "Smart Reminders",
      description: "Never forget important dates and appointments.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Pink Buddy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pink Buddy is the ultimate personal assistant app designed
            exclusively for women. Your all-in-one companion for organizing life
            with ease and confidence. From scheduling daily activities and
            events to tracking periods, birthdays, and important health metrics,
            Pink Buddy helps you stay on top of it all. Whether you're planning
            your week, managing your wellness, or just trying to remember that
            special date, Pink Buddy is here to keep your mind clear and your
            life balanced. Smart, supportive, and always there, just like your
            best friend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
