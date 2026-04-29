<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main class="grow">
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
}
</style>
