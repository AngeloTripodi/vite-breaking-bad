<script>
import { store } from '../store';

export default {
    name: 'MainApp',
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
    <div>
        <p v-for="card in store.cardsList"> {{ card.name }} </p>
    </div>
</template>

<style lang="scss" scoped>

</style>