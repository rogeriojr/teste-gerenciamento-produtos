import { useState, useEffect } from "react";
import useStore, { Product } from "../store/useStore";
import { PlusIcon } from "@heroicons/react/24/outline";

interface ProductFormProps {
  initialProduct?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialProduct }) => {
  const [name, setName] = useState(initialProduct?.name || "");
  const [price, setPrice] = useState(
    initialProduct ? initialProduct.price.toFixed(2) : ""
  );
  const [description, setDescription] = useState(
    initialProduct?.description || ""
  );
  const [image, setImage] = useState(initialProduct?.image || "");

  const { addProduct, fetchProducts } = useStore();

  useEffect(() => {
    if (initialProduct) {
      setName(initialProduct.name);
      setPrice(initialProduct.price.toFixed(2));
      setDescription(initialProduct.description);
      setImage(initialProduct.image);
    }
  }, [initialProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !description) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const formattedPrice = parseFloat(price.replace(",", "."));
    if (isNaN(formattedPrice) || formattedPrice <= 0) {
      alert("Digite um preço válido!");
      return;
    }

    const productImage =
      image.trim() ||
      "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

    const newProduct = {
      name,
      price: formattedPrice,
      description,
      image: productImage,
    };

    await addProduct(newProduct);
    await fetchProducts(); // Atualiza listagem

    setName("");
    setPrice("");
    setDescription("");
    setImage("");

    // Exibir alerta
    const alertBox = document.createElement("div");
    alertBox.className =
      "fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg text-lg animate-fade-in";
    alertBox.textContent = "Produto cadastrado com sucesso!";
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-300">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Preço (R$)
        </label>
        <input
          type="text"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Descrição
        </label>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">
          URL da Imagem
        </label>
        <input
          type="text"
          placeholder="URL da Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded bg-gray-700 text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Cadastrar
      </button>
    </form>
  );
};

export default ProductForm;
