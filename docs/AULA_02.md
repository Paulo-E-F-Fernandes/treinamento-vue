> [Home](../README.md)

### Criação de projetos

- O _Vue.js_ possui um _CLI (Command Line Interface)_ que auxilia o desenvolvedor e criar um novo projeto, evitando que o desenvolvedor necessite configurar os diretórios e também toda a configuração para a criação de _Single Page Applications_;
- Para utilizar o _CLI do Vue.js_, é necessário realizar a instalação do mesmo:
  - Abrir o terminal;
  - Executar o comando `npm install vue-cli -g`, sendo que o **"-g"** é para realizar a instalação da dependência globalmente no sistema operacional, ou seja, independente do diretório que se estiver, podemos chamar o _CLI do Vue.js_:
    - OBS.: Para executar o **-g**,é necessário possuir o privilégio de administrador.
  - Para verificar se foi instalador, utilizar o comando `vue --version` no terminal e será exibida a versão instalada.  
- Para criar o prejeto "teste-vue" com o _VueCLI_, utilizamos o comando:
  - `vue init webpack-simple teste-vue`
    - Onde o "webpack-simple" é o _template_ que será utilizado para moldar esse projeto:
      - No site do _VueCLI_ temos outros _templates_. 

### Vamos criar o projeto "treino-vue-pic"

- Abrir a janela do terminal no diretório base;
- Executar o comando `vue init webpack-simple treino-vue-pic`:
  - Será baixado o _template_ selecionado e alguma perguntas serão solicitadas, como nome do projeto, descrição, autor, etc.  
- Após a criação dos diretórios do projeto, o _VueCLI_ vai solicitar que alguns passos sejam realizados:
  - `cd treino-vue-pic` para entrar no diretório do projeto;
  - `npm install` para instalar todas as dependências que o projeto precisa, pois o ato de criar o projeto, não baixa as dependências;
  - `npm run dev` para executar o projeto criado.

> [Home](../README.md)