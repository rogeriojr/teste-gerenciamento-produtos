"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useStore, { Product } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const FALLBACK_IMAGE =
  "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

const ProductDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { products, fetchProducts } = useStore();
  const productId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      let foundProduct = products.find(
        (p: Product) => p.id === Number(productId)
      );

      if (!foundProduct) {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
          const parsedProducts: Product[] = JSON.parse(storedProducts);
          foundProduct = parsedProducts.find(
            (p: Product) => p.id === Number(productId)
          );
        }

        if (!foundProduct) {
          await fetchProducts();
          foundProduct = products.find(
            (p: Product) => p.id === Number(productId)
          );
        }
      }

      setProduct(foundProduct || null);
      setLoading(false);
    };

    loadProduct();
  }, [productId, products, fetchProducts]);

  const handlePurchase = () => {
    const alertBox = document.createElement("div");
    alertBox.className =
      "fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg text-lg animate-fade-in";
    alertBox.textContent = "Compra efetuada com sucesso!";
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

  if (loading) {
    return <p className="text-white text-center mt-10">Carregando...</p>;
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <p className="text-xl">Produto não encontrado.</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-all"
        >
          Voltar para Home
        </button>
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
            <ArrowLeftIcon className="h-5 w-5 mr-2" /> Voltar
          </button>

          {/* Container da imagem com efeito de zoom */}
          <div className="group w-full flex justify-center items-center overflow-hidden rounded-lg">
            <Image
              src={
                imageError ? FALLBACK_IMAGE : product.image || FALLBACK_IMAGE
              }
              alt={product.name}
              className="w-full h-auto object-contain transform transition-transform group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          </div>

          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-300 mt-2">{product.description}</p>
          <p className="text-lg font-semibold mt-4">
            Preço:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>

          <button
            onClick={handlePurchase}
            className="mt-6 w-full bg-green-500 text-white py-3 rounded text-lg font-semibold hover:bg-green-400 transition-all"
          >
            Comprar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
