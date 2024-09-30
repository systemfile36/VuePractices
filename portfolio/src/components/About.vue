<template>
    <section id="about" class="container">
        <h1>About</h1>
        <div class="row">
            <fitgure class="col-md-6">
                <img src="../assets/img/profile.jpg" class="img-fluid" alt="profile">
                <figcaption>About Lojin</figcaption>
            </fitgure>
            <p class="col-md-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores temporibus vel vero assumenda voluptatem molestiae culpa explicabo, quisquam quis unde odio rerum, repellat dolorem doloremque quasi libero quam similique iste.</p>
        </div>
        <article class="row mt-4">
            <h2 class="mb-3">Skills</h2>
            <dl v-for="(skill, i) in skills" :key="i">
                <dt class="lead">{{ skill.name }}</dt>
                <dd>
                    <div class="progress" role="progressbar">
                        <div class="progress-bar" :style="`width: ${skill.point}`"></div>
                    </div>
                </dd>
            </dl>
        </article>
    </section>
</template>
<script setup>
import skills from '../assets/skills'



</script>
<style lang="scss">
    
</style>