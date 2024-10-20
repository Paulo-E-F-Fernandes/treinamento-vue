<!-- Para gerar o conteúdo da "div" abaixo, o VSCode permite o uso do "Emmet", que é uma forma abreviada para gerar o html. -->
<!-- Foi utilizado a comando abaixo para gerar o conteúdo que será utilizado dentro da lista de itens da foto. -->
<!-- div.painel>h2.painel-titulo+div.painel-conteudo -->
<!-- <div class="painel"> -->
<!--   <h2 class="painel-titulo"></h2> -->
<!--   <div class="painel-conteudo"></div> -->
<!-- </div> -->

<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- O "v-on:" é uma diretiva do Vue.js que permite informar qual o evento que queremos colocar um código. -->
    <!-- O "v-on:input" será transformado pelo Vue para o evento "oninput", chamando a função quando for digitada -->
    <!--  alguma informação no campo em que está declarado. -->
    <!-- "$event" é um objeto especial do Vue.js que sabe tudo do evento disparado, no caso o evento "oninput". -->
    <!-- "target" representa quem disparou o evento, no caso o elemento "input". -->
    <!-- "value" é o valor informado no "target", no caso, o valor do "input". -->
    <!-- A cada caracter digitado no "input", o valor da variável será atualizado. -->
    <!-- O 'v-on:input="filtro = $event.target.value"' é um outro tipo de "data binding", o de evento, em que o valor -->
    <!--  da "view" vai para a fonte de dados, no caso, a variável "filtro" do objeto retornado pela função "data". -->
    <!-- A interpolação {{ filtro }} pega o valor da fonte de dados e manda para a "view". -->
    <!-- Só para enfatizar, vale ressaltar que "v-on" realiza um data binding unidirecional que flui da "view" para os dados -->
    <!--  e a "interpolação" ou "v-bind" realiza uma associação unidirecional que flui dos dados para "view". -->
    <!-- O "@input" é um atalho para o "v-on:input" -->
    <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="filtre por título" />

    <ul class="lista-fotos">
      <!-- OBS.: Além do v-for="foto of fotos", também podemos utilizar o v-for="foto in fotos" -->
      <!-- Quando usamos "of", estamos mais próximos da sintaxe dos iterators em JavaScript. -->
      <li class="lista-fotos-item" v-for="foto of fotosFiltradas">
        <!-- Utilizando o componente 'shared' que importamos e colocamos o apelido de 'meu-painel' -->
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
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
// 1.1) Só de colocar o "import" do componente, não quer dizer que App.vue está utilizando o componente
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue';

export default {
  // 1.2) Também precisamos colocar um apelido para o componente e dessa forma conseguimos referenciar o componente importado 
  components: {
    // Como utilizamos '-' no apelido do componente, foi preciso colocar entre aspas simples
    // Caso não tivesse o hifen, não seria necessário o uso das aspas simples
    // É uma boa prática colocar um prefixo, nos componentes que estão sendo importados
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      titulo: 'Treino Vue Pic',
      fotos: [],
      filtro: ''

      // Com a inclusão do VueResource para consumir os dados da API, não faz mais sentido ter uma lista fixa para exibir as fotos.
      // fotos: [
      //   {
      //     url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //     titulo: 'Cachorro'
      //   },
      //   {
      //     url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //     titulo: 'Cachorrão'
      //   },
      //   {
      //     url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //     titulo: 'Cachorrinho'
      //   }
      // ]

      // foto1: {
      //   url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //   titulo: 'Cachorro'
      // },
      // foto2: {
      //   url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      //   titulo: 'Cachorrão'
      // }
    }
  },

  // Todo o componente do Vue.js tem o que chamando de "Lifecycle Hooks" (gancho no ciclo de vida).
  // O "created" é uma das fases do ciclo de vida do componente, sendo uma função que é chamado no momento da criação do componente.
  // Para saber sobre os "hooks" de um componente, pode ser acessado o link https://vuejs.org/api/#Options-Lifecycle-Hooks
  created() {
    // Para acessar a API e buscar as fotos que devem ser exibidas no nosso componente,
    //  vamos usar a instrução "this.$http".
    // O "this" é para referenciar o próprio componente (App.vue) e o "$http", só está disponível
    //  no componente, pq importamos e registramos o "VueResource".
    // A função "get" retorno um "promise" 
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    // Para resolver a "promise" retornado pelo "get", utilizamos a função "then"
    // Ao resolver a primeira "promise", chamamos a função "json" do resultado (res), 
    //  e esse função também retorna uma "promise", por isso conseguimos encadear os "thens".
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));

    // Podemos deixar o código acima mais enxuto, como mostrado abaixo
    /*
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
    */
  },

  // O Vue oferece uma solução chamada de "computed property"
  // Na aplicação temos uma lista de fotos, que precisa ser computada podendo retornar uma lista diferente da original.
  // Sempre que tivemos que realizar algum cálculo ou aplicar alguma lógica dinamicamente podemos usar "computed property".
  // Dentro da propriedade "computed", devemos apenas colocar funções, pois necessitamos executar códigos com lógica.
  computed: {
    fotosFiltradas() {
      if (this.filtro) {
        // Primeiro vamos criar uma expressão regular para auxiliar no filtro
        // Vamos utilizar o valor informado em "this.filtro", e o 'i' significa que será utilizado "case insensitive"
        let regexp = new RegExp(this.filtro.trim(), 'i');
        // Vamos utilizar a expressão regular como condição do "filter" na lista de fotos.
        return this.fotos.filter(foto => regexp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    /* Para remover os bullets da lista de fotos */
    list-style: none;
  }

  /* Seletor hierárquico*/
  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
