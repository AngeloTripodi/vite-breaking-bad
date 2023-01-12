<script>
import { store } from '../store';
import CardElement from './CardElement.vue';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {},
    components: { CardElement }
}
</script>

<template>

    <CardElement v-for="card in store.cardsList" :singleCard="card" />

</template>

<style lang="scss" scoped>

</style>