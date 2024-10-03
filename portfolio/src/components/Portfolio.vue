<template>
    <section id="portfolio" class="container">
        <h1>Portfolio</h1>
        <ul class="list row">
            <li class="col-md-4" v-for="(pf) in portfolio" :key="pf.id">
                <img :src="pf.imgUrl" :alt="pf.id"/>
                <h3>{{ pf.title }}</h3>
                <p>{{ pf.desc }}</p>
                <router-link 
                  :to="`/detail/${ pf.id }`"
                  class="btn btn-primary">상세보기</router-link>
            </li>
        </ul>
    </section>
</template>
<script setup>
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia';

import { onMounted } from 'vue';

const store = useMainStore();

//Destructive 문법으로 store의 상태 변수를 reactive로 가져옴
const {portfolio} = storeToRefs(store);

</script>
<style scoped lang="scss">
    #portfolio {
    h1 { margin-bottom: 1rem; }
    .list {
      list-style-type: none;
      padding: 0;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 10vh;
        img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: top;
        }
        h3 { margin-top: 1rem; }
        h4 { margin-top: 1rem; }
      }
    }
  } 
</style>