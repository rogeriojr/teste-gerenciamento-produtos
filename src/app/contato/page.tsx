"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  FireIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  WindowIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4">
            Olá! Eu sou o Rogério
          </h1>
          <h2 className="text-xl text-center text-blue-400 mb-6">
            Desenvolvedor Frontend - JavaScript
          </h2>
          <p className="text-lg text-center">
            Formado em Design Gráfico, amante do desenvolvimento web, mobile e
            aplicações. Desenvolvedor frontend há cerca de 7 anos, com expertise
            em aplicações JavaScript. Já trabalhei com Vue.js, Next.js, React,
            React Native, Flutter, entre outras tecnologias.
          </p>

          <h3 className="text-2xl font-bold mt-6">Minhas Tecnologias</h3>
          <div className="grid grid-cols-4 gap-4 text-4xl mt-4">
            <CodeBracketIcon className="text-yellow-400" />
            <LightBulbIcon className="text-blue-400" />
            <RectangleGroupIcon className="text-blue-500" />
            <WrenchScrewdriverIcon className="text-purple-500" />
            <FireIcon className="text-green-400" />
            <RocketLaunchIcon className="text-blue-300" />
            <CpuChipIcon className="text-gray-400" />
            <ServerStackIcon className="text-green-500" />
            <WindowIcon className="text-white" />
            <AcademicCapIcon className="text-orange-500" />
            <CubeTransparentIcon className="text-red-500" />
            <DevicePhoneMobileIcon className="text-green-600" />
          </div>

          <div className="flex justify-between mt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold">10</h3>
              <p>Anos de experiência com Design</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">7</h3>
              <p>Anos de experiência com Programação Frontend</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-6">Entre em Contato</h3>
          <div className="flex flex-col items-center text-lg mt-4 space-y-2">
            <a
              href="https://wa.me/5564981294566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-500"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>WhatsApp: (64) 98129-4566</span>
            </a>
            <a
              href="mailto:rogeriojr1100@gmail.com"
              className="flex items-center text-gray-300 hover:text-gray-400"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <span>rogeriojr1100@gmail.com</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
