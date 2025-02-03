// src/utils/api.ts

// Tipos para os dados da API
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string; // Opcional
}

// URL base da API fictícia (usando JSONPlaceholder ou MSW)
const API_URL = 'https://jsonplaceholder.typicode.com'; // Exemplo com JSONPlaceholder

// Função para buscar a lista de produtos
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/photos`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const data = await response.json();

    // Mapear os dados da API para o formato esperado
    return data.slice(0, 20).map((item: any) => ({
      id: item.id,
      name: `Produto ${item.id}`,
      price: Math.floor(Math.random() * 100), // Preço aleatório para exemplo
      description: item.title,
      image: item.thumbnailUrl,
      category: 'Categoria Exemplo', // Categoria fictícia
    }));
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Função para adicionar um novo produto (simulação)
import useStore from "../store/useStore";

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

    // Atualiza a store com o novo produto
    useStore.getState().setProducts([...useStore.getState().products, newProduct]);

    return newProduct;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

// Função para filtrar produtos por nome e faixa de preço (simulação no frontend)
export const filterProducts = (
  products: Product[],
  name: string | null,
  minPrice: number | null,
  maxPrice: number | null
): Product[] => {
  return products.filter((product) => {
    const matchesName =
      !name || product.name.toLowerCase().includes(name.toLowerCase());
    const matchesMinPrice =
      !minPrice || product.price >= minPrice;
    const matchesMaxPrice =
      !maxPrice || product.price <= maxPrice;
    return matchesName && matchesMinPrice && matchesMaxPrice;
  });
};

// Função para ordenar produtos (simulação no frontend)
export const sortProducts = (
  products: Product[],
  orderBy: 'price' | 'name'
): Product[] => {
  return [...products].sort((a, b) => {
    if (orderBy === 'price') {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
};