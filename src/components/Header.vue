<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import vClickOutside from 'click-outside-vue3';

// Даем ДРУГОЕ имя
const clickOutsideDirective = vClickOutside.directive;

const { t, locale } = useI18n();

// Dropdown states
const isCountriesOpen = ref(false);
const isLanguageOpen = ref(false);

// Countries list
const countriesList = [
  { code: 'uzbekistan', name: 'Uzbekistan' },
  { code: 'kazakhstan', name: 'Kazakhstan' },
  { code: 'kyrgyzstan', name: 'Kyrgyzstan' },
  { code: 'tajikistan', name: 'Tajikistan' },
  { code: 'caucasus', name: 'Caucasus' },
];

// Languages
const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbek" },
];

// Current language display
const currentLanguageLabel = computed(() => {
  const lang = languages.find((l) => l.code === locale.value);
  return lang ? lang.label : 'EN';
});

const closeCountriesDropdown = () => {
  isCountriesOpen.value = false
}

const closeLanguageDropdown = () => {
  isLanguageOpen.value = false
}

// Toggle functions
const toggleCountriesDropdown = () => {
  isCountriesOpen.value = !isCountriesOpen.value;
  isLanguageOpen.value = false; // Close other dropdowns
};

const toggleLanguageDropdown = () => {
  isLanguageOpen.value = !isLanguageOpen.value;
  isCountriesOpen.value = false; // Close other dropdowns
};

// Change language
const changeLanguage = (langCode) => {
  locale.value = langCode;
  localStorage.setItem('language', langCode);
  isLanguageOpen.value = false;

  // Optional: Update HTML lang attribute for SEO
  document.documentElement.lang = langCode;
};
</script>

<template>
  <div
    class="wrapper border-b"
  >
    <nav>
      <ul class="flex items-center w-full justify-between">
        <!-- Logo -->
        <div class="logo-block">
          <li>
            <router-link to="/">
              <img src="../assets/icons/Logo Orig.png" alt="Centrum Holidays" />
            </router-link>
          </li>
        </div>

        <!-- Navigation -->
        <div class="nav-block flex gap-[20px]">
          <li>
            <router-link class="nav-link" to="/about">{{
              $t('nav.about')
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/directions">{{
              $t('nav.directions')
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/services">{{
              $t('nav.services')
            }}</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/why-we">{{
              $t('nav.why_we')
            }}</router-link>
          </li>

          <!-- Countries Dropdown -->
          <li class="relative">
            <div
              @click="clickOutsideDirective(closeCountriesDropdown)"
              class="dropdown-container"
            >
              <button
                @click="toggleCountriesDropdown"
                class="flex items-center gap-1 hover:text-blue-600 transition cursor-pointer z-21 relative"
              >
                {{ $t('nav.countries') }}
                <svg
                  class="w-4 h-4 transition-transform"
                  :class="{ 'rotate-180': isCountriesOpen }"
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
              </button>

              <transition name="slide-down">
                <div
                  v-if="isCountriesOpen"
                  @click.away="isCountriesOpen = false"
                  class="absolute top-[-160%] left-[-18%] mt-2 bg-white border-r border-l border-b rounded-b-lg shadow-lg w-[130px] h-[270px] flex flex-col justify-end px-[15px] pb-1 z-20"
                >
                  <router-link
                    v-for="country in countriesList"
                    :key="country.code"
                    :to="`/countries/${country.code}`"
                    class="items-in-dropdown block py-[10px] hover:bg-gray-50 transition-colors"
                    @click="isCountriesOpen = false"
                  >
                    {{ $t(`countries.${country.code}`) }}
                  </router-link>
                </div>
              </transition>
            </div>
          </li>

          <li>
            <router-link class="nav-link" to="/tours">{{
              $t('nav.tours')
            }}</router-link>
          </li>
        </div>

        <!-- Contact & Actions -->
        <div class="contact-block flex gap-[21px] items-center">
          <div class="flex items-center gap-[11px]">
            <li>
              <a
                href="tel:+998992297575"
                class="hover:text-blue-600 transition"
              >
                +998(99) 229-75-75
              </a>
            </li>
            <div class="h-[20.5px] border border-[#000]"></div>
            <li>
              <router-link
                to="/for-agent"
                class="border border-[#000] rounded-[5px] px-[14px] py-1 hover:bg-gray-50 transition"
              >
                {{ $t('nav.for_agent') }}
              </router-link>
            </li>
            <div class="h-[20.5px] border border-[#000]"></div>
            <li>
              <a href="https://wa.me/998992297575" target="_blank">
                <img
                  src="../assets/icons/whatsapp.png"
                  alt="WhatsApp"
                  class="w-5 h-5"
                />
              </a>
            </li>
          </div>

          <!-- Language Dropdown -->
          <li>
            <div
              @click="clickOutsideDirective(closeLanguageDropdown)"
              class="dropdown-container"
            >
              <div class="relative">
                <button
                  @click="toggleLanguageDropdown"
                  class="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded transition cursor-pointer relative z-21"
                >
                  {{ currentLanguageLabel }}
                  <svg
                    class="w-4 h-4 transition-transform"
                    :class="{ 'rotate-180': isLanguageOpen }"
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
                </button>

                <div
                  v-if="isLanguageOpen"
                  @click.away="isLanguageOpen = false"
                  class="absolute top-[-160%] left-[-18%] mt-2 bg-white border-r border-l border-b rounded-b-lg shadow-lg w-[130px] h-[205px] flex flex-col justify-end px-[15px] pb-1 z-20"
                >
                  <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="changeLanguage(lang.code)"
                    class="items-in-dropdown block py-[10px] hover:bg-gray-50 transition-colors"
                  >
                    <span>{{ $t(`languages.${lang.code}`) }}</span>
                    <span
                      v-if="locale === lang.code"
                      class="text-green-600 ml-3"
                      >✓</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.wrapper {
  transition: background-color 0.3s ease;
}

.header-dimmed {
  background-color: rgba(0, 0, 0, 0.05);
}
.wrapper {
  padding: 26px 140px;
  font-family: 'Aeonik Pro', sans-serif;
}

.items-in-dropdown:not(:last-child) {
  border-bottom: 1px solid #4d4d5440;
}
.items-in-dropdown:first-child {
  border-top: 1px solid #4d4d5440;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  color: inherit;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #285aff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

li {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -2%;
  line-height: 100%;
  font-style: Regular;
}

.nav-link:hover {
  color: #285aff;
}

.nav-link:hover::after {
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.router-link-active.nav-link {
  color: #285aff;
}

.router-link-active.nav-link::after {
  width: 100%;
}

.dropdown-menu {
  max-height: 300px;
  overflow-y: auto;
}

/* Responsive */
@media (max-width: 1200px) {
  .wrapper {
    padding: 20px 40px;
  }

  .nav-block {
    gap: 15px;
  }

  .contact-block {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 16px 20px;
  }
}
</style>
