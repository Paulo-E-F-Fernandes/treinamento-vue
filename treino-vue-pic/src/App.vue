<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <!-- OBS.: Além do v-for="foto of fotos", também podemos utilizar o v-for="foto in fotos" -->
      <!-- Quando usamos "of", estamos mais próximos da sintaxe dos iterators em JavaScript. -->
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

    <!-- Atalho para criar a esturura abaixo. Digite no VSCode "ul>li*2>img", clica "Ctrl+Espaço" e selecione a opção com "Emmet Abbreviation" -->
    <!-- <ul>
      <li>
        <img :src="foto1.url" :alt="foto1.titulo">
      </li>
      <li>
        <img :src="foto2.url" :alt="foto2.titulo">
      </li>
    </ul> -->

    <!-- O problema do uso do "v-bind", é que o elemento vai ficar bastante "verboso", imagina colocar 4 atributos,
     teríamos 4 "v-binds". Imaginando isso, o "Vue" tem um "atalho" para não precisar ficar colocando o "v-bind", 
     sendo que apenas colocando ":" na frente do atributo, tem o mesmo efeito de ter o "v-bind". -->
    <!-- <img :src="foto.url" :alt="foto.titulo" /> -->

    <!-- Para fazer com que as informação sejam utilizadas no atributos do elemento, precisamos utilizar diretiva,
     como o "v-bind", dessa forma o vue "ensina" ao navegador como deve ser renderizado as informações. -->
    <!-- O "v-bind" faz a mesma coisa que a interpolação, só que dentro de um atributo, associando a informação 
     retornada no objeto com o atributo. -->
    <!-- <img v-bind:src="foto.url" v-bind:alt="foto.titulo" /> -->
    
    <!-- Dentro de atributos, por exemplo "src" e "alt", não pode ser utilizado interpolação. -->
    <!-- Por isso, o código abaixo vai apresentar erro ao tentar visualizar a página. -->
    <!-- <img src="{{ foto.url }}" alt="{{ foto.titulo }}" /> -->
  </div>
  <!-- O código abaixo vai apresentar o erro "Component template should contain exactly one root element",
   isso acontece pq no "Vue", dentro da tag "template", só pode existir apenas 1 elemento dentro dela.
   Para colocarmos mais de um elemento dentro do "template", precisamos envolver o código dentro de uma 
   tag "div" ou qualquer tag "container". -->
  <!-- Isso é uma exigência do Vue.js, a tag "template" deve ter apenas um elemento pai, e o restante deve 
   estar dentro desse elemento. -->
  <!-- <h1>Treino Vue Pic</h1>
  <img src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png" alt="Cachorro" /> -->
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Treino Vue Pic',
      fotos: [
        {
          url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
          titulo: 'Cachorro'
        },
        {
          url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
          titulo: 'Cachorrão'
        },
        {
          url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
          titulo: 'Cachorrinho'
        }
      ]
      // foto1: {
      //   url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //   titulo: 'Cachorro'
      // },
      // foto2: {
      //   url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //   titulo: 'Cachorrão'
      // }
    }
  }
}
</script>

<style>
</style>
