<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import AppContainer from '@/components/AppContainer.vue';

const route = useRoute();
const newsId = route.params.id;

const form = ref({
  name: '',
  phone: '',
  email: '',
});

// В реальном проекте — fetch по newsId
const news = ref({
  id: newsId,
  image: '/assets/icons/news-detail.jpg',
  title: 'Flying to the Maldives from November 30!',
  content: [
    'Centrum Air and Centrum Holidays proudly launch an exclusive flight program to the Maldives — one of the world\'s most iconic and desirable beach destinations. Starting November 30, travelers can enjoy direct flights and convenient connections designed to provide maximum comfort on the way to the finest resorts of the Indian Ocean. Centrum Holidays offers a curated collection of hotels — from boutique island villas to luxurious 5-star resorts with overwater bungalows, all-inclusive programs, and private beaches.',
    '',
    'Why choose the Centrum Air & Centrum Holidays program:',
    '• Direct flights with excellent onboard service',
    '• Exclusive holiday packages and special rates',
    '• Reliable support throughout your journey',
    '• A selection of the best hotels, personally vetted by experts',
    '• Attractive prices for the opening of the season',
    '',
    'Make your Maldives holiday truly exceptional with the national airline and tour operator that know how to create the perfect travel experience.',
  ],
});

const breadcrumbs = computed(() => [
  { label: 'Main', path: '/' },
  { label: 'News', path: '/news' },
  { label: news.value.title, path: null },
]);
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero -->
    <section class="relative">
      <div class="hero-section">
        <div class="hero-image" :style="{ backgroundImage: `url(${news.image})` }" />
      </div>

      <AppContainer>
        <!-- Карточка с формой поверх hero -->
        <div class="wrapper-card contact-card border">
          <div class="card-item w-full">
            <h3 class="card-title">
              Contact us today to learn more about our unique offers
            </h3>
            <form class="contact-form" @submit.prevent>
              <div class="form-row">
                <input v-model="form.name" type="text" placeholder="Name" class="form-input" />
                <input v-model="form.phone" type="tel" placeholder="Phone" class="form-input" />
                <input v-model="form.email" type="email" placeholder="Email" class="form-input" />
                <button type="submit" class="send-btn">Send</button>
              </div>
              <p class="consent-text">
                By clicking the 'Send' button, you consent to the processing of personal data
              </p>
            </form>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <nav class="mb-[15px] sm:mb-[20px] mt-[30px]" aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-[11px] sm:text-[12px] lg:text-[14px] text-[#000] flex-wrap">
            <li v-for="(crumb, i) in breadcrumbs" :key="i" class="flex items-center gap-2">
              <router-link v-if="crumb.path" :to="crumb.path" class="hover:text-[#285aff] transition">
                {{ crumb.label }}
              </router-link>
              <span v-else class="text-[#888]">{{ crumb.label }}</span>
              <span v-if="i < breadcrumbs.length - 1" class="text-[#000]">
                <svg class="w-3 h-3 transition-transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </li>
          </ol>
        </nav>

        <!-- Контент -->
        <div class="content-wrapper">
          <h1 class="page-title">{{ news.title }}</h1>
          <div class="text-blocks">
            <p v-for="(paragraph, idx) in news.content" :key="idx" class="text-block">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </AppContainer>
    </section>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
}

/* Hero */
.hero-section {
  position: relative;
  height: 447px;
  width: 100%;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 447px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Карточка с формой */
.wrapper-card {
  position: relative;
  margin-top: -100px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
}

.card-item {
  flex: 1;
  padding: 23px;
}

.card-title {
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
}

.contact-form {
  width: 100%;
}

.form-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.form-input {
  flex: 1;
  min-width: 140px;
  padding: 8px 12px;
  border: 1px solid #000;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #285aff;
}

.send-btn {
  background-color: #ff00cc;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 32px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  min-width: 120px;
}

.send-btn:hover {
  opacity: 0.9;
}

.consent-text {
  font-size: 12px;
  color: #000;
  margin-top: 10px;
}

/* Контент */
.content-wrapper {
  padding-bottom: 80px;
}

.page-title {
  font-size: 54px;
  font-weight: 400;
  color: #000;
  margin-bottom: 40px;
}

.text-blocks {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 900px;
}

.text-block {
  font-size: 16px;
  line-height: 1.6;
  color: #000;
  white-space: pre-line;
}

/* Адаптив */
@media (max-width: 768px) {
  .hero-section,
  .hero-image {
    height: 358px;
  }

  .wrapper-card {
    margin-top: -60px;
  }

  .card-item {
    padding: 15px;
  }

  .card-title {
    font-size: 20px;
  }

  .form-row {
    flex-direction: column;
    align-items: stretch;
  }

  .form-input {
    width: 100%;
  }

  .send-btn {
    width: 100%;
  }

  .page-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .text-block {
    font-size: 14px;
  }
}

@media (min-width: 1440px) {
  .hero-section,
  .hero-image {
    height: 550px;
  }
}
</style>