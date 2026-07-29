"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Arena Food Park"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,160,23,.15),transparent_55%)]" />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gray-700" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 uppercase tracking-[0.4em] text-[#D4A017]"
          >
            Arena Fonte Nova
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-4xl text-6xl font-bold leading-[0.9] text-white md:text-8xl xl:text-[9rem]"
          >
            Arena
            <br />
            Food Park
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3.0,
              duration: 0.8,
            }}
            className="mt-8 max-w-xl text-lg text-zinc-300"
          >
            Gastronomia, entretenimento e experiências em um dos maiores espaços
            de convivência da Arena Fonte Nova.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-10 rounded-full border border-[#D4A017] px-8 py-4 font-medium text-white transition hover:bg-[#D4A017] hover:text-black"
          >
            Conheça o Projeto
          </motion.button>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] text-white">SCROLL</span>

          <div className="h-12 w-[1px] bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
