// "Global View Object", o core do "vue" importado do "node_modules_"
import Vue from 'vue'
// Importando o artefato "app" do arquivo "App.vue".
// Como foi utilizado a instrução "export default" na tag "script" do arquivo "App.vue",
// podemos fazer a impportação do artefato apenas informando o nome do arquivo "App" de "App.vue".
import App from './App.vue'

// Application
import VueResource from 'vue-resource';

// Registra que vamos utilizar o módulo do "vue-resource"
Vue.use(VueResource);

// Criar uma "View Instance", passando o objeto de configuração para ele
// O objeto de configuração:
//    "el" é o elemento do "index.html" que será o alvo para colocar o componente.
//        Foi utilizado o seletor de ids do "css", apontando para a '<div id="app">' do arquivo index.html.
// A "View Instance" tem a propriedade "render", uma função na sintaxe do ECMAScript 6 (ES2015).
new Vue({
  el: '#app',
  render: h => h(App)
})

/*
Observação: A instrução da "function" escrita em ECMAScript 6 (ES2015) para a propriedade "render", é a mesma coisa que: 
new Vue({
  el: '#app',
  render: function(h) {
    h(App);
  }
})
*/