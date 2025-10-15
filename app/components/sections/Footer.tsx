"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[var(--primary)] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">RajaAqiqah</h2>
          <p className="text-white/80 text-sm">
            Layanan aqiqah profesional, cepat, dan sesuai syariat. Siap bantu
            momen spesial keluarga Anda.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/#paket" className="hover:text-white transition">
                Paket
              </Link>
            </li>
            <li>
              <Link href="/#testimoni" className="hover:text-white transition">
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                href="/#area-pelayanan"
                className="hover:text-white transition"
              >
                Area Pelayanan
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <p className="text-white/80 text-sm">
            Jl. Contoh Raya No. 123, Jakarta
          </p>
          <p className="text-white/80 text-sm">Telp: 0812-3456-7890</p>
          <p className="text-white/80 text-sm">Email: info@aqiqahberkah.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-white/70 text-sm">
        © {year || "...."} RajaAqiqah. All rights reserved.
      </div>
    </footer>
  );
}
