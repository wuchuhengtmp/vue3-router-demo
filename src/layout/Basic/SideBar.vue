<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class='main'>
      <nav class='nav'>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/products/index">ProdctIndexPage</RouterLink>
        <RouterLink to="/products/add">ProdctAddPage</RouterLink>
      </nav>
    </div>
</template>

<style scoped>
.main {
    background: green;
    height: 100%;
}
.nav {
    display: flex;
    flex-direction: column;
}
</style>
