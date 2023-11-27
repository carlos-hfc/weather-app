# Weather App

Este é um projeto de aplicação web que permite aos usuários visualizarem a previsão do tempo de uma cidade específica. A aplicação utiliza React, Next.js e Typescript para criar uma interface amigável e responsiva, enquanto a API do OpenWeather fornece os dados precisos de previsão do tempo.

## Requisitos do Sistema

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (vem com o Node.js) ou yarn: [Instalação do Yarn](https://yarnpkg.com/getting-started/install)

## Configuração do Projeto

1. Clone o repositório para sua máquina:

   ```bash
   git clone https://github.com/carlos-HFC/weather-app
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd weather-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API do OpenWeather:

   ```env
   NEXT_PUBLIC_API_KEY=SuaChaveDeAPIAqui
   ```

   Você pode obter uma chave de API do OpenWeather em [https://openweathermap.org/api](https://openweathermap.org/api).

## Executando a Aplicação

Com as dependências instaladas e a chave de API configurada, você pode iniciar a aplicação:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação em ação.

## Uso da Aplicação

1. Na página inicial, você verá um campo de busca onde pode inserir o nome de uma cidade.
2. Após inserir o nome da cidade, aperte a tecla `ENTER`.
3. A aplicação exibirá a previsão do tempo atual.

## Tecnologias Utilizadas

- React
- Next.js
- Typescript
- Tailwind