> [Home](../README.md)

### Global View Object

- Dentro da aplicação criada pelo _VueCLI_, existe o arquivo _main.js_, e esse arquivo é um dos primeiros que são carregados no _bundle_ gerado;
- No arquivo _main.js_ é que pegados o componente _app_ e indicamos onde o _index.html_ deve ser renderizado;
- Todo arquivo é um módulo, então no _main.js_ também é um módulo;
- No _main.js_, está sendo importando do módulo _App.vue_, o _App_;
  - Como no arquivo _App.vue_ estamos fazendo a exportação do componente `app` na _tag_ `<script>`, através da instrução `export default`. Devido ao _ECMAScript 6_, qunado utilizamos o `export default`, o nome do artefato que será importado será o mesmo nome do arquivo, no caso `App` _(App.vue)_, exemplo:
    - _App_ para _App.vue_;
    - _Carro_ para _Carro.vue_;
    - _TesteApp_ para _TesteApp.vue_.
- Agora para que possamos colocar o compoenete _App_ no arquivo _index.html_, vamos precisar do _core_ do _Vue_, que é o _Global View Object_;
  - Ao criar o projeto pelo _VueCLI_, ele sabe que ao importar componentes do _core_ do _vue_, esse componente precisa ser pego do diretório _vue_ de dentro do *node_modules*.
- Após pegar os objetos _App_ e _Vue_, é preciso criar uma _View Instance (`new Vue({})`)_, que é a "cola" entre o nosso componente com a "Vue".

> [Home](../README.md)