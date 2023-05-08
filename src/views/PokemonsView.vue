<script setup>
  import { useGetData } from '../composables/getData'
  import pokemonsLista from '../components/pokemonsLista.vue';

  
const { data, getData, loading, errorData } = useGetData()

getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
  <div class="containerPokemones">
    <h1>Pokemones</h1>
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
    <h2 v-if="loading">Cargando Informacion...</h2>
    <div class="ul" v-if="data">
      <ul 
        v-for="pokemon in data.results"
          class="list-group">
          <pokemonsLista 
            :NombrePokemon="pokemon.name"
          ></pokemonsLista>
      </ul>
    </div>
    <div class="mt-2 mb-3 d-flex justify-content-center gap-3 ">
      <button :disabled="!data?.previous" class="btn btn-outline-secondary" @click="getData(data.previous)">Previous</button>
      <button :disabled="!data?.next" class="btn btn-outline-secondary" @click="getData(data.next)">Next</button>
    </div>
    </div>
  
</template>

