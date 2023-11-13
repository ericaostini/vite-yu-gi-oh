<template>
    <div class="cards">
        <img :src="image" :alt="name">
        <div>
            <h4 class="text-uppercase">{{ name }}</h4>
            <h6>{{ type }}</h6>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'
export default {
    name: 'CardComponent',
    props: ["image", "name", "type"],
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.cards {
    img {
        height: 200px;
    }
}
</style>