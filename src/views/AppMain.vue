<script setup>
import AppContainer from '@/components/AppContainer.vue';

const mass = [
  {
    title: 'About us',
    descr:
      'Centrum Holidays DMC is a destination management company in Uzbekistan with a young, dynamic team, steadily growing and focused on innovation and high service standards. Founded in Tashkent in 2024 by Abdulaziz Abdurakhmanov.',
  },
  {
    title: 'Directions',
    descr:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Services',
    descr:
      'We provide end-to-end services for individual and group tourism, from airport transfers and visa support to accommodation, health tourism, cultural tours, and tailored programmes.',
  },
  {
    title: 'Why we?',
    descr:
      'Because this approach makes the entire process effortless for you. From the planning stage of your trip to its completion, it offers a comprehensive and reliable solution that you can confidently utilise at every step.',
  },
];
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero секция с картинкой -->
    <div class="hero-section">
      <div class="hero-image"></div>
      
      <!-- Контейнер для абсолютно позиционированного контента -->
      <AppContainer>
        <div class="hero-content">
          <h1>Excursion Tours to Uzbekistan and Central Asia</h1>
        </div>
      </AppContainer>
    </div>

    <!-- Карточки (уже не absolute) -->
    <AppContainer>
      <div class="wrapper-card">
        <div class="card-item" v-for="(item, index) in mass" :key="index">
          <div class="flex items-center justify-between mb-[25px]">
            <h3>{{ item.title }}</h3>
            <router-link to="" class="text-[#88888c] underline italic">More</router-link>
          </div>
          <div>
            <p class="max-w-[235px]">
              {{ item.descr }}
            </p>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
}

/* Hero секция */
.hero-section {
  position: relative;
  height: 558px;
  width: 100%;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 558px;
  background-image: url('../assets/icons/8ec662fe56344049271e593f6db12dfdb7df8bdb.png');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

/* Контент поверх картинки */
.hero-content {
  position: relative;
  z-index: 2;
  height: 558px;
  display: flex;
}

h1 {
  font-weight: 500;
  font-size: 55px;
  color: #fff;
  max-width: 500px;
  margin-top: 100px;
  /* Убираем margin-left, используем padding от AppContainer */
}

/* Карточки - накладываются на картинку на 30px */
.wrapper-card {
  position: relative;
  margin-top: -100px; /* Отрицательный margin, чтобы подняться на 30px вверх */
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e7;
  width: 100%;
  z-index: 3;
}

.card-item {
  flex: 1;
  padding: 23px;
}

.card-item:not(:last-child) {
  border-right: 1px solid #e6e6e7;
}

.card-item p {
  font-size: 12px;
  line-height: 1.3;
}

.card-item h3 {
  font-size: 24px;
  font-weight: 500;
  font-style: italic;
}

/* Адаптив */
@media (max-width: 1200px) {
  h1 {
    font-size: 40px;
    max-width: 400px;
  }
  
  .card-item h3 {
    font-size: 20px;
  }
  
  .card-item p {
    font-size: 11px;
  }
}

@media (max-width: 992px) {
  .wrapper-card {
    flex-wrap: wrap;
    margin-top: -15px;
  }
  
  .card-item {
    flex: 0 0 50%;
  }
  
  .card-item:nth-child(2) {
    border-right: none;
  }
  
  h1 {
    font-size: 32px;
    max-width: 300px;
    margin-top: 50px;
  }
  
  .hero-section {
    height: 458px;
  }
  
  .hero-image {
    height: 458px;
  }
  
  .hero-content {
    height: 458px;
  }
}

@media (max-width: 768px) {
  .wrapper-card {
    flex-direction: column;
    margin-top: -10px;
  }
  
  .card-item {
    flex: 0 0 100%;
  }
  
  .card-item:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid #e6e6e7;
  }
  
  h1 {
    font-size: 24px;
    max-width: 250px;
    margin-top: 30px;
  }
  
  .hero-section {
    height: 358px;
  }
  
  .hero-image {
    height: 358px;
  }
  
  .hero-content {
    height: 358px;
  }
}

@media (min-width: 1921px) {
  .hero-section {
    height: 800px;
  }
  
  .hero-image {
    height: 800px;
  }
  
  .hero-content {
    height: 800px;
  }
  
  h1 {
    font-size: 70px;
    max-width: 600px;
    margin-top: 150px;
  }
  .card-item p{
    /* max-width: 500px; */
  }
}
</style>