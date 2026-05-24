<script setup>
defineProps({
  card: Object,
})
</script>


<template>
  <div>
    <img :src="card.img"/>
    <h2>{{ card.title }}</h2>
    <p v-html="card.desc"></p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  flex-direction: column;
  gap: 40px;
  background: red;
  padding: 20px;
  border-radius: 16px;
}
img {
  aspect-ratio:  3/4;
  object-fit: cover;
  border-radius: 16px;
}
nav {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}
h2 {
  font-size: 40px;
}
p {
  font-size: 25px;
  line-height: 1.5;
  text-align: justify;
}
</style>