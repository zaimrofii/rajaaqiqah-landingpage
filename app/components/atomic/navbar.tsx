"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Paket", href: "/#paket" },
    { label: "Area Pelayanan", href: "/#area" },
    { label: "Testimoni", href: "/#testimoni" },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-white text-[var(--primary)] shadow-md"
          : "mt-0 md:mt-5 bg-[var(--primary)] text-[var(--background)]"
      }`}
    >
      {/* Kontainer Utama */}
      <div className="container mx-auto flex items-center justify-between flex-wrap px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide hover:text-[var(--secondary)] transition"
        >
          RajaAqiqah
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-10 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[var(--secondary)] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul
          className={`flex flex-col gap-4 px-6 pb-5 font-medium ${
            scrolled
              ? "bg-white text-[var(--primary)]"
              : "bg-[var(--primary)] text-[var(--background)]"
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-[var(--secondary)] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
