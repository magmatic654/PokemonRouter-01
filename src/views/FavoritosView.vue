<script setup>
import { RouterLink } from 'vue-router';
import { useFavoritosStore } from '../store/favoritos'
import { storeToRefs } from 'pinia'


const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos


</script>

<template>
  <h1>Favoritos</h1>
  <p v-if="favoritos.length === 0">Sin favoritos</p>
  <ul v-else class="list-group">
    <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
      <div>
        {{ poke.name }}
      </div>
      <div>
          <RouterLink class="btn btn-primary mx-2" :to="`/pokemons/${poke.name}`">mas informacion</RouterLink>
        <button class="btn btn-danger" @click="remove(poke.id)">Eliminar</button>
      </div>
    </li>
  </ul>
</template>