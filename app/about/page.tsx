import Image from "next/image";
import Navbar from "../components/atomic/navbar";
import Footer from "../components/sections/Footer";

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section id="about" className="w-full bg-white py-16 px-6">
        {/* 1. Tentang Kami (Mengubah Fokus menjadi Komitmen) */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Text */}
          <div className="flex-1 ">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Komitmen Kami: Aqiqah Sesuai Sunnah & Amanah
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 py-5">
              Kami adalah layanan{" "}
              <span className="font-semibold">Dapur Berkah</span>, penyedia jasa
              aqiqah yang berfokus pada{" "}
              <span className="font-bold text-[var(--secondary)]">
                Keikhlasan, Kehalalan, dan Kualitas Masakan.
              </span>
              Dengan tim berpengalaman, kami memastikan setiap proses mulai dari
              pemilihan hewan, penyembelihan, hingga pengolahan berjalan sesuai
              syariat Islam dan dengan kualitas terbaik, memberikan ketenangan
              bagi keluarga Anda.
            </p>
            {/* CTA ke WA di Tengah Halaman */}
            <a
              href="https://wa.me/628979811467?text=Halo,%20saya%20ingin%20menanyakan%20detail%20proses%20aqiqah%20syar’i."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[color:var(--primary)] text-gray-50 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              Tanya Detail Proses Syar’i (Hubungi via WA)
            </a>
          </div>

          {/* Gambar */}
          <div className="flex-1">
            <Image
              src="/abouthero1.jpeg" // Ganti dengan foto kantor / tim yang meyakinkan
              alt="Tim Aqiqah Berkah"
              width={600}
              height={400}
              // Catatan: Tambahkan class 'shadow-green' jika warna brand Anda Hijau
              className="rounded-2xl shadow-lg object-cover w-full h-[480px] brightness-80 contrast-115"
            />
          </div>
        </div>

        {/* --- HR Dikeraskan untuk memisahkan Section --- */}
        <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

        {/* 2. PROSES KAMI: Jaminan Syar'i & Higienitas (Mengatasi Keraguan) */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
            Transparansi Proses Kami
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visual 1: Proses Syar'i (Kepercayaan) - Kuantitas: 1-3 Foto */}
            <div className="text-center">
              <Image
                src="/amil1.jpeg"
                alt="Proses Penyembelihan Sesuai Syariat"
                width={400}
                height={250}
                className="rounded-xl object-cover h-[280px] w-full mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-[var(--secondary)] mb-2">
                Jaminan Syari & Amil Profesional
              </h4>
              <p className="text-gray-600">
                Setiap proses penyembelihan dilaksanakan oleh Amil yang
                tersertifikasi dan sesuai dengan rukun Islam.
              </p>
            </div>

            {/* Visual 2: Dapur Higienis (Kualitas) - Kuantitas: 3-5 Foto / 1 Video */}
            <div className="text-center">
              <Image
                src="/dapur1.png"
                alt="Foto Dapur Higienis"
                width={400}
                height={250}
                className="rounded-xl object-cover h-[280px] w-full mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-[var(--secondary)] mb-2">
                Dapur Berstandar & Higienis
              </h4>
              <p className="text-gray-600">
                Pengolahan di dapur bersih dengan kontrol kualitas ketat,
                memastikan masakan lezat dan sehat.
              </p>
            </div>

            {/* Visual 3: Packaging Rapi (Kualitas) - Kuantitas: 3-5 Foto / 1 Video */}
            <div className="text-center">
              <Image
                src="/bungkus1.jpeg"
                alt="Packaging Rapi Aqiqah"
                width={400}
                height={250}
                className="rounded-xl object-cover h-[280px] w-full mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-[var(--secondary)] mb-2">
                Packaging Eksklusif & Aman
              </h4>
              <p className="text-gray-600">
                Masakan dikemas dalam *packaging* yang rapi dan aman untuk
                menjaga kualitas hingga sampai di tangan Anda.
              </p>
            </div>
          </div>

          {/* Tambahan Video Perusahaan (Narasi & Human Touch) - Kuantitas: 1 Video Max 60 Detik */}
          <div className="hidden mt-12 text-center">
            <h4 className="text-2xl font-bold text-[var(--secondary)] mb-4">
              Tonton Kisah Dapur Berkah (Video Singkat)
            </h4>
            {/* Placeholder Iframe untuk Video Embedded dari YouTube */}
            <div
              className="relative overflow-hidden w-full max-w-3xl mx-auto rounded-xl shadow-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?modestbranding=1"
                title="Company Profile Aqiqah Berkah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* --- HR Dikeraskan untuk memisahkan Section --- */}
        <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

        {/* 3. Dampak Sosial Kami (Empati & Branding Positif) - Kuantitas: 2-3 Foto */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
            Berbagi Berkah: Dampak Sosial
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Setiap Aqiqah yang Anda percayakan kepada kami turut serta
            memberdayakan peternak lokal dan menyalurkan kebahagiaan kepada yang
            membutuhkan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="/sosial1.jpeg"
              alt="Donasi ke Panti Asuhan"
              width={400}
              height={300}
              className="rounded-xl object-cover h-[290px] w-full shadow-md"
            />
            <Image
              src="/sosiall2.jpeg"
              alt="Kerjasama dengan Peternak Lokal"
              width={400}
              height={300}
              className="rounded-xl object-cover h-[290px] w-full shadow-md"
            />
            <Image
              src="/sosial3.jpeg"
              alt="Penyaluran ke Masjid/Yayasan"
              width={400}
              height={300}
              className="rounded-xl object-cover h-[290px] w-full shadow-md hidden lg:block"
            />{" "}
            {/* Opsional 3 foto */}
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[var(--primary)] mb-6">
            Visi & Misi Kami
          </h3>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card Visi */}
            <div className="bg-white shadow-md rounded-2xl p-6 flex-1">
              <h4 className="text-xl font-semibold text-[var(--primary)] mb-2">
                Visi
              </h4>
              <p className="text-gray-700">
                Menjadi penyedia layanan aqiqah terpercaya yang memudahkan umat
                dalam menjalankan sunnah dengan berkah, kemudahan, dan
                profesionalisme.
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white shadow-md rounded-2xl p-6 py-8 flex-1">
              <h4 className="text-xl font-semibold text-[var(--primary)] mb-2">
                Misi
              </h4>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>
                  • Memberikan layanan aqiqah yang halal, higienis, dan sesuai
                  syariat.
                </li>
                <li>
                  • Menyediakan kemudahan pemesanan dan transparansi proses.
                </li>
                <li>
                  • Berkontribusi pada masyarakat melalui program sosial dan
                  dakwah.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
