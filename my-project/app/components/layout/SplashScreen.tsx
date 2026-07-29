"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] overflow-hidden"
        >
          {/* Fundo */}
          <div className="absolute inset-0 bg-gray-700" />

          {/* Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 blur-[120px]"
          />

          {/* Porta esquerda */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 1.8,
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 top-0 h-full w-1/2 bg-[#000000]"
          />

          {/* Porta direita */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.8,
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute right-0 top-0 h-full w-1/2 bg-[#000000]"
          />

          {/* Conteúdo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: .9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: .8,
              }}
              className="text-center"
            >
              <motion.h1
                animate={{
                  letterSpacing: ["0.25em", "0.45em"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
                className="text-5xl font-bold text-white"
              >
                ARENA
              </motion.h1>

              <p className="mt-4 uppercase tracking-[0.6em] text-[#D4A017]">
                Food Park
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}