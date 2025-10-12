"use client";
import React, { useState, useEffect } from "react";
import CTAbutton from "../atomic/CTAbutton";

interface Product {
  id: string;
  name: string;
  price: number;
  shortDesc: string;
  longDesc: string;
  images: string[];
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("selectedProduct");
    if (stored) {
      const data = JSON.parse(stored);
      setProduct(data);
      setSelectedImage(data.images[0]);
    }
  }, []);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Memuat data produk...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="flex-1">
          <div className="border rounded-2xl overflow-hidden shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition ${
                  selectedImage === img
                    ? "border-amber-500"
                    : "border-transparent hover:border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 md:mt-5">
          <h1 className="text-3xl font-semibold text-gray-800 mb-3">
            {product.name}
          </h1>
          <p className="text-2xl text-amber-600 font-bold mb-4">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
          <p className="whitespace-pre-line text-gray-600 leading-relaxed mb-5">
            {product.shortDesc}
          </p>

          <CTAbutton />
        </div>
      </div>

      {/* Deskripsi Panjang */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Deskripsi Produk
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {product.longDesc}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
