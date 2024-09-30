<template>
    <section id="detail">
        <h1>{{ data[$route.params.id].title }}</h1>
        <article class="pb-5">
            <img 
                :src="data[$route.params.id].imgUrl"
                :alt="data[$route.params.id].title"
                class="img-fluid"/>
            <p>{{ data[$route.params.id].desc }}</p>
            <small class="text-secondary">{{ data[$route.params.id].skills }}</small>
            <p>
                <a
                    :href="data[$route.params.id].link"
                    class="btn btn-primary mt-4"
                    target="_blank">
                    홈페이지
                </a>
            </p>
            <br/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima reprehenderit quis impedit illo voluptates voluptas delectus libero necessitatibus officia autem veniam veritatis, totam fugiat earum, asperiores ipsum aliquam similique!</p>
            <button class="btn btn-secondary" @click="$router.back()">돌아가기</button>
        </article>
    </section>
</template>
<script setup>
    const props = defineProps({
        data: Array,
    })

</script>
<style lang="scss">
    #detail {
        padding: 56px;
    }
</style>