<template>
  <HeaderComponent />
  <main>
    <SearchComponent @get-type="typeCard" />
    <MainComponent />
    <LoadingComponent />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import SearchComponent from './components/SearchComponent.vue'
import MainComponent from './components/MainComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
export default {
  name: "App",
  components: {
    HeaderComponent,
    SearchComponent,
    MainComponent,
    LoadingComponent
  },
  data() {
    return {
      store,
      params: {
        num: 20,
        offset: 0,
        archetype: null
      }
    }
  },
  methods: {
    typeCard(search) {
      console.log(search)
      if (search) {
        this.params = {
          num: 20,
          offset: 0,
          archetype: search
        }
        console.log(this.params)
      } else {
        this.params = this.params
      }
      this.getCards()
    },
    getCards() {
      const url = store.apiUrl;
      axios.get(url, { params: this.params }
      ).then((response) => {
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

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $colorBg;
}
</style>
