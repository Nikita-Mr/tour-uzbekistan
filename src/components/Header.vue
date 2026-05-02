<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t, locale } = useI18n();
const router = useRouter();

const isCountriesOpen = ref(false);
const isLanguageOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobileLangOpen = ref(false);

// === МОДАЛКА РОЛИ ===
const showRoleModal = ref(false);
const roleStep = ref('choose'); // 'choose' | 'login'

const openRoleModal = () => {
  showRoleModal.value = true;
  roleStep.value = 'choose';
};

const closeRoleModal = () => {
  showRoleModal.value = false;
  roleStep.value = 'choose';
};

const selectTourist = () => {
  closeRoleModal();
  router.push('/tours');
};

const selectAgent = () => {
  roleStep.value = 'login';
};

const goToRegister = () => {
  closeRoleModal();
  router.push('/register');
};
// ===================

const countriesList = [
  { code: 'uzbekistan', name: 'Uzbekistan' },
  { code: 'kazakhstan', name: 'Kazakhstan' },
  { code: 'kyrgyzstan', name: 'Kyrgyzstan' },
  { code: 'tajikistan', name: 'Tajikistan' },
  { code: 'caucasus', name: 'Caucasus' },
];

const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbek" },
];

const currentLanguageLabel = computed(() => {
  const lang = languages.find((l) => l.code === locale.value);
  return lang ? lang.code.toUpperCase() : 'EN';
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  isCountriesOpen.value = false;
  isLanguageOpen.value = false;
  isMobileLangOpen.value = false;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isMobileLangOpen.value = false;
};

const changeLanguage = (langCode) => {
  locale.value = langCode;
  localStorage.setItem('language', langCode);
  document.documentElement.lang = langCode;
  isLanguageOpen.value = false;
  isMobileLangOpen.value = false;
};
</script>

<template>
  <header class="wrapper border-b bg-white relative z-60">
    <nav class="flex items-center justify-between">
      
      <!-- Logo -->
      <router-link to="/" class="flex-shrink-0">
        <img src="../assets/icons/Logo Orig.png" alt="Centrum Holidays" class="h-8 lg:h-auto" />
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-5 xl:gap-[20px]">
        <router-link class="nav-link" to="/about">{{ $t('nav.about') }}</router-link>
        <router-link class="nav-link" to="/directions">{{ $t('nav.directions') }}</router-link>
        <router-link class="nav-link" to="/services">{{ $t('nav.services') }}</router-link>
        <router-link class="nav-link" to="/why-we">{{ $t('nav.why_we') }}</router-link>

        <!-- Countries Dropdown Desktop -->
        <div class="relative">
          <button @click="isCountriesOpen = !isCountriesOpen" class="flex items-center gap-1 nav-link">
            {{ $t('nav.countries') }}
            <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isCountriesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isCountriesOpen" v-click-outside="() => isCountriesOpen = false" class="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-[160px] py-2 z-50">
              <router-link v-for="c in countriesList" :key="c.code" :to="`/countries/${c.code}`" class="block px-4 py-2 text-sm hover:bg-gray-50" @click="isCountriesOpen = false">
                {{ $t(`countries.${c.code}`) }}
              </router-link>
            </div>
          </transition>
        </div>

        <router-link class="nav-link" to="/tours">{{ $t('nav.tours') }}</router-link>
      </div>

      <!-- Desktop Right Block -->
      <div class="hidden lg:flex items-center gap-4 xl:gap-[21px]">
        <a href="tel:+998992297575" class="text-sm hover:text-blue-600 transition">+998(99) 229-75-75</a>
        <div class="h-5 border-l border-black"></div>
        
        <!-- For Agent — открывает модалку -->
        <button
          @click="openRoleModal"
          class="border border-black rounded-[5px] px-3 py-1 text-sm hover:bg-gray-50 transition cursor-pointer"
        >
          {{ $t('nav.for_agent') }}
        </button>
        
        <div class="h-5 border-l border-black"></div>
        <a href="https://wa.me/998992297575" target="_blank">
          <img src="../assets/icons/whatsapp.png" alt="WhatsApp" class="w-5 h-5" />
        </a>

        <!-- Language Desktop -->
        <div class="relative">
          <button @click="isLanguageOpen = !isLanguageOpen" class="flex items-center gap-1 text-sm px-2 py-1 hover:bg-gray-100 rounded transition cursor-pointer">
            {{ currentLanguageLabel }}
            <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isLanguageOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isLanguageOpen" v-click-outside="() => isLanguageOpen = false" class="absolute top-full right-0 mt-2 bg-white border rounded-lg shadow-lg w-[140px] py-2 z-50">
              <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex justify-between">
                {{ $t(`languages.${lang.code}`) }}
                <span v-if="locale === lang.code" class="text-green-600">✓</span>
              </button>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mobile Right Block -->
      <div class="flex lg:hidden items-center gap-3">
        <button
          @click="openRoleModal"
          class="border border-black rounded-[5px] px-2 py-1 text-xs cursor-pointer"
        >
          {{ $t('nav.for_agent') }}
        </button>

        <!-- Burger -->
        <button @click="toggleMobileMenu" class="p-1" aria-label="Menu">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-40 overflow-y-auto">
        <div class="px-5 py-4 flex flex-col gap-1">
          
          <!-- Language Mobile -->
          <div class="border-b border-gray-100">
            <button @click="isMobileLangOpen = !isMobileLangOpen" class="mobile-link w-full flex justify-between items-center">
              Language ({{ currentLanguageLabel }})
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isMobileLangOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="isMobileLangOpen" class="pl-4 pb-3 flex flex-col gap-2">
              <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)" class="text-sm py-2 px-2 hover:bg-gray-50 rounded flex justify-between items-center">
                {{ $t(`languages.${lang.code}`) }}
                <span v-if="locale === lang.code" class="text-green-600 text-xs">✓</span>
              </button>
            </div>
          </div>

          <router-link to="/about" class="mobile-link" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link>
          <router-link to="/directions" class="mobile-link" @click="closeMobileMenu">{{ $t('nav.directions') }}</router-link>
          <router-link to="/services" class="mobile-link" @click="closeMobileMenu">{{ $t('nav.services') }}</router-link>
          <router-link to="/why-we" class="mobile-link" @click="closeMobileMenu">{{ $t('nav.why_we') }}</router-link>
          
          <!-- Countries Mobile -->
          <div class="border-b border-gray-100">
            <button @click="isCountriesOpen = !isCountriesOpen" class="mobile-link w-full flex justify-between items-center">
              {{ $t('nav.countries') }}
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isCountriesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="isCountriesOpen" class="pl-4 pb-2 flex flex-col gap-2">
              <router-link v-for="c in countriesList" :key="c.code" :to="`/countries/${c.code}`" class="text-sm text-gray-600 py-2" @click="closeMobileMenu">
                {{ $t(`countries.${c.code}`) }}
              </router-link>
            </div>
          </div>

          <router-link to="/tours" class="mobile-link" @click="closeMobileMenu">{{ $t('nav.tours') }}</router-link>
        </div>

        <!-- Mobile Bottom -->
        <div class="mt-auto px-5 py-5 border-t border-gray-100">
          <div class="flex items-center justify-between">
            <a href="tel:+998992297575" class="text-sm font-medium">+998(99) 229-75-75</a>
            <div class="flex items-center gap-3">
              <a href="https://wa.me/998992297575" target="_blank">
                <img src="../assets/icons/whatsapp.png" alt="WhatsApp" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ═══ МОДАЛКА ВЫБОРА РОЛИ (внутри хедера) ═══ -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showRoleModal"
          class="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          @click.self="closeRoleModal"
        >
          <!-- Шаг 1: Выбор роли -->
          <Transition name="scale" mode="out-in">
            <div
              v-if="roleStep === 'choose'"
              key="choose"
              class="bg-white rounded-[16px] w-full max-w-[360px] overflow-hidden shadow-xl"
            >
              <div class="px-6 pt-6 pb-4 text-center">
                <h3 class="text-[18px] font-medium text-black">
                  Выберите кто вы?
                </h3>
              </div>
              <div class="flex border-t border-[#e6e6e7]">
                <button
                  @click="selectTourist"
                  class="flex-1 py-4 text-[14px] text-[#333] hover:bg-[#f5f5f5] transition border-r border-[#e6e6e7] cursor-pointer"
                >
                  Турист
                </button>
                <button
                  @click="selectAgent"
                  class="flex-1 py-4 text-[14px] text-white bg-[#ff00cc] hover:bg-[#e000b8] transition font-medium cursor-pointer"
                >
                  Турагент
                </button>
              </div>
            </div>

            <!-- Шаг 2: Ввод данных -->
            <div
              v-else-if="roleStep === 'login'"
              key="login"
              class="bg-white rounded-[16px] w-full max-w-[360px] p-6 shadow-xl"
            >
              <h3 class="text-[18px] font-medium text-black text-center mb-6">
                Введите ваши данные
              </h3>
              
              <div class="flex flex-col gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 rounded-[8px] border border-[#e6e6e7] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  class="w-full px-4 py-3 rounded-[8px] border border-[#e6e6e7] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
                />
              </div>

              <button
                class="w-full py-3 rounded-[8px] bg-[#ff00cc] text-white text-[14px] font-medium hover:bg-[#e000b8] transition mb-3 cursor-pointer"
              >
                Continue
              </button>

              <p class="text-center text-[12px] text-[#888]">
                Ещё нет аккаунта?
                <button
                  @click="goToRegister"
                  class="text-[#285aff] hover:underline cursor-pointer"
                >
                  Зарегистрироваться
                </button>
              </p>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.wrapper {
  padding: 16px 20px;
  font-family: 'Aeonik Pro', sans-serif;
}

@media (min-width: 1024px) {
  .wrapper {
    padding: 20px 40px;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    padding: 26px 80px;
  }
}

@media (min-width: 1440px) {
  .wrapper {
    padding: 26px 140px;
  }
}

.nav-link {
  position: relative;
  padding-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
  cursor: pointer;
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

.nav-link:hover {
  color: #285aff;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active.nav-link {
  color: #285aff;
}

.router-link-active.nav-link::after {
  width: 100%;
}

/* Mobile link */
.mobile-link {
  display: flex;
  padding: 14px 0;
  font-size: 16px;
  color: #1a1a1a;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Modal scale animation */
.scale-enter-active, .scale-leave-active {
  transition: all 0.2s ease;
}
.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>