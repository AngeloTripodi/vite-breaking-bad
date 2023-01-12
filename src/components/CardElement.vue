<script>
import { store } from '../store';

export default {
    name: 'CardElement',
    props: {
        singleCard: {
            type: Object,
            required: true,
        }
    },
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

    <div class="col-12 col-lg-3 col-sm-4 my_card">
        <img :src="singleCard.card_images[0].image_url" alt="">
        <h3>{{ singleCard.name }}</h3>
        <p>{{ singleCard.archetype }}</p>
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