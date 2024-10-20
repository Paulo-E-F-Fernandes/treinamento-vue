<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<script>
export default {
    props: ['url', 'titulo']
}
</script>

<style scoped>
    .imagem-responsiva {
        /* Largura de 100% do elemento pai */
        width: 100%;
    }
</style>