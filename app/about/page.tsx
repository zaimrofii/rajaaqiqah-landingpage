import Image from "next/image";
import Navbar from "../components/atomic/navbar";
import Footer from "../components/sections/Footer";

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section id="about" className="w-full bg-white py-16 px-6">
        {/* Tentang Kami */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Tentang Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kami adalah layanan{" "}
              <span className="font-semibold">Aqiqah Berkah</span>, penyedia
              jasa aqiqah profesional yang berkomitmen untuk memberikan
              kemudahan bagi keluarga Muslim dalam melaksanakan sunnah Nabi.
              Dengan tim berpengalaman, kami memastikan setiap proses mulai dari
              pemilihan hewan, penyembelihan, hingga pengolahan berjalan sesuai
              syariat Islam dan dengan kualitas terbaik.
            </p>
          </div>

          {/* Gambar */}
          <div className="flex-1">
            <Image
              src="/kambing-about.jpg" // pastikan gambar ada di /public/images/
              alt="Tentang Kami"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-[480px]"
            />
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[var(--primary)] mb-6">
            Visi & Misi Kami
          </h3>
          <p className="text-gray-600 mb-10">
            Landasan utama kami dalam melayani dengan sepenuh hati.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 text-left hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold text-[var(--secondary)] mb-3">
                Visi
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Menjadi penyedia layanan aqiqah terbaik di Indonesia yang
                mengedepankan keikhlasan, profesionalisme, dan keberkahan dalam
                setiap prosesnya.
              </p>
            </div>

            <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 text-left hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold text-[var(--secondary)] mb-3">
                Misi
              </h4>
              <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
                <li>Melayani pelanggan dengan sepenuh hati dan amanah.</li>
                <li>Menjamin proses aqiqah sesuai syariat Islam.</li>
                <li>Menyediakan hewan sehat dan berkualitas.</li>
                <li>Mendukung pemberdayaan peternak dan dapur lokal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
