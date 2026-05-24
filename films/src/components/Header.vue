<template>
    <header>
        <router-link to="/">Главная</router-link>
        <router-link to="/seasons">Сезоны</router-link>
        <router-link to="/characters">Персонажи</router-link>
        <router-link to="/forum">Форум</router-link>
    </header>
</template>

<style scooped>
header {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    margin: 40px 0;
    border-radius: 50px;
    font-size: 25px;
    color: #e0e0e0;
    background: #111116;
}
</style>