import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    listCards: [],
})
export default {
    loading: '~/components/LoadingBar.vue'
}