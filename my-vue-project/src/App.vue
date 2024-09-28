<template>
  <NavBar :bgColor="bgColor"/>
  <div class="default">
    <h1>Test</h1>
    <button @click="countHandler">Count</Button>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  import NavBar from './components/NavBar.vue'

  let interval = null;

  let count = ref(0);

  let bgColor = ref('red');

  let colors = [
    "red", "green", "blue"
  ]
  let colors_index = 0;

  function changeBgColor() {
      bgColor.value = colors[colors_index];
      colors_index = (colors_index + 1) % colors.length;
  }

  function countHandler() {
    count.value++;
    console.clear();
    console.log(count.value);
  }

  onMounted(()=>{
    console.log('mounted');
    interval = setInterval(()=>{
      changeBgColor();
    }, 3000);
  })

  onUnmounted(()=>{
    clearInterval(interval);
  })

  watch(bgColor, ()=>{
    console.log(`bgColor change to ${bgColor.value}`);
  })

</script>

<style scoped>

  .default {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .default * {
    padding: 10px;
    margin: 10px;
  }
</style>
