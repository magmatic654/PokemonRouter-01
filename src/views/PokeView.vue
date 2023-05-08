<script setup>
import { useGetData } from '../composables/getData'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const back = ()=>{
  router.push('/pokemons')
}

const { data, getData, loading, errorData} = useGetData();
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>  
  <div class="containerPokemones">
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
    <h2 v-if="loading">Cargando Informacion...</h2>
    <div class="div">
      <div v-if="data">
        <h1>Poke name: {{ $route.params.name }}</h1>
        <img :src="data?.sprites?.front_default" :alt="3">
      </div>
      
    </div>
    
      <button @click="back" class="btn btn-outline-secondary">Volver</button>
  </div>
</template>