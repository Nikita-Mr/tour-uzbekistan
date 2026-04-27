<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
main{
  min-height: 100vh;
}
</style>
