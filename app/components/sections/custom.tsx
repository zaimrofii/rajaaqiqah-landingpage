"use client";

import Image from "next/image";
import CTAbutton from "../atomic/CTAbutton";

export default function CustomBudgetSection() {
  return (
    <section className="bg-gray-100 py-5 md:py-16 ">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 w-[95vw] md:w-[80vw]">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Custom Sesuai Budget
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
            Kami memahami bahwa setiap keluarga memiliki kebutuhan berbeda.
            Pilih paket aqiqah sesuai kemampuan, dan kami bantu sesuaikan menu
            serta porsi terbaik tanpa mengurangi kualitas.
          </p>
          <CTAbutton source="custom section" />
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/paket-custom.jpg"
            alt="Paket Custom Aqiqah"
            width={200}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
