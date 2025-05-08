import './Hero.css'; 


import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sell Unused Software Licenses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl mb-8"
      >
        Get instant cash for your unused licenses
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Get Free Valuation
      </motion.button>
    </section>
  );
}
