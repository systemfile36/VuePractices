<template>
    <div class="event" :class="{show : isOpen}">
        <p>{{ text }}</p>
        <button @click="isOpen=false">X</button>
    </div>
</template>
<script>
export default {
    name: "EventComponent",
    props: {
        text: String,
    },
    data() {
        return {
            isOpen: true,
        }
    } 
}
</script>
<style>
    .event {
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        padding: 10px 20px;
        text-align: center;
        font-size: small;
        display: none;
        justify-content: space-between;
        align-items: center;
    }

    .show {
        display: flex;
    }

    .event p {
        color: currentColor;
        margin: 0;
    }
</style>