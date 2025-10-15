import Image from "next/image";
import CTAbutton from "../atomic/CTAbutton";
import Link from "next/link";

export default function AreaPelayananSection() {
  return (
    <section id="area" className="w-full bg-gray-50 py-5 md:py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-3">
          Area Pelayanan Kami
        </h2>
        <p className="text-gray-600">
          Kami melayani pengantaran dan proses aqiqah di wilayah{" "}
          <b>Kota Depok</b> dan sekitarnya. Siap melayani Anda dengan cepat,
          aman, dan sesuai syariat.
        </p>
      </div>

      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Map sebagai gambar */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg">
          <Link
            href="https://www.google.com/maps/place/RAJA+AQIQAH+QURBAN+%26+CATERING/@-6.358103,106.8197531,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e938163c2fc5:0x991fdf6d34ef1471!8m2!3d-6.358103!4d106.8197531!16s%2Fg%2F11f7t1jq5x?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/maps.jpeg"
              alt="Lokasi Raja Aqiqah Qurban & Catering"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </Link>
        </div>

        {/* Info Area */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-semibold text-[var(--secondary)] mb-4">
            Layanan Kami di Depok
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kami melayani seluruh wilayah Kota Depok seperti Beji, Pancoran Mas,
            Sawangan, Cimanggis, Tapos, Bojongsari, dan sekitarnya. Proses
            pemotongan dilakukan sesuai syariat Islam dan pengantaran tepat
            waktu.
          </p>
          <div className="space-y-3 text-gray-700 mb-5">
            <p>
              📍 <b>Alamat Dapur & Kantor : </b>
              Perum Puri, Jl. Juragan Sinda Raya No.4B, RT.2/RW.02, Kukusan,
              Beji, Depok
            </p>
            <p>
              ☎️ <b>Telepon / WhatsApp : </b>
              <Link
                href="https://wa.me/6281284126458"
                className="text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                0812-8412-6458
              </Link>
            </p>
            <p>
              ⏰ <b>Jam Operasional : </b>
              Setiap hari pukul 07.00 – 21.00 WIB
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <CTAbutton />
          </div>
        </div>
      </div>
    </section>
  );
}
