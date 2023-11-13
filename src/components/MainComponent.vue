<template>
    <div class="container" v-for="(card, index) in listCard" .:key="index">
        <CardComponent :image="card.card_image.image_url" :name="card.name" :type='card.archetype' />
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
            listCard: store.listCards
        }
    },
}
</script>

<style lang="scss" scoped></style>