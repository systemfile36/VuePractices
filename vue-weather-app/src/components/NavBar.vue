<template>
    <nav class="navbar">
        <button class="toggle">
            <i class="fa-solid fa-bars-staggered icon"></i>
        </button>
    </nav>
</template>
<script setup>

</script>
<style scoped lang="scss">
    .navbar {
        background: #fff;
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content: end;
    }

    .toggle {
        border: none;
        background: transparent;
        cursor: pointer;

        .icon {
            color: #333;
            font-size: 24px;
        }
        
    }

</style>