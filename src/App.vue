<script>
import MainApp from './components/MainApp.vue';
import MainHeader from './components/MainHeader.vue';

export default {
  components: {
    MainHeader,
    MainApp
  }
}

</script>

<template>
  <MainHeader />
  <MainApp />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>