<template>
    <div class="card">
        <img :src="image" :alt="name">
        <div>
            <h4 class="text-light text-uppercase mb-5">{{ name }}</h4>
            <h6>{{ type }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
}
</script>

<style lang="scss" scoped>
.cards {
    img {
        height: 150px;
        width: 150px;
    }
}
</style>