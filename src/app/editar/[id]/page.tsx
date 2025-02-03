"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useStore, { Product } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductForm from "@/components/ProductForm";

const EditProduct = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams?.get("id");

  const { products, fetchProducts } = useStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      let foundProduct = products.find((p) => p.id === Number(id));

      if (!foundProduct && typeof window !== "undefined") {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
          const parsedProducts: Product[] = JSON.parse(storedProducts);
          foundProduct = parsedProducts.find((p) => p.id === Number(id));
        }
      }

      if (!foundProduct) {
        try {
          await fetchProducts();
          foundProduct = useStore
            .getState()
            .products.find((p) => p.id === Number(id));
        } catch (error) {
          console.error("Erro ao buscar produtos:", error);
        }
      }

      setProduct(foundProduct || null);
      setLoading(false);
    };

    if (id) {
      loadProduct();
    } else {
      setLoading(false);
    }
  }, [id, fetchProducts]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
        <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-4"
          >
            Voltar
          </button>
          <h1 className="text-3xl font-bold mt-4">Editar Produto</h1>
          {product ? (
            <ProductForm initialProduct={product} />
          ) : (
            <p className="text-xl">Produto não encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
