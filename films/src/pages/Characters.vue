<script setup>
import CardCharacters from "../components/CardSeasons.vue";
import { onMounted, ref } from "vue";

let cards = ref([]);

async function GetData() {
  let data = await fetch("https://39ac6e15bd8fcd7d.mokky.dev/characters");
  cards.value = await data.json();
}
onMounted(GetData);
</script>

<template>
  <section>
    <CardCharacters v-for="(card, i) in cards" :key="i" :card="card" />
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
