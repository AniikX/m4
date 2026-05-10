<script setup>
import CardSeasons from "../components/CardSeasons.vue"
</script>

<template>
    <section>
        <CardSeasons v-for="i in 3" :key="i"/>
    </section>
</template>