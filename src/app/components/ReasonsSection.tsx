import { motion } from "motion/react";
import { Phone, Drama, HeartPulse, Brain, Sparkles, Coffee, MessageCircle, Shield } from "lucide-react";

const reasons = [
  {
    icon: Phone,
    title: "My Emergency Call Person",
    description: "Always picks up, even at 3 AM",
  },
  {
    icon: Drama,
    title: "Certified Drama Partner",
    description: "We make everything an event",
  },
  {
    icon: HeartPulse,
    title: "Human Therapy",
    description: "Cheaper and way more effective",
  },
  {
    icon: Brain,
    title: "Queen of Overthinking",
    description: "But somehow still gives the best advice",
  },
  {
    icon: Sparkles,
    title: "Vibe Curator",
    description: "Makes everything more fun",
  },
  {
    icon: Coffee,
    title: "Coffee Enabler",
    description: "Never says no to caffeine dates",
  },
  {
    icon: MessageCircle,
    title: "Text Back Champion",
    description: "Responds faster than I can type",
  },
  {
    icon: Shield,
    title: "Fierce Protector",
    description: "Ride or die energy always",
  },
];

export function ReasonsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-100 to-pink-100 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl text-center mb-6"
          style={{ fontFamily: "Dancing Script, cursive" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reasons You're Amazing ✨
        </motion.h2>

        <motion.p
          className="text-center text-xl text-gray-600 mb-16"
          style={{ fontFamily: "Nunito, sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Just a few of the million reasons...
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-lavender-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-lavender-400 flex items-center justify-center mb-4 shadow-lg">
                  <reason.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                
                <h3
                  className="text-lg font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {reason.title}
                </h3>
                
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
