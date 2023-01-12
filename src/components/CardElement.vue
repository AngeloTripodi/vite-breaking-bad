<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },

}
</script>

<template>

    <div class="col-12 col-lg-3 col-sm-4 my_card" v-for="card in store.cardsList">
        <img :src="card.card_images[0].image_url" alt="">
        <h3>{{ card.name }}</h3>
        <p>{{ card.archetype }}</p>
    </div>


</template>

<style lang="scss" scoped>
.my_card {
    text-align: center;

    img {
        width: 70%;
    }
}
</style>