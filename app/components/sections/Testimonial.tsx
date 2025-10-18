"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bunda Atiche Motik",
    role: "keluarga Motik",
    text: "Gulainya enak banget, bikin ketagihan dan ingin pesan lagi, terima kasih ya ndi .. sukses dan maju terus.",
    image: "/testimoni-1.jpg",
  },
  {
    id: 2,
    name: "Bunda Neno Warisman",
    role: "Aktifis Pendidikan",
    text: "20 tahun sudah saya ikut menjadi pendorong utama lahirnya generasi islam yang lebih baik, satu pilar yang harus dipenuhi untuk mewujudkan itu adalah dengan mengaqiqahkan mereka dan mengqurbankan atas nama mereka. Raja Aqiqah mempermudah orang tua melakukannya dan terbaik dalam melayani. saya memilih Raja Aqiqah dan pastikanlah anda juga",
    image: "/testimoni-2.jpg",
  },
  {
    id: 3,
    name: "Hermawan Kertajaya",
    role: "Founder Markplus",
    text: "Selamat menang di startup icon honda, Raja Domba satenya empuk dan gulainya woww..!!",
    image: "/testimoni-3.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ⏱️ Ganti testimonial otomatis setiap 5 detik (jika tidak dijeda)
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // 🖱️ Pause ketika hover (desktop) dan tahan (mobile)
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section
      id="testimoni"
      className="bg-gray-100 py-16 px-4 flex justify-center select-none"
    >
      <div
        className="relative w-full max-w-5xl"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden"
          >
            {/* 🖼️ Gambar sebelah kiri */}
            <div className="md:w-1/3 w-full h-74 md:h-auto">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 💬 Konten kanan */}
            <div className="md:w-2/3 w-full p-8 flex flex-col justify-between">
              <div>
                {/* ⭐ Icon bintang lima */}
                <div className="flex text-yellow-500 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>

                {/* 📝 Teks testimoni */}
                <p className="text-gray-700 text-lg italic mb-6">
                  “{testimonials[index].text}”
                </p>
              </div>

              {/* 👤 Nama & Jabatan */}
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  {testimonials[index].name}
                </h3>
                <p className="text-gray-500">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
