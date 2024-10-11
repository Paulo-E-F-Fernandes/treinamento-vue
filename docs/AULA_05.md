> [Home](../README.md)

### Interpolação e _data binding_

- No componente _App.vue_, temos a _tag_ `<template>`, que é onde colocamos colocamos como deve ser a tela apresentada:
  - Nesse _template_ podemos deixar lacunas que devem ser preenchidas com outras informações, por exemplo:
    - A **interpolação** `{{ msg }}`
    - Quem vai preencher é o próprio componente, que possui a função `data()` na _tag_ `<script>`:
      - A função `data()` sempre precisar retornar um objeto _javascript_, e suas propriedades são acessíveis atráves da sintaxe de interpolação (`{{ msg }}`):
      ```
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
      ```
- A **interpolação** é um tipo de _**data binding**_;
  - Através da interpolação, foi realizada a associação de uma origem de dados com o template;
  - Essa associação de dados (_data binding_), sempre flui da fonte de dado para o _template_, e nunca o contrário:
    - A interpolação é um _data binding_ unidirecional.

### _Live reloading:_

- _Live reloading:_ O servidor criado pelo _VueCLI_ para o desenvolvimento, possui o recurso de atualizar no navegador, qual alteração realizada nos arquivos do projeto.

> [Home](../README.md)