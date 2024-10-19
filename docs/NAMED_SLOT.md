> [Home](../README.md)

### _Named Slot_

- No _Vue_ podemos colocar mais de um `slot` por componente, para que possamos inserir conteúdos em locais diferentes do componente;
- Para realizar isso, o _Vue_ disponibiliza a opção de `named slot`, que pode ser visto no exemplo abaixo:
  ```
  <!-- ComponenteQualquer.vue -->
  <template>
    <div>
      <slot name="cabecalho" class="header"></slot>
      <hr>
      <slot class="body"></slot>
      <hr>
      <slot name="rodape" class="footer"></slot>
    </div>
  </template>
  <script>
    export default {}
  </script>
  ```
- Podemos ver que no componente acima, existe três slots:
  - Dois nomeados:
    - `<slot name="cabecalho" class="header"></slot>`
    - `<slot name="rodape" class="footer"></slot>`
  - E um terceiro não nomeado:
    - `<slot class="body"></slot>`
- Quando for realizar o uso do componente `ComponenteQualquer.vue` em outro componente, podemos realizar da seguinte maneira:
  ```
  <componente-qualquer>
    <div slot="cabecalho">
      <h1>Bem-vindo!</h1>
    </div>
    <p>Seja bem-vindo ao Treinamento!</p>
    <div slot="rodape">
      <p>copyright 2017</p>
    </div>
  </componente-qualquer>
  ```
- As `divs` que receberam a propriedade `slot` e seu nome, serão incluídas dentro do seu respectivo `slot`;
- Já o parágrafo `Seja bem-vindo ao Treinamento!` será inserido no `slot` padrão, aquele que não recebeu um nome no componente `ComponenteQualquer.vue`. 

> [Home](../README.md)