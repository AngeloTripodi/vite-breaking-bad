<script>
import MainApp from './components/MainApp.vue';
import MainHeader from './components/MainHeader.vue';
import { store } from './store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getCards(searchedElement) {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0', {
        params: {
          archetype: searchedElement,
        }
      })
        .then((response) => {
          console.warn(searchedElement)
          console.log(response.data.data);
          console.log(store.archetypeList.indexOf(searchedElement))
          this.store.cardsList = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    },


  },

  created() {
    this.getCards();
  },
  components: {
    MainHeader,
    MainApp
  }
}

</script>

<template>
  <MainHeader @searchedCard="getCards" />
  <MainApp />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>