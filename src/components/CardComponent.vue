<template>
    <div class="card h-100 bg-mycard">
        <img class="card-img-top" :src="image" :alt="name">
        <div class="card-body text-center ">
            <h5 class="text-uppercase text-light h-75 ">{{ name }}</h5>
            <h6 class="h-25 pb-2">{{ type }}</h6>
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
@use '.././assets/styles/partials/variables' as *;

.bg-mycard {
    background-color: $colorBg;
}
</style>