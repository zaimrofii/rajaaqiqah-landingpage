import Link from "next/link";
import React from "react";

const CTAbutton = () => {
  return (
    <div>
      <Link
        href="https://wa.me/628979811467"
        // href="https://wa.me/6281284126458"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[var(--secondary)] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Pesan Sekarang!
      </Link>
    </div>
  );
};

export default CTAbutton;
