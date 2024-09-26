<template>
  <div class="modal" v-if="isModal" @click="$emit('closeModal')">
    <div class="inner">
      <h3>{{ movies[selectedIndex].title }}</h3>
      <p>영화 상세정보</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
    name: "ModalComponent",
    props: {
        movies: Array,
        isModal: Boolean,
        selectedIndex: Number,
    }
}
</script>
<style>

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}

</style>