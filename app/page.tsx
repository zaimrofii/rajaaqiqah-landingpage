import Navbar from "./components/atomic/navbar";
import PrayerSchedule from "./components/atomic/PrayerSchedule";
import AreaPelayananSection from "./components/sections/AreaPelayanan";
import CustomBudgetSection from "./components/sections/custom";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/Hero";
import ProdukSection from "./components/sections/Product";
import ProsesAqiqahSection from "./components/sections/ProsesAqiqahSection";
import TestimonialsSection from "./components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <PrayerSchedule />
      <HeroSection />
      <ProsesAqiqahSection />
      <ProdukSection />
      <CustomBudgetSection />
      <TestimonialsSection />
      <AreaPelayananSection />
      <Footer />
    </>
  );
}
