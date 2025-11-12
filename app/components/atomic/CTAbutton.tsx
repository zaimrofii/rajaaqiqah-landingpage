import Link from "next/link";
import React from "react";
import { fbq } from "../../utils/metaPixel";

const CTAbutton = ({ source }) => {
  const handleClick = () => {
    fbq("trackCustom", "CTA_Click", { source });
    gtag("event", "cta_click", { event_label: source });
  };

  return (
    <Link
      href="https://wa.me/628979811467"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block bg-[var(--secondary)] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      Pesan Sekarang!
    </Link>
  );
};

export default CTAbutton;
