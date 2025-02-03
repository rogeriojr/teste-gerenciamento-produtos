// src/utils/api.ts

import useStore from "@/store/useStore";

// Tipos para os dados da API
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string; // Opcional, caso a API inclua categoria
}

// URL base da API fictícia (usando JSONPlaceholder ou MSW)
const API_URL = "https://jsonplaceholder.typicode.com"; // Exemplo com JSONPlaceholder

// Função para buscar a lista de produtos
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/photos`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data = await response.json();

    // Mapear os dados da API para o formato esperado
    return data.slice(0, 20).map((item: any) => ({
      id: item.id,
      name: `Produto ${item.id}`,
      price: Math.floor(Math.random() * 100), // Preço aleatório para exemplo
      description: item.title,
      image: item.thumbnailUrl,
      category: "Categoria Exemplo", // Categoria fictícia
    }));
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para adicionar um novo produto (simulação)
export const addProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar produto");
    }

    const data = await response.json();
    const newProduct = { ...product, id: data.id };

    // Recarrega os produtos
    const updatedProducts = await fetchProducts();
    useStore.getState().setProducts(updatedProducts);

    return newProduct;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para filtrar produtos por nome e preço (simulação no frontend)
export const filterProducts = (
  products: Product[],
  name: string,
  minPrice: number,
  maxPrice: number
): Product[] => {
  return products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(name.toLowerCase());
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesName && matchesPrice;
  });
};

// Função para ordenar produtos (simulação no frontend)
export const sortProducts = (
  products: Product[],
  orderBy: "price" | "name"
): Product[] => {
  return [...products].sort((a, b) => {
    if (orderBy === "price") {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
};
