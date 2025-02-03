// src/components/Footer.tsx
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon as MailIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Gerenciamento de Produtos</h3>
            <p className="text-sm">© 2024 Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition duration-300"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition duration-300"
            >
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              Sobre
            </a>
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition duration-300"
            >
              <MailIcon className="h-5 w-5 mr-2" />
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exportação padrão
