"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { fbq } from "../../utils/metaPixel";

// ✅ Definisikan tipe data produk
interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  shortDesc: string;
  longDesc: string;
  images: string[];
}

export default function ProdukSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // ✅ Gunakan tipe Product[]
  const products: Product[] = [
    {
      id: "paket-barokah",
      name: "Paket Aqiqah Barokah",
      price: 1750000,
      img: "/paket1-1.jpg",
      shortDesc:
        "pengolahan 2 menu : \n 50 porsi teriaki/ semur/ rendang, 50 porsi gulai",
      longDesc:
        "Nikmati kebahagiaan aqiqah dengan biaya terjangkau, tetap halal, bersih, dan penuh berkah untuk keluarga tercinta Anda setiap saat.",
      images: ["/paket1-1.jpg"],
    },
    {
      id: "paket-istimewa",
      name: "Paket Aqiqah Istimewa",
      price: 2000000,
      img: "/paket1-2.jpg",
      shortDesc:
        "pengolahan 2 menu : \n 70 porsi teriaki/ semur/ rendang, 70 porsi gulai",
      longDesc:
        "Aqiqah praktis dan lengkap, dari pemilihan hewan, penyembelihan, hingga pengemasan rapi untuk mempermudah momen spesial keluarga.",
      images: ["/paket1-2.jpg"],
    },
    {
      id: "paket-premium",
      name: "Paket Aqiqah Premium",
      price: 2300000,
      img: "/paket1-3.jpg",
      shortDesc:
        "pengolahan 2 menu : \n 80 porsi teriaki/ semur/ rendang, 80 porsi gulai",
      longDesc:
        "Rasakan layanan aqiqah premium, dengan kualitas hewan terbaik, proses profesional, serta distribusi rapi dan elegan untuk tamu istimewa.",
      images: ["/paket1-3.jpg", "/paket1-1.jpg", "/paket1-2.jpg"],
    },
    {
      id: "paket-sultan",
      name: "Paket Aqiqah Sultan",
      price: 2750000,
      img: "/paket1-4.jpg",
      shortDesc:
        "pengolahan 2 menu : \n 100 porsi teriaki/ semur/ rendang, 100 porsi gulai",
      longDesc:
        "Aqiqah eksklusif tanpa kompromi, hewan pilihan, pelayanan full service, kemasan mewah, dan pengalaman berkesan bagi seluruh keluarga.",
      images: ["/paket1-2.jpg"],
    },
  ];

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

  // ✅ Gunakan tipe Product, bukan any
  const handleCardClick = (product: Product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    router.push("/product-detail");
  };

  useEffect(() => {
    fbq("ViewContent", {
      content_name: "Product Section",
      content_category: "Aqiqah Packages",
    });
  }, []);

  return (
    <section
      className="w-full py-5 md:py-16 px-4 md:px-8 bg-white text-gray-800 text-center"
      id="paket"
    >
      {/* Tagline */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--primary)]">
        Pilih Paket Aqiqah Terbaik
      </h2>
      <p className="text-sm md:text-base text-gray-500 mb-10">
        Nikmati kemudahan dan kelezatan dalam setiap paket aqiqah kami.
      </p>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Tombol Panah Kiri */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--secondary)] text-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* Wrapper Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 scrollbar-hide pb-4"
        >
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => handleCardClick(p)}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] h-110 md:h-[340px] flex-shrink-0 snap-center bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-86 md:h-[220px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-1">
                  {p.name}
                </h3>
                <p className="text-gray-700 font-medium">
                  Rp {p.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Panah Kanan */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--secondary)] text-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
