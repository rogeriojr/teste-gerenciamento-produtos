"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductForm from "@/components/ProductForm";

const ProductCreate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
          <h1 className="text-3xl font-bold mb-6">Cadastro de Produto</h1>
          <ProductForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCreate;
