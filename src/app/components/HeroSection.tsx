import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
     <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#d4a5a5]" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-semibold text-[#5a4a42] mb-8 leading-tight">
            Happy Birthday to<br />
            <span className="text-[#c097a0]">My Panda 🐼🌸</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-['Inter'] font-light text-[#7a6a62] leading-relaxed max-w-2xl mx-auto">
        Not everyone is loud in love — some just stay .
          </p>
        </motion.div>
      </section>
  );
}
