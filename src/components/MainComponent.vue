<template>
    <main>
        <div class="container bg-light p-4 rounded-2 ">
            <div class="bg-black text-light fw-bolder p-3 rounded-2">Fonud {{ store.listCards.length }} cards</div>
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                <div class="col" v-for="(card, index) in store.listCards" :key="index">
                    <CardComponent :name="card.name" :type="card.archetype" :image="card.card_images[0].image_url" />
                </div>
            </div>
        </div>
    </main>
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

<style lang="scss" scoped>
@use '.././assets/styles/partials/variables' as *;

main {
    .counter {
        height: 100px;
        background-color: $primaryColor;
    }
}
</style>