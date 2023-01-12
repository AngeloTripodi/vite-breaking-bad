<script>
import { store } from '../store';
import CardElement from './CardElement.vue';

export default {
    name: "MainApp",
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
    <div class="container">
        <div class="row">
            <CardElement />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>