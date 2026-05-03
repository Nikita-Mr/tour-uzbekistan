<script setup>
import AppContainer from '@/components/AppContainer.vue';
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Хлебные крошки
const breadcrumbs = computed(() => [
  { label: t('breadcrumbs.main'), path: '/' },
  { label: t('breadcrumbs.directions'), path: null },
]);

// Форма
const form = ref({
  name: '',
  phone: '',
  email: '',
});

// Контент для v-for (потом будет приходить из WordPress)
const contentBlocks = ref([
  {
    title: 'Our Direction at Centrum Holidays DMC',
    text: 'At Centrum Holidays DMC, our direction is shaped by a clear vision: to position Uzbekistan as a well-managed, high-quality, and globally competitive destination while becoming a trusted destination management partner for international markets.'
  },
  {
    title: 'A Clear Strategic Vision',
    text: 'Our growth strategy is built on long-term sustainability rather than short-term expansion. We focus on developing strong foundations—operational excellence, destination expertise, and reliable partnerships—ensuring that every stage of our growth adds value to our clients, partners, and the destination itself.'
  },
  {
    title: 'Strengthening Destination Leadership',
    text: 'Centrum Holidays DMC aims to play an active role in shaping Uzbekistan\'s tourism landscape. By continuously developing new routes, experiences, and service concepts, we contribute to destination diversification while maintaining cultural authenticity and service quality.'
  },
  {
    title: 'Technology and Innovation Focus',
    text: 'Our direction is firmly aligned with technology-driven solutions. We continue to invest in digital infrastructure, API integrations, and data-driven decision-making to improve efficiency, transparency, and scalability. Innovation enables us to respond quickly to market needs and support our partners with smarter, faster solutions.'
  },
  {
    title: 'Expanding Global Partnerships',
    text: 'International market development is a key priority. We aim to strengthen our presence across diverse source markets by building long-term relationships with tour operators, travel agencies, and corporate partners. Our direction is focused on being a reliable, flexible, and solution-oriented DMC for global stakeholders.'
  },
  {
    title: 'Talent and Culture Development',
    text: 'Our future is powered by people. Centrum Holidays DMC is committed to developing skilled, motivated, and globally minded teams. By fostering a culture of ownership, accountability, and continuous learning, we ensure consistent service quality and operational resilience.'
  },
  {
    title: 'Responsible and Sustainable Growth',
    text: 'As we grow, we remain committed to responsible tourism practices. Our direction includes supporting local communities, working with trusted suppliers, and promoting sustainable operations that respect the destination\'s cultural and natural heritage.'
  },
  {
    title: 'Our Commitment',
    text: 'Centrum Holidays DMC\'s direction is guided by clarity, consistency, and purpose. By combining strategic growth, innovation, and destination expertise, we are building a DMC that delivers long-term value—today and for the future of tourism in Uzbekistan.'
  }
]);
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero -->
    <section class="relative">
      <div class="hero-section">
        <div class="hero-image"></div>
      </div>

      <AppContainer>
        <!-- Карточка с формой поверх hero -->
        <div class="wrapper-card contact-card border mb-[30px]">
          <div class="card-item w-full">
            <h3 class="card-title">
              {{ $t('about.contact_title') }}
            </h3>
            <form class="contact-form" @submit.prevent>
              <div class="form-row">
                <input
                  v-model="form.name"
                  type="text"
                  :placeholder="$t('about.name')"
                  class="form-input"
                />
                <input
                  v-model="form.phone"
                  type="tel"
                  :placeholder="$t('about.phone')"
                  class="form-input"
                />
                <input
                  v-model="form.email"
                  type="email"
                  :placeholder="$t('about.email')"
                  class="form-input"
                />
                <button type="submit" class="send-btn">
                  {{ $t('about.send') }}
                </button>
              </div>
              <p class="consent-text">
                {{ $t('about.consent') }}
              </p>
            </form>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <nav class="mb-[15px] sm:mb-[20px] mt-[30px] hidden lg:flex" aria-label="Breadcrumb">
          <ol
            class="flex items-center gap-2 text-[11px] sm:text-[12px] lg:text-[14px] text-[#000] flex-wrap"
          >
            <li
              v-for="(crumb, i) in breadcrumbs"
              :key="i"
              class="flex items-center gap-2"
            >
              <router-link
                v-if="crumb.path"
                :to="crumb.path"
                class="hover:text-[#285aff] transition"
              >
                {{ crumb.label }}
              </router-link>
              <span v-else class="text-[#888]">{{ crumb.label }}</span>
              <span v-if="i < breadcrumbs.length - 1" class="text-[#000]">
                <svg
                  class="w-3 h-3 transition-transform -rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </li>
          </ol>
        </nav>

        <!-- Контент (через v-for) -->
        <div class="content-wrapper">
          <h1 class="page-title">{{ $t('breadcrumbs.directions') }}</h1>

          <div class="text-blocks">
            <div v-for="(block, index) in contentBlocks" :key="index" class="text-block">
              <strong>{{ block.title }}</strong>
              <p>{{ block.text }}</p>
            </div>
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
  background-image: url('/assets/icons/directions.jpg');
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

/* Форма */
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
  margin-bottom: 60px;
}

.text-blocks {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.text-block {
  font-size: 18px;
  line-height: 1.6;
  color: #000;
}

.text-block strong {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
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
    font-size: 36px;
    margin-bottom: 30px;
  }

  .text-blocks {
    gap: 30px;
  }

  .text-block {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .hero-section {
    height: 458px;
  }
  .hero-image {
    height: 458px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 358px;
  }
  .hero-image {
    height: 358px;
    background-position: left;
  }
}

@media (min-width: 1921px) {
  .hero-section {
    height: 800px;
  }
  .hero-image {
    height: 800px;
  }
}
</style>