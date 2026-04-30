<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
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
    <button @click="scrollToTop" class="up-btn">
      <img src="/src/assets/icons/upArrow.png" alt="Наверх" />
    </button>
  </div>
</template>

<style scoped>
.up-btn {
  position: fixed;
  bottom: 60px;
  right: 45px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  z-index: 100;

  /* Тень по вашему ТЗ: X -1, Y 2, Blur 10.4, Spread 0, цвет #000000 25% */
  box-shadow: -1px 2px 10.4px 0 rgba(0, 0, 0, 0.25);
}

/* Ховер как у синих кнопок */
.up-btn:hover {
  background: #285aff;
  transform: translateY(-3px);
  box-shadow: -1px 5px 15px 0 rgba(40, 90, 255, 0.35);
}

.up-btn:hover img {
  filter: brightness(0) invert(1); /* делает иконку белой */
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
