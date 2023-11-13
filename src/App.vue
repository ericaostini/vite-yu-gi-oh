<template>
  <HeaderComponent />
  <MainComponent />
  <LoadingComponent />
</template>

<script>
import axios from 'axios';
import { store } from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    LoadingComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      const url = store.apiUrl;
      axios.get(url).then((response) => {
        console.log(response.data.data);
        store.listCards = response.data.data;
        console.log(store.listCards.length)
      })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>
