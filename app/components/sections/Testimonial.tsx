"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Shifa Aulia",
    date: "12 September 2025",
    message: "Alhamdulillah... Bagus, Cekatan, ramah dan Top masakannya....",
  },
  {
    name: "Bayu Firdaus",
    date: "5 Agustus 2020",
    message: "Aqiqah bagus, enak banget dan terjangkau.",
  },
  {
    name: "Shifa Aulia",
    date: "12 September 2025",
    message: "Alhamdulillah... Bagus, Cekatan, ramah dan Top masakannya....",
  },
  {
    name: "Bayu Firdaus",
    date: "5 Agustus 2020",
    message: "Aqiqah bagus, enak banget dan terjangkau.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-16" id="testimoni">
      {/* Tagline */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
          Apa Kata Mereka?
        </h2>
        <p className="text-gray-600 mt-2">
          Testimoni pelanggan yang sudah mempercayakan aqiqahnya kepada kami
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Tombol Kiri */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--primary)] text-white p-2 rounded-full shadow-md hover:bg-[var(--secondary)] transition z-10"
        >
          <ChevronLeft />
        </button>

        {/* Wrapper Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col justify-between"
            >
              {/* Profil */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-xl font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary)]">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm">{t.date}</p>
                </div>
              </div>

              {/* Rating Bintang */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={18}
                    fill="var(--secondary)"
                    stroke="var(--secondary)"
                  />
                ))}
              </div>

              {/* Isi Testimoni */}
              <p className="text-gray-700 italic leading-relaxed">
                {t.message}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Kanan */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--primary)] text-white p-2 rounded-full shadow-md hover:bg-[var(--secondary)] transition z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
