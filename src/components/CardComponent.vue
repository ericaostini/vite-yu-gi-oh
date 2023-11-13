<template>
    <div class="card h-100">
        <img class="card-img-top" :src="image" :alt="name">
        <div class="card-body">
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

<style lang="scss" scoped></style>