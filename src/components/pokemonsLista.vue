<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  NombrePokemon: String,
})

</script>

<template>
  <li class="list-group-item">
    <RouterLink 
      class="noline"
      :to="`/pokemons/${NombrePokemon}`">{{ NombrePokemon }}
    </RouterLink>
  </li>
</template>

