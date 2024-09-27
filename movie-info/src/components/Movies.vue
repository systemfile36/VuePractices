<template>
    <div>
    <h1>영화정보</h1>
  <div v-for="(movie, i) in movies" :key="i" class="item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title">
    </figure>
    <div class="info">
      <h3 class="bg-yellow">{{ movie.title }}</h3>
      <p>개봉: {{ movie.year }}</p>
      <p>장르: {{ movie.category }}</p>
      <button @:click="$emit('increaseLike', movie)">좋아요</button> 
      <span>{{ movie.like }}</span>
    <br/>
      <button 
        @click="$emit('openModal', movie)">상세보기</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "MoviesComponent",

    props: {
        movies: Array,
    }
}
</script>
<style>
    
</style>