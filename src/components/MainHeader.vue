<script>
import { store } from '../store';

export default {
    name: 'MainHeader',
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
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-8 d-flex align-items-center" id="logoBox">
                    <img class="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg"
                        alt="yogioh logo">
                    <h1> Yu-Gi-Oh Api </h1>
                </div>
                <div class="col-4">
                    <div>
                        <label for="category">Select category:</label>
                        <select name="category" id="category">
                            <option value="a">a</option>
                            <option value="b">b</option>
                        </select>
                        <input type="text" name="searchField" id="searchField" v-model="store.searchText"
                            @keyup.enter="$emit('searchedCard', store.searchText)">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
#logoBox img {
    width: 10%;
    padding: 1rem 0;
}
</style>