<template>
  <Navbar/>
  <Event :text="text[eventTextIndex]"/>
  <SearchBar 
    @searchMovie="searchMovieHandler($event)"/>

  <div style="display: flex;justify-content: center;">
    <button @click="showAllMovie">전체 보기</button>
  </div>
  
  <Movies 
    :movies="movies_temp"
    @openModal="openModalHandler($event)"
    @increaseLike="increaseLike($event)"/>

  <Modal 
    :movies="movies" 
    :isModal="isModal" 
    :selectedMovie="selectedMovie"
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
      movies_temp: [...movies],
      selectedMovie: movies[0],
      text: [
        'NETPLOX 드라마 흑O요리사 방영중',
        '희대의 역작 콘코드 고평가...',
        '성공하면 혁명, 실패하면 반역, 서울의 봄'
      ],
      eventTextIndex: 0,
      interval: null,
    }
  },
  methods: {
    increaseLike(movie) {
      movie.like++;
    },

    openModalHandler(movie) {
      this.isModal = true;
      this.selectedMovie = movie;
    },

    searchMovieHandler(title) {
      const result = this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(title.toLowerCase());
            });
      if(result.length <= 0) {
        alert("결과를 찾을 수 없습니다.!");
      } else {
        this.movies_temp = result;
      }
    },

    showAllMovie() {
      //copy movies to movies_temp
      this.movies_temp = [...this.movies]
    }
  },
  components: {
    Navbar: Navbar,
    Event: Event,
    Modal: Modal,
    Movies: Movies,
    SearchBar: SearchBar,
  },
  mounted() {
    
    this.interval = setInterval(()=>{
      this.eventTextIndex = 
        (this.eventTextIndex + 1) % this.text.length;
    }, 3000);
  }, 
  unmounted() {
    //인터벌 해제
    clearInterval(this.interval);
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