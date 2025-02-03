// src/app/page.tsx
"use client";

import { useEffect } from "react";
import useStore from "../store/useStore";
import { fetchProducts } from "../utils/api";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { setProducts } = useStore();
  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      console.log("Produtos carregados:", products); // Verifica se os produtos estão sendo carregados
    };

    loadProducts();
  }, [setProducts]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Gerenciamento de Produtos
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <ProductList />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
