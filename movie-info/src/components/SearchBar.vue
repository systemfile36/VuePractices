<template>
    <div class="search-box">
        <input 
        type="search" 
        @change="changeHandler"
        placeholder="검색어 입력">
        <button>검색</button>
    </div>
</template>
<script>
export default {
    name: "SearchBarComponent",
    data() {
        return {
            inputText: '',
        }
    },
    watch: {
        /*
        inputText(newValue) {
            const result = this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(newValue.toLowerCase());
            });
            console.log(result);
            if(result.length <= 0) {
                alert("결과를 찾을 수 없습니다!");
            }
        }
        */
    }, 
    methods: {
        changeHandler(event) {
            this.inputText = event.target.value;
            //send inputText to App.vue by $emit
            this.$emit('searchMovie', this.inputText); 
        }
    },
    props: {
        //movies: Array,
    }
    
}
</script>
<style>
    .search-box {
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .search-box input {
        padding: 5px 10px;
    }

    .search-box button {
        margin: 0;
    }
</style>