import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const memories = [
  {   image: "/images/WhatsAppImage8.jpeg",
    caption: "That day we laughed until we cried 😂",
    year: "2025",
  },
  {
    image: "/images/WhatsAppImage2026-02-25at21.22.24.jpeg",
    caption: "Our iconic selfie fails compilation 📸",
    year: "2025",
  },
  {
    image: "/images/WhatsAppImage2026-02-25at21.22.22.jpeg",
    caption: "When we got lost but made it an adventure 🗺️",
    year: "2025",
  },
  {
    image: "/images/WhatsAppImage 2026-02-25at21.22.20.jpeg",
    caption: "Late-night talks that healed more than we expected 🌙💬",
    year: "2025",
  },
  {
    image: "/images/panda.jpeg",
    caption: "Unplanned moments make the best stories 💛",
    year: "2025",
  },
  {
    image: "/images/WhatsAppImage2026-02-25at21.22.19.jpeg",
    caption: "Celebrating literally anything together 🎉",
    year: "2025",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-100 to-cream-100 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Dancing Script, cursive" } as React.CSSProperties}
        >
          Our Chaos Timeline ✨
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 via-lavender-200 to-peach-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-lavender-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <ImageWithFallback
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </motion.div>
                </div>

                <div className="md:w-16 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-lavender-400 shadow-lg" />
                </div>

                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                    <div
                      className="text-sm font-semibold text-lavender-600 mb-2"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {memory.year}
                    </div>
                    <p
                      className="text-xl text-gray-800"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {memory.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
