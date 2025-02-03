import { create } from "zustand";

// Tipos para os produtos
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

// Tipos para o estado global
interface StoreState {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  filter: {
    name: string | null;
    minPrice: number | null;
    maxPrice: number | null;
  };
  setProducts: (products: Product[]) => void;
  setCurrentPage: (page: number) => void;
  setFilter: (name?: string | null, minPrice?: number | null, maxPrice?: number | null) => void;
  addProduct: (product: Omit<Product, "id">) => void;
  fetchProducts: () => Promise<void>;
}

// API Fake
const API_URL = "https://fakestoreapi.com/products";

// Criação da store com Zustand
const useStore = create<StoreState>((set, get) => ({
  products: [],
  currentPage: 1,
  itemsPerPage: 5,
  filter: {
    name: null,
    minPrice: null,
    maxPrice: null,
  },
  setProducts: (products) => {
    set({ products });
    localStorage.setItem("products", JSON.stringify(products));
  },
  setCurrentPage: (page) => set({ currentPage: page }),
  setFilter: (name = null, minPrice = null, maxPrice = null) =>
    set(() => ({
      filter: { name, minPrice, maxPrice },
    })),
  addProduct: (product) => {
    set((state) => {
      const newProduct = { ...product, id: Date.now() };
      const updatedProducts = [...state.products, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },
  fetchProducts: async () => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      set({ products: JSON.parse(storedProducts) });
      return;
    }
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar produtos");
      const data: Product[] = await response.json();
      set({ products: data });
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  },
}));

export default useStore;