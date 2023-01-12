<script>
import { store } from '../store';
import CreateLists from './CreateLists.vue';
import axios from 'axios';

export default {
    name: "MainApp",
    data() {
        return {
            store,
        };
    },
    methods: {
        getCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0', {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.data);
                    this.store.cardsList = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getCards();
    },
    components: { CreateLists }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <CreateLists />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>