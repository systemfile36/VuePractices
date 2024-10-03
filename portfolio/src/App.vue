<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import { useMainStore } from './stores/main';

const store = useMainStore();

onMounted(()=>{
  store.setDarkMode(store.isDarkMode());
})



</script>

<template>

<NavBar/>

<router-view/>

</template>

<style scoped lang="scss">

</style>
