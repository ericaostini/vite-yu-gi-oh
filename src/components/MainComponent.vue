<template>
    <div class="row container">
        <div class="col-4" v-for="(card, index) in store.listCards" :key="index">
            <CardComponent :name="card.name" :type="card.archetype" :image="card.card_images[0].image_url" />
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: "MainComponent",
    components: { CardComponent },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped></style>