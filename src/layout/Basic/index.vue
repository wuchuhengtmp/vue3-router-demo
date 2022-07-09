<script setup lang="ts">
    import {RouterView, RouterLink } from 'vue-router'
    import TopBar from './TopBar.vue'
    import SideBar from './SideBar.vue'
</script>

<template>
    <TopBar />
    <div class="mainWrapper">
        <SideBar />
        <div>
            <RouterView />
        </div>
    </div>
</template>


<style scoped>
    .mainWrapper {
        display: grid;
        grid-template-columns: 10% auto;
        height: 80vh;
    }
</style>

