<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter.js'

const useCounter = useCounterStore()

const {increment} = useCounter
const {count, double} = storeToRefs(useCounter)


</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">Increment</button>
</template>
