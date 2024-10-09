> [Home](../README.md)

### Entendimento do que foi gerado

- Sem precisarmos fazer nada, o comando `npm run dev` levantou um servidor _http_ totalmente já configurado para que possamos acessar nossa aplicação, e mais, automaticamente abriu o navegador padrão do sistema operacional que carregou o arquivo `treino-vue-pic/index.html`;
- Veremos que esse servidor voltado para o ambiente de desenvolvimento faz muito mais do que imaginamos, mas primeiro vamos entender a estrutura do projeto que foi criada, começando pelo conteúdo do arquivo `treino-vue-pic/index.html`:
  ```
  <!-- treino-vue-pic/index.html-->

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>treino-vue-pic</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="/dist/build.js"></script>
    </body>
  </html>
  ```
- Essa página apenas importa um _script_ e possui uma _div_ vazia. Para a página que estava sendo visualizada no navegador, todo o conteúdo exibido, inclusive todos os arquivos do diretório `treino-vue-pic/src`, foram transformados no _script_ `/dist/build.js`.

### Babel, Webpack e geração do _bundle_

- Caso esteja ansiosos para ver o conteúdo de `/dist/build.js`, isso não é possível, pois esse arquivo não existe fisicamente, ainda. O conteúdo do diretório `treino-vue-pic/src` é transformando em memória no arquivo ```build.js```, por isso o arquivo não existe. Isso acontece para acelerar o tempo de desenvolvimento, permitindo que o desenvolvedor veja o quanto antes o resultado de suas alterações no projeto;
- Sobre o arquivo `build.js`, a transformação dos arquivos do diretório `treino-vue-pic/src`, é gerada em duas etapas, sendo que cada uma, com uma ferramenta diferente;
- A primeira transformação, realizada pelo _Babel (package.json -> babel-...)_, executa o processo de transcompilação de todo o código escrito usando _ES2015 (ECMAScript 2015)_ para _ES5 (ECMAScript 5)_, garantindo uma maior compatibilidade da aplicação, principalmente com navegadores desatualizados de _smartphones_;
- A segunda transformação se encarrega de gerar um _bundle_ para que seja carregado pelo navegador, sendo feita pela dependência do _WebPack (package.json -> webpack)_;

### Componentes declarados em _Single File Templates_

- Agora que entendemos o motivo e como o `build.js` é gerado, vamos focar o diretório `treino-vue-pic/src` para entender o papel de cada arquivo que fará parte do bundle;
- O arquivo que corresponde à página que está sendo exibida no navegador é o `treino-vue-pic/src/App.vue`;
- No entanto, o arquivo `App.vue` não é uma página, mas um _Single file template_ (template de único arquivo), que equivale a um **módulo** que declara um **componente**:
  - O que precisa ser entendido, é que o arquivo sendo um **módulo**, podemos usar o componente que ele declara apenas importando em outros módulos da aplicação que queira utilizá-lo.
- Pensando em um módulo como uma _caixa preta_, podemos ter diversas funcionalidades e só aquelas que forem explicitamente exportadas que podem ser utilizadas em outros módulos:
  - Tanto isso é verdade que dentro da tag `<script>` do arquivo `App.vue`, existe a instrução `export default`, que permite que o componente seja importado por outros módulos;
  - Falando em componente, isso nada mais é do que um objeto que possui sua apresentação, o dado e o seu comportamento;
  - É por isso que os componentes são definido através de três grandes blocos:
    - `<template>` que define como o componente será apresentado;
    - `<script>` que define o comportamento e os dados do componente;
    - `<style>`que é o estilo _css_ que o componente possuirá.

> [Home](../README.md)