# SkillSync-app

[![Deploy](https://img.shields.io/badge/Vercel-live_demo-black?style=for-the-badge&logo=vercel)](https://skill-sync-app-xi.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-repositório-black?style=for-the-badge&logo=github)](https://github.com/globalsolution2semestre/SkillSync-app)

## 📖 Sobre o Projeto

O **SkillSync** é uma Single Page Application (SPA) desenvolvida como parte da Global Solution do 2º semestre da FIAP. O projeto simula uma rede profissional moderna, focada no futuro do trabalho, onde é possível exibir e explorar perfis de profissionais fictícios.

A aplicação permite a visualização de perfis em cards, com a opção de ver detalhes em um modal interativo, além de contar com sistemas de busca, filtros e um design responsivo com tema claro e escuro (Dark Mode).

## ✨ Funcionalidades

* **Listagem de Perfis:** Exibição dos profissionais em cards, carregados a partir de um arquivo JSON local.
* **Modal Interativo:** Ao clicar em um card, um modal exibe dados detalhados do profissional (informações pessoais, acadêmicas, experiências, soft skills, etc.).
* **Busca e Filtros:** Sistema funcional para filtrar profissionais por área, cidade ou tecnologia.
* **Design Responsivo:** Interface adaptável a diferentes tamanhos de tela, construída com Tailwind CSS.
* **Dark Mode:** Alternância entre tema claro (light) e escuro (dark).
* **Ações (Simuladas):** Botões funcionais de "Recomendar profissional" e "Enviar mensagem".
* **Servidor de Mensagens (simples):** Endpoint `POST /api/messages` e `GET /api/messages` para persistir e ler mensagens (arquivo: `src/data/messages.json`).
* **Back-end Python (SkillMatch AI):** Pequena API Flask em `python-SkillMatchAI/app.py` que integra com Google GenAI (via `google-genai`) para mapear skills e gerar roteiros de aprendizado.
* **Processos de leitura e persistência:** Mensagens são gravadas localmente e podem ser consultadas por perfil (filtrando por `professionalId`).

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **React** (Biblioteca principal da interface)
* **Vite** (Ambiente de desenvolvimento front-end)
* **Tailwind CSS** (Framework de estilização)
* **React Router DOM** (Para gerenciamento de rotas na SPA)

## 🔑 Login para autenticação

Email Lucas Souza: lucas.sousa@fiap.com.br

Email Wellinton Cidade: wellington.cidade@fiap.com.br

## *** Senha para autenticação

Senha Lucas: 150387fiap

Senha Welinton: 200575fiap

## 🎨 Telas da Aplicação

> <img width="1900" height="911" alt="image" src="https://github.com/user-attachments/assets/a3f0a3ec-5a97-4dae-a28b-36be33849a1a" />
> 
> ### Página Principal (Light/Dark)
> <img width="1893" height="908" alt="image" src="https://github.com/user-attachments/assets/2be724dd-2dbe-4895-a7f8-41bab4ca8886" />
>
> ### Modal de Perfil
> <img width="598" height="828" alt="image" src="https://github.com/user-attachments/assets/ff714e3a-3ca9-4f74-977b-1ac061364ed3" />
>
> ### SKillMatch AI em funcionamento
><img width="433" height="682" alt="image" src="https://github.com/user-attachments/assets/4d01b925-fd6e-4a5d-9819-7b76c800a694" />
>
>### Aba de profissionais do site
><img width="1900" height="910" alt="image" src="https://github.com/user-attachments/assets/e0667bf1-19f7-48b5-a2ff-30605233e913" />



## 🏁 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/globalsolution2semestre/SkillSync-app.git](https://github.com/globalsolution2semestre/SkillSync-app.git)
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd SkillSync-app
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute a aplicação:
    ```bash
    npm run dev
    ```
5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

**Observação (servidor de mensagens - Node):**

- Para iniciar o servidor simples que armazena mensagens localmente execute (a partir da raiz do projeto):

```bash
npm run server
# Por padrão o servidor escuta em http://localhost:4000
```

## 🖥️ Back-end Python (SkillMatch AI)

O diretório `python-SkillMatchAI/` contém uma API Flask que consome a biblioteca `google-genai` para mapear skills e gerar roteiros de estudo.

- Requisitos principais: `Flask`, `flask-cors`, `google-genai`, `python-dotenv`.

Passo a passo (usando `bash`):

```bash
# entre na pasta do backend
cd python-SkillMatchAI

# criar um virtualenv (opcional, recomendado)
python -m venv .venv
source .venv/bin/activate

# instalar dependências (opção 1 - instalar pacotes diretamente)
pip install flask flask-cors google-genai python-dotenv

# ou opção 2 - instalar pelo requirements.txt, se preferir
pip install -r ../requirements.txt

# rodar o servidor Flask
python app.py
# por padrão o Flask roda em http://localhost:5000
```

Endpoints importantes do Flask (`python-SkillMatchAI/app.py`):

- `GET /health` — checa se a API está pronta e se a variável `SKILLMATCH_API_KEY` está configurada.
- `POST /processar-chat` — recebe `nome`, `profissao`, `skills` e retorna `analise` + `roteiro` gerados pela IA.

## 🧑‍💻 Autores

Este projeto foi desenvolvido pela seguinte equipe:

* **Joao Vitor Parizotto Rocha** - RM: `562719`
* **Guilherme de Araujo Moreira** - RM: `561848`
* **Yan Barutti** - RM: `566412`
