// src/components/Navbar.tsx
import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon as MailIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center text-lg font-bold">
            <span className="text-white">Gerenciamento de Produtos</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link
              href="/sobre"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              Sobre
            </Link>
            <Link
              href="/contato"
              className="flex items-center hover:text-gray-400 transition duration-300"
            >
              <MailIcon className="h-5 w-5 mr-2" />
              Contato
            </Link>
            <Link
              href="/cadastro"
              className="flex items-center bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
