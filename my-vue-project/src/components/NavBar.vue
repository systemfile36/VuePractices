<template>
    <nav class="nav_bar" :style="{ backgroundColor : bgColor }">
        <a href="#">HOME</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
    </nav>
</template>
<script setup>
    const props = defineProps({
        bgColor: String,
    });
    console.log(props.bgColor);
</script>
<style scoped>
    .nav_bar {
        display: relative;
        padding: 25px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.7);
        transition: 2.5s;
    }

    .nav_bar a {
        color: white;
        text-decoration: none;
        padding: 1rem;
    }

</style>