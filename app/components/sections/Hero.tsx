"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAbutton from "../atomic/CTAbutton";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-white mt-0 md:mt-5"
      style={{
        backgroundImage: "url('/hero-sate.jpg')", // pastikan kamu punya file ini di folder /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap agar teks terlihat jelas */}
      <div className="absolute inset-0 bg-green-950/50"></div>

      {/* Konten Tengah */}
      <motion.div
        className="relative z-10 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Aqiqah Mudah Sesuai Syariat
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Kami membantu Anda menunaikan ibadah aqiqah dengan layanan
          profesional, daging segar, dan cita rasa lezat — semua tanpa repot.
        </p>

        <CTAbutton source="hero section" />
      </motion.div>
    </section>
  );
}
