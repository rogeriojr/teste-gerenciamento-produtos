"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Sobre = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4">
            Teste Frontend
          </h1>
          <h2 className="text-xl text-center text-blue-400 mb-6">Objetivo</h2>
          <p className="text-lg text-center">
            Desenvolver uma aplicação web para gerenciamento de produtos, com
            foco em utilização de Next, gerenciamento de estado, consumo de
            APIs, estilização com Tailwind CSS e criação de testes.
          </p>

          <h3 className="text-2xl font-bold mt-6">Descrição do Desafio</h3>
          <p className="text-lg text-left mt-4">
            Você deve criar uma aplicação de gerenciamento de produtos com as
            seguintes funcionalidades:
          </p>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>
              Listar produtos com nome, categoria, preço, descrição e imagem.
            </li>
            <li>Criar um formulário para cadastro de novos produtos.</li>
            <li>
              Implementar um filtro para buscar produtos pelo nome e faixa de
              preço.
            </li>
            <li>Implementar ordenação dos resultados.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6">Requisitos Técnicos</h3>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>Usar NextJs e Typescript.</li>
            <li>Gerenciar o estado global.</li>
            <li>Consumir uma API fictícia.</li>
            <li>Estilizar o layout com Tailwind CSS.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6">Extras (Diferenciais)</h3>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>Implementar paginação para a lista de produtos.</li>
            <li>Tornar o layout responsivo.</li>
            <li>
              Escrever documentação explicando as escolhas feitas no projeto.
            </li>
            <li>Adicionar um teste de snapshot de tela.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
