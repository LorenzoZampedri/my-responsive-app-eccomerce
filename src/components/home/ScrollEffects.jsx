// src/components/home/ScrollEffects.jsx
import { motion } from "framer-motion";

export default function ScrollEffects() {
  return (
    <motion.div
      className="my-12 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-2">Una experiencia de compra diferente</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Descubrí lo último en tecnología, moda y más. Con envíos rápidos y atención personalizada.
      </p>
    </motion.div>
  );
}
