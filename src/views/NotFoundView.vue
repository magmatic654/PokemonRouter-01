<script setup>
    import { useRouter } from 'vue-router'
    
    const router = useRouter();

    const back = ()=>{
    router.push('/')
    }

</script>

<template>
    <h1>Pagina no Encontrada 404</h1>

    <button @click="back" >Volver</button>
</template>