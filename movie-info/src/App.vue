<template>
  <Navbar/>
  <Event text="예시용으로 넘기는 텍스트"/>
  <SearchBar :movies="movies"/>
  <Movies 
    :movies="movies"
    @openModal="isModal=true; selectedIndex=$event"
    @increaseLike="increaseLike($event)"/>

  <Modal 
    :movies="movies" 
    :isModal="isModal" 
    :selectedIndex="selectedIndex"
    @closeModal="isModal=false"
  />
</template>

<script>
import movies from './assets/js/movies.js'
import Navbar from './components/Navbar.vue'
import Event from './components/Event.vue'
import Modal from './components/Modal.vue'
import Movies from './components/Movies.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App', //컴포넌트 명
  data() {
    return {
      isModal: false,
      movies,
      selectedIndex: 0,
    }
  },
  methods: {
    increaseLike(movie) {
      movie.like++;
    }
  },
  components: {
    Navbar: Navbar,
    Event: Event,
    Modal: Modal,
    Movies: Movies,
    SearchBar: SearchBar,
  }
}
</script>

<style>
.bg-yellow {
  background-color: yellow;
}
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}



</style>