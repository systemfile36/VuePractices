<template>
<section id ="title">
    <div class="container">
      <div class="detail row align-items-center">
        <figure class="col-md-6">
          <img src="../assets/img/title.png"/>
        </figure>
        <div class="text col-md-6">
          <h2>Hello, <br/>I'm Lojin</h2>
        </div>
      </div>
      <div class="row align-items-center">
        <button class="btn btn-primary" @click="$emit('toggleDarkMode')">Toggle Dark Theme</button>
      </div>
    </div>
  </section>
</template>
<script>


</script>
<style scoped lang="scss">
    #title {

.container {
  $navbar_height: 56px; // navbar 높이값
  //height: 100vh;
  padding: $navbar_height;

  .row {
    height: 100%;
    //flex-direction: row-reverse;
  }
}

figure {
  img {
    width: 100%;
  }
  display: grid;
  place-items: center;
}

.text {
  h2 {
    font-size: 4em;
  }

  display: grid;
  place-items: center;
}


}
</style>