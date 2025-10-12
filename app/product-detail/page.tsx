import Navbar from "../components/atomic/navbar";
import Footer from "../components/sections/Footer";
import ProdukSection from "../components/sections/Product";
import ProductDetail from "../components/sections/ProductDetail";

export default function ProductDetailPage() {
  return (
    <>
      <Navbar />
      <ProductDetail />;
      <ProdukSection />
      <Footer />
    </>
  );
}
