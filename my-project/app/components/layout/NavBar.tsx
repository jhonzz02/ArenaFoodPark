"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Conceito",
    "Food Park",
    "Arena Bar",
    "Área Kids",
    "Contato",
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <motion.h1
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: .4 }}
            className="cursor-pointer text-2xl font-bold tracking-[0.35em] text-white"
          >
            ARENA
          </motion.h1>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                {item}

                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="hidden rounded-full border border-[#D4A017] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#D4A017] hover:text-black lg:block"
          >
            Entrar em Contato
          </motion.button>

        </div>
      </motion.header>
    </AnimatePresence>
  );
}