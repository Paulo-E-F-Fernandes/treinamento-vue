# Treinamento _Vue.js_

Repositório criado para armazenar os códigos de treinamento em _Vue.js_.

- Para poder desenvolver utilizando _Vue_, é preciso da plataforma _Node.js_ instalada;
  - O _[Node.js](https://nodejs.org/pt)_ é um ambiente _JavaScript_ multiplataforma disponível para Linux, Mac e Windows.
  - É necessário no mínimo o _Node.js_ em sua versão 6.X:
    - Evite instalar versões ímpares do _Node.js_, pois essas não são _LTS ([long term support](https://pt.wikipedia.org/wiki/Suporte_de_longo_prazo))_.

- **Capítulo 01:**
  - [Aula 01 - Configuração do ambiente](docs/AULA_01.md)
  - [Aula 02 - Criação de projetos](docs/AULA_02.md)
  - [Aula 03 - Entendimento do que foi gerado](docs/AULA_03.md)
  - [Aula 04 - Global View Object](docs/AULA_04.md)
  - [Aula 05 - Interpolação e _data binding_](docs/AULA_05.md)
  - [Separação da _API_ e _UI_](docs/SEPARACAO_PROJETOS.md)

- **Comando para iniciar a UI**
  - Abrir uma janela de terminal;
  - `cd treino-vue-pic` para entrar no diretório do projeto;
  - `npm install` para instalar todas as dependências que o projeto precisa, pois o ato de criar o projeto, não baixa as dependências;
  - `npm run dev` para executar o projeto criado.

- **Comando para iniciar a API**
  - Abrir uma nova janela de terminal;
  - `cd treino-vue-pic-api` para entrar no diretório do projeto;
  - `npm start` para levantar o servidor que disponibiliza a _API_ que será utilizada pela nossa _UI_:
    - Se tudo correr bem, será exibida a seguinte mensagem no console: `API escutando na porta: 3000`.
    - Para verificar se a _API_ esta retornando dados, acesse o endereço http://localhost:3000/v1/fotos através de um navegador.