<script>
import CreateLists from './CreateLists.vue';

export default {
    name: "MainApp",
    data() {
        return {

        };
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