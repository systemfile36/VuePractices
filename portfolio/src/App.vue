<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import data from './assets/portfolio'

let isDark = ref(false);

function toggleDarkHandler() {
  isDark.value = !isDark.value;
  var html = document.querySelector('html');
  var mode = isDark.value ? 'dark' : 'light';
  html.setAttribute('data-bs-theme', mode);
}



</script>

<template>

<NavBar 
@toggleDarkMode="toggleDarkHandler"/>

<router-view 
:data="data"
@toggleDarkMode="toggleDarkHandler"/>

</template>

<style scoped lang="scss">

</style>
