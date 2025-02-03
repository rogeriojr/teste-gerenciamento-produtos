import useStore from "../store/useStore";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/photos`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data = await response.json();
    return data.slice(0, 20).map((item: any) => ({
      id: item.id,
      name: `Produto ${item.id}`,
      price: Math.floor(Math.random() * 100),
      description: item.title,
      image: item.thumbnailUrl,
      category: "Categoria Exemplo",
    }));
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export const addProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  try {
    const newProduct = { ...product, id: Date.now() };
    useStore.setState((state) => {
      const updatedProducts = [...state.products, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
    return newProduct;
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    throw error;
  }
};

export const filterProducts = (
  products: Product[],
  name: string | null,
  minPrice: number | null,
  maxPrice: number | null
): Product[] => {
  return products.filter((product) => {
    const matchesName = !name || product.name.toLowerCase().includes(name.toLowerCase());
    const matchesMinPrice = !minPrice || product.price >= minPrice;
    const matchesMaxPrice = !maxPrice || product.price <= maxPrice;
    return matchesName && matchesMinPrice && matchesMaxPrice;
  });
};

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