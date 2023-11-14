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
        offset: 0
      },
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
        if (search === "All") {
          this.params.archetype = null
        }
        console.log(this.params)
      } else {
        this.params = this.params
      }
      this.getCards();
    },
    getCards() {
      const url = store.apiUrl;
      axios.get(url, { params: this.params }
      ).then((response) => {
        console.log(response.data.data);
        store.listCards = response.data.data;
        console.log(store.listCards.length);
      })
    }
  },
  mounted() {
    this.getCards();
    function getFig() {
      return axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    };
    function getArchetypeCard() {
      return axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
    };
    Promise.all([getFig(), getArchetypeCard()]).then(function (results) {
      const getCards = results[0];
      const getArch = results[1];
      console.log(results[1]);
      store.listArch = getArch.data;
      console.log(store.listArch);
    });

  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $colorBg;
}
</style>
