<template>
    <div class="painel">
        <!-- O "@dblclick" é um atalho para o "v-on:dblclick" -->
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo  }}</h2>
        <!-- Não pode ser incluído o "v-show" no "slot", então é necessário colocar o "slot" -->
        <!--  dentro de uma "div" e na "div" colocamos o "v-show" -->
        <div class="painel-conteudo" v-show="visivel">
            <!-- Para que o Vue.js entenda onde deve ser colocado o contéudo que é colocado dentro da tag -->
            <!--  que representa esse componente compartilhável nos outros componentes, existe a tag "slot". -->
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['titulo'],
    data() {
        return {
            visivel: false
        }
    }
}
</script>

<!-- Para que o estilo descrito abaixo afeta apenas o "template" do componente, colocamos o atributo "scoped", -->
<!--  como isso, o Vue vai aplicar esse estilo apenas dentro desse componente, ou seja, caso outros componentes -->
<!--  tenham definido a mesma classe css (por exemplo, "painel"), o estilo definido nesse componente não afetará -->
<!--  o estilo definido por outros componenente com o mesmo nome. -->
<style scoped>
    /* Estilo do painel */
    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel-titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

    /* Estamos utilizando o seletor universal (*), ou seja, o estilo escrito dentro desse seletor */
    /*  será aplicado a todos os elementos da página, ou seja, com o escopo global. */
    /* Mas com a inclusão do atributo "scoped" na tag "style", esse seletor universal vai modificar */
    /*  apenas o template desse componente. */
    * {
        box-shadow: 5px 5px 5px;
    }
</style>
  