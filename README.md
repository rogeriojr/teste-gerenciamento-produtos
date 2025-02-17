Teste Frontend - Gerenciamento de Produtos

![image](https://github.com/user-attachments/assets/bb2a1081-3974-4b3a-8655-c520ca9cc879)


![image](https://github.com/user-attachments/assets/5fae1083-ebb7-47b0-be22-097f99e1e213)



📌 Objetivo

Desenvolver uma aplicação web para gerenciamento de produtos utilizando Next.js, TypeScript, Zustand para gerenciamento de estado, Tailwind CSS para estilização e consumo de API fictícia.

🛠 Tecnologias Utilizadas

Next.js - Framework React para SSR e SSG.

TypeScript - Tipagem estática para maior segurança.

Zustand - Gerenciamento global de estado.

Tailwind CSS - Estilização moderna e responsiva.

JSONPlaceholder - Mock de API para simulação de produtos.

Jest + Testing Library - Testes automatizados.

📋 Funcionalidades Implementadas

✅ Listagem de Produtos com Nome, Categoria, Preço, Descrição e Imagem.✅ Cadastro de Produtos via formulário (Nome, Preço, Descrição e URL da Imagem).✅ Filtro de Busca por nome e faixa de preço.✅ Ordenação dos produtos.✅ Gerenciamento de Estado Global com Zustand.✅ Consumo de API fictícia para obtenção dos produtos.✅ Estilização Responsiva com Tailwind CSS.✅ Persistência dos Produtos no LocalStorage.✅ Testes Automatizados (1 snapshot de tela).✅ Paginação para melhor navegação.

🚀 Como Rodar o Projeto

📦 Pré-requisitos

Node.js (versão 16+)

npm ou yarn

🔧 Instalação

# Clone o repositório
git clone https://github.com/rogeriojr/teste-gerenciamento-produtos.git

# Acesse a pasta do projeto
cd teste-gerenciamento-produtos

# Instale as dependências
npm install  # ou yarn install

▶️ Rodando o Projeto

npm run dev  # ou yarn dev

Acesse: http://localhost:3000

🌍 Deploy no Vercel
https://teste-gerenciamento-produtos-go5ff21fp-rogeriojrs-projects.vercel.app/

O projeto está hospedado no Vercel e pode ser acessado através do link:
🔗 Deploy no Vercel

📢 Como Fazer Deploy no Vercel

Caso deseje realizar o deploy do projeto, siga os passos:

Crie uma conta no Vercel.

Instale o CLI do Vercel (opcional):

npm install -g vercel

No diretório do projeto, execute:

vercel

Siga as instruções para configurar e implantar seu projeto.

🧪 Testes

Para rodar os testes automatizados:

npm run test  # ou yarn test

🏗 Estrutura do Projeto

📂 src
 ┣ 📂 components  # Componentes reutilizáveis
 ┣ 📂 pages       # Páginas do Next.js
 ┣ 📂 store       # Gerenciamento de estado com Zustand
 ┣ 📂 styles      # Estilizações globais (Tailwind CSS)
 ┣ 📂 utils       # Funções auxiliares e chamadas de API
 ┗ README.md      # Documentação do projeto

📜 Decisões Técnicas

Next.js + TypeScript: Melhor organização e segurança na tipagem do projeto.

Zustand: Gerenciamento de estado mais leve e simples que Redux.

Tailwind CSS: Facilidade na estilização e responsividade.

JSONPlaceholder: API fictícia para simular produtos reais.

Persistência com LocalStorage: Garante que os produtos cadastrados sejam mantidos na listagem após recarregar a página.

Testes com Jest: Para garantir qualidade e evitar regressões.

🔥 Melhorias Futuras

Implementar CRUD completo (atualização e exclusão de produtos).

Melhorar acessibilidade do layout.

Implementar autenticação para proteger algumas rotas.

👨‍💻 Autor

[Rogério Jr.] - Desenvolvedor Frontend

💡 Feedbacks e sugestões são bem-vindos! 🚀# teste-gerenciamento-produtos
