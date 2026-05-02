<script setup>
import AppContainer from '@/components/AppContainer.vue';
import { ref } from 'vue';

const breadcrumbs = [
  { label: 'Main', path: '/' },
  { label: 'About Us', path: null },
];

const form = ref({
  name: '',
  phone: '',
  email: '',
});
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
        <div class="wrapper-card contact-card border">
          <div class="card-item w-full">
            <h3 class="card-title">
              Contact us today to learn more about our unique offers
            </h3>
            <form class="contact-form" @submit.prevent>
              <div class="form-row">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Name"
                  class="form-input"
                />
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Phone"
                  class="form-input"
                />
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="form-input"
                />
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

        <!-- Контент -->
        <div class="content-wrapper">
          <h1 class="page-title">About Us</h1>

          <div class="text-blocks">
            <p class="text-block">
              It was established in 2024 by Abdulaziz Abdurrahmanov as a
              subsidiary of Centrum Holding. Centrum Holding, the flagship
              company, is one of the largest tourism holdings in the Republic of
              Uzbekistan, encompassing the country's leading tourism and
              transportation investments, including Centrum Air, Centrum Holidays
              Tour Operator, and Air Freightnet.
            </p>

            <p class="text-block">
              <strong>Centrum Holidays DMC</strong> is a destination management
              company based in Uzbekistan, specializing in delivering
              comprehensive, high-quality travel solutions for international
              partners and clients. As part of the Centrum Holding ecosystem,
              the company combines strong local expertise with global service
              standards to provide seamless leisure, group, and MICE travel
              experiences.
            </p>

            <p class="text-block">
              With in-depth destination knowledge, a reliable supplier network,
              and technology-driven operations, Centrum Holidays DMC offers
              end-to-end services including customized itineraries, hotels,
              transportation, tours, and on-ground coordination. Positioned as a
              trusted destination partner, the company focuses on operational
              excellence, tailored services, and long-term partnerships to
              showcase Uzbekistan as a competitive and well-managed travel
              destination.
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
  background-image: url('/assets/icons/about-us.jpg');
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

/* Адаптив */
@media (max-width: 768px) {
  .hero-section,
  .hero-image {
    height: 358px;
  }
}

@media (max-width: 1200px) {

}

@media (max-width: 768px) {
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