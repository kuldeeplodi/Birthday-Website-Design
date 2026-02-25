import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-sky-100 to-pink-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-gray-600"
            style={{ fontFamily: "Nunito, sans-serif" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Built with too many memories and unlimited love</span>
            <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
          </motion.div>

          <div className="mt-4 text-sm text-gray-500" style={{ fontFamily: "Nunito, sans-serif" }}>
            February 27, 2026
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
