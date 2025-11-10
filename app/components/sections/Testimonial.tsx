"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

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
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ✅ Auto-slide setiap 5 detik (pause kalau user hold / hover / drag)
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

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimoni"
      className="bg-gray-100 py-16 px-4 flex justify-center select-none"
    >
      <div
        className="relative w-full max-w-5xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Panah kiri */}
        <button
          onClick={() => {
            setIsPaused(true);
            prev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-orange-400/60 shadow rounded-full hover:scale-105 transition z-10"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Panah kanan */}
        <button
          onClick={() => {
            setIsPaused(true);
            next();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-400/60 shadow rounded-full hover:scale-105 transition z-10"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) prev(); // geser kanan
              if (info.offset.x < -80) next(); // geser kiri
              setIsPaused(false);
            }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden cursor-grab"
          >
            {/* Gambar */}
            <div className="md:w-1/3 w-full h-72 md:h-auto">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="md:w-2/3 w-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-500 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg italic mb-6">
                  “{testimonials[index].text}”
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  {testimonials[index].name}
                </h3>
                <p className="text-gray-500">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bullet Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsPaused(true);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
