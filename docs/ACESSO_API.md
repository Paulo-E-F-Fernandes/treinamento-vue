> [Home](../README.md)

### Acessar _API_ com _Vue.js_

- Para que a aplicação _Vue.js_ consiga consumir os dados de uma _API_, vamos precisar utilizar um módulo extra, que não faz parte do _core_ do _Vue.js_;
- Esse módulo precisa ser baixado e dará a aplicação o poder de realizar as requisições para a _API_;
- O "vue-resource" é um exemplo de módulo que se intrega com o _Vue.js_, e permite realizar o consumo da _API_:
  - Com esse módulo, não temos a necessidade de realizar as requisições _ajax_, _xml/http request_, _fetch API_ ou _jquery_.

### Instalar o módulo _vue-resource_

- Para instalar o módulo _vue-resource_:
  - Precisamos estar dentro do diretório do projeto _Vue.js_;
  - Abrir um terminal;
  - Executar o comando `npm install vue-resource --save` nesse terminal:
    - O `--save` serve para incluir o módulo no _package.json_, sinalizando que o módulo é uma dependência da aplicação.
    - **OBS.:** No arquivo _package.json_, é realizada a separação das dependências para a aplicação funcionar (propriedade _"dependencies"_) e quais são as dependências apenas do ambiente de desenvolvimento (propriedade _"devDependencies"_).
  - Além de baixar a dependência, que agora está fazendo parte do diretório *node_modules*, também precisamos registrar essa dependência na nossa aplicação;
  - Para registrar a dependência na aplicação, precisamos:
    - Vamos fazer esse registro no arquivo _"main.js"_, que é um dos primeiros arquivos que são carregados;
    - Importar o artefato `VueResource` do módulo `'vue-resource'` atráves da instrução:
      - `import VueResource from 'vue-resource';`
    - Além de importar o módulo, precisamos registrar o mesmo. Isso ocorre também no arquivo _"main.js"_, solicitando que o _Global View Object_ use o artefato _VueResource_, através da instrução:
      - `Vue.use(VueResource);`
    - Com esse registro, os recursos do _VueResource_ estarão disponíveis em todos os componentes da aplicação. 

> [Home](../README.md)