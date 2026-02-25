import { motion } from "motion/react";
import { Sparkles, Star, Heart } from "lucide-react";

export function FloatingParticles() {
  const particles = [
    { Icon: Sparkles, delay: 0, duration: 4, x: 20, y: 30 },
    { Icon: Star, delay: 1, duration: 5, x: 80, y: 20 },
    { Icon: Heart, delay: 2, duration: 4.5, x: 15, y: 70 },
    { Icon: Sparkles, delay: 1.5, duration: 5.5, x: 90, y: 60 },
    { Icon: Star, delay: 0.5, duration: 4.8, x: 50, y: 15 },
    { Icon: Heart, delay: 2.5, duration: 5.2, x: 70, y: 85 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <particle.Icon className="w-4 h-4 text-pink-300" strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
