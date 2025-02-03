"use client";

import useStore, { Product } from "../store/useStore";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const ProductList: React.FC = () => {
  const { products, currentPage, itemsPerPage, filter } = useStore();
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = products.filter((product: Product) => {
    const matchesName =
      !filter.name ||
      product.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesMinPrice =
      !filter.minPrice || product.price >= filter.minPrice;
    const matchesMaxPrice =
      !filter.maxPrice || product.price <= filter.maxPrice;
    return matchesName && matchesMinPrice && matchesMaxPrice;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="p-2 bg-blue-600 text-white rounded mb-4 md:hidden transition-transform"
      >
        {showFilters ? "Esconder Filtros" : "Mostrar Filtros"}
      </button>

      <div
        className={`transition-all duration-300 ${
          showFilters ? "block" : "hidden"
        } md:block md:w-1/4 p-4 bg-gray-800 text-white rounded-lg`}
      >
        <h2 className="text-xl font-semibold mb-4">Filtrar Produtos</h2>
        <Filter />
      </div>

      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Lista de Produtos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={
                  product.image ||
                  "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"
                }
                alt={product.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";
                }}
              />
              <div className="p-4 flex flex-col justify-between min-h-[220px]">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-sm">
                  {expanded[product.id]
                    ? product.description
                    : product.description.slice(0, 80) + "..."}
                </p>
                {product.description.length > 80 && (
                  <button
                    onClick={() => toggleExpand(product.id.toString())}
                    className="text-blue-400 hover:text-blue-300 text-sm mt-2"
                  >
                    {expanded[product.id] ? "Ver Menos" : "Ver Mais"}
                  </button>
                )}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-semibold text-white">
                    Preço:{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </p>
                  <button
                    onClick={() => router.push(`/editar/${product.id}`)}
                    className="text-gray-400 hover:text-white"
                  >
                    <PencilSquareIcon className="h-6 w-6" />
                  </button>
                </div>
                <button
                  onClick={() => router.push(`/produto/${product.id}`)}
                  className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductList;
