import { ShoppingCart, Scissors, Flame, Truck } from "lucide-react";

export default function ProsesAqiqahSection() {
  const steps = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-[var(--secondary)]" />,
      title: "Pilih Hewan",
      desc: "Pilih kambing sesuai kebutuhan dan anggaran.",
    },
    {
      icon: <Scissors className="w-10 h-10 text-[var(--secondary)]" />,
      title: "Proses Sembelih",
      desc: "Penyembelihan sesuai syariat dengan doa dan amanah.",
    },
    {
      icon: <Flame className="w-10 h-10 text-[var(--secondary)]" />,
      title: "Dimasak Lezat",
      desc: "Dimasak oleh tim profesional dengan cita rasa khas.",
    },
    {
      icon: <Truck className="w-10 h-10 text-[var(--secondary)]" />,
      title: "Pengantaran Cepat",
      desc: "Pesanan siap diantar ke lokasi Anda tepat waktu.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[var(--primary)] text-white text-center">
      {/* Tagline */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Proses Aqiqah yang Amanah & Profesional
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-10">
        Dari pemilihan kambing hingga pengantaran, semua kami tangani dengan
        sepenuh hati.
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.2)] transition-transform hover:scale-105"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-white/80">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
