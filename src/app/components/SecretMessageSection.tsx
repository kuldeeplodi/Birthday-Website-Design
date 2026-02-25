import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Heart } from "lucide-react";

export function SecretMessageSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-lavender-100 to-sky-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glassmorphism card */}
            <div className="relative bg-white/30 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-2xl border border-white/50">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-lavender-300/30 rounded-[2.5rem] blur-2xl" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!isRevealed ? (
                    <motion.div
                      key="button"
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-8">
                        <div className="inline-block p-4 bg-gradient-to-br from-pink-400 to-lavender-400 rounded-full shadow-lg mb-6">
                          <Heart className="w-12 h-12 text-white" fill="currentColor" />
                        </div>
                      </div>

                      <h3
                        className="text-3xl md:text-4xl mb-4"
                        style={{ fontFamily: "Dancing Script, cursive" }}
                      >
                        A Secret Message
                      </h3>

                      <p
                        className="text-lg text-gray-700 mb-8"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        For your eyes only...
                      </p>

                      <motion.button
                        onClick={() => setIsRevealed(true)}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-lavender-400 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                        Click if you're ready 👀
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-6">
                        <motion.div
                          className="inline-block"
                          animate={{ rotate: [0, 10, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Heart className="w-12 h-12 text-pink-400 mx-auto" fill="currentColor" />
                        </motion.div>
                      </div>

                      <motion.div
                        className="space-y-6 text-lg text-gray-800"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p>
                          Hey you,
                        </p>
                        <p>
                          I know I don't say this enough, but you mean the absolute world to me.
                          You're not just my best friend — you're my person, my safe space, my
                          partner in crime, and the one who gets me like no one else does.
                        </p>
                        <p>
                          Life threw us together, and honestly? Best plot twist ever. You've been
                          there through the messiest moments, the late-night overthinking sessions,
                          the spontaneous adventures, and everything in between.
                        </p>
                        <p>
                          Thank you for being unapologetically yourself, for making me laugh until
                          my stomach hurts, for never judging my questionable decisions, and for
                          always having my back.
                        </p>
                        <p className="text-2xl" style={{ fontFamily: "Dancing Script, cursive" }}>
                          Here's to another year of chaos, memories, and unlimited inside jokes.
                        </p>
                        <p className="text-2xl" style={{ fontFamily: "Dancing Script, cursive" }}>
                          Happy Birthday, my favorite human. 💛
                        </p>
                      </motion.div>

                      <motion.button
                        onClick={() => setIsRevealed(false)}
                        className="mt-8 text-sm text-gray-500 hover:text-gray-700 underline"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        (Click to hide again)
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
