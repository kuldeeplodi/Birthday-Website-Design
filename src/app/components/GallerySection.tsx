import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const photos = [
  {
    src: "./public/WhatsApp .jpeg",
    rotation: -3,
  },
  {
    src: "./public/WhatsApp Image  at 21.22.17.jpeg",
    rotation: 2,
  },
  {
    src: "./public/WhatsApp Image  at 21.22.23.jpeg",
    rotation: -2,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.12.jpeg",
    rotation: 4,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.13.jpeg",
    rotation: -4,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.17.jpeg",
    rotation: 3,
  },
  {
    src: "./public/WhatsApp Image 202622.22.jpeg",
    rotation: 2,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.14.jpeg",
    rotation: -2,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.15.jpeg",
    rotation: 3,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.28.16.jpeg",
    rotation: 3,
  },
  {
    src: "./public/WhatsApp Image 2026-02-25 at 21.22.23.jpeg",
    rotation: -2,
  },
  {
    src: "./public/WhatsApp Image at 21.22.20.jpeg",
    rotation: 3,
  },
];

export function GallerySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-100 to-lavender-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl text-center mb-6"
          style={{ fontFamily: "Dancing Script, cursive" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Photo Dump 📸
        </motion.h2>

        <motion.p
          className="text-center text-xl text-gray-600 mb-16"
          style={{ fontFamily: "Nunito, sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Captured moments of pure chaos & joy
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: photo.rotation,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 10,
              }}
            >
              {/* Polaroid frame */}
              <div className="bg-white p-3 pb-12 shadow-2xl rounded-sm">
                <ImageWithFallback
                  src={photo.src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-100 aspect-square object-cover"
                />
              </div>

              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100/60 border-t-2 border-b-2 border-yellow-200/40 rotate-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
