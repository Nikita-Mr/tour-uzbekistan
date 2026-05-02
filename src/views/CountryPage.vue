<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import AppContainer from '@/components/AppContainer.vue';

const route = useRoute();
const countryCode = computed(() => route.params.country || 'uzbekistan');

const showScrollTop = ref(false);
const isCityModalOpen = ref(false);
const selectedCity = ref('');

const onScroll = () => {
  showScrollTop.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const openCityModal = () => {
  isCityModalOpen.value = true;
};
const closeCityModal = () => {
  isCityModalOpen.value = false;
};
const selectCity = (cityCode) => {
  selectedCity.value = cityCode;
  closeCityModal();
};

let scrollY = 0;
const lockBody = () => {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
};
const unlockBody = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
};

const countries = [
  { id: 'uz', label: 'Узбекистан', icon: '/assets/icons/uzbek.png' },
  { id: 'kz', label: 'Казахстан', icon: '/assets/icons/kazah.png' },
  { id: 'kg', label: 'Кыргызстан', icon: '/assets/icons/kyrg.png' },
  { id: 'tj', label: 'Таджикистан', icon: '/assets/icons/tad.png' },
  { id: 'cauc', label: 'Кавказ', icon: null },
];

// Блокируем скролл при открытой модалке
import { watch } from 'vue';
import CustomSelect from '@/components/CustomSelect.vue';
watch(isCityModalOpen, (val) => {
  if (val) lockBody();
  else unlockBody();
});

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

// ===== ДАННЫЕ ПО СТРАНАМ =====
const countriesData = {
  uzbekistan: {
    heroImage: '/assets/icons/countryPage.jpg',
    name: 'Узбекистан',
    welcomeTitle: 'Добро пожаловать в Узбекистан',
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    sidebarTitle: 'Туристические места Узбекистана',
    cities: [
      { code: 'tashkent', name: 'Ташкент' },
      { code: 'samarkand', name: 'Самарканд' },
      { code: 'bukhara', name: 'Бухара' },
      { code: 'khiva', name: 'Хива' },
      { code: 'fergana', name: 'Фергана' },
      { code: 'kokand', name: 'Коканд' },
      { code: 'nukus', name: 'Нукус' },
      { code: 'termez', name: 'Термез' },
      { code: 'shakhrisabz', name: 'Шахрисабз' },
      { code: 'muynak', name: 'Муйнак' },
      { code: 'chimgan', name: 'Чимган' },
    ],
    toc: [
      { id: 'why', title: 'Почему Узбекистан?' },
      { id: 'cuisine', title: 'Кухня Узбекистана' },
      { id: 'visa', title: 'Виза в Узбекистан' },
      { id: 'map', title: 'Карта Узбекистана' },
      { id: 'currency', title: 'Валюта Узбекистана' },
      { id: 'safety', title: 'Безопасность' },
    ],
    sections: [
      {
        id: 'why',
        title: 'Почему Узбекистан?',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'cuisine',
        title: 'Кухня Узбекистана',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 'visa',
        title: 'Виза в Узбекистан',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 'map',
        title: 'Карта Узбекистана',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 'currency',
        title: 'Валюта Узбекистана',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      },
      {
        id: 'safety',
        title: 'Безопасность',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  },
  kazakhstan: {
    heroImage: '/assets/icons/countryPage2.jpg',
    name: 'Казахстан',
    welcomeTitle: 'Добро пожаловать в Казахстан',
    intro:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    sidebarTitle: 'Туристические места Казахстана',
    cities: [
      { code: 'almaty', name: 'Алматы' },
      { code: 'astana', name: 'Астана' },
      { code: 'shymkent', name: 'Шымкент' },
      { code: 'turkestan', name: 'Туркестан' },
      { code: 'borovoe', name: 'Боровое' },
    ],
    toc: [
      { id: 'why', title: 'Почему Казахстан?' },
      { id: 'cuisine', title: 'Кухня Казахстана' },
      { id: 'visa', title: 'Виза в Казахстан' },
      { id: 'map', title: 'Карта Казахстана' },
      { id: 'currency', title: 'Валюта Казахстана' },
      { id: 'safety', title: 'Безопасность' },
    ],
    sections: [
      {
        id: 'why',
        title: 'Почему Казахстан?',
        text: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 'cuisine',
        title: 'Кухня Казахстана',
        text: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 'visa',
        title: 'Виза в Казахстан',
        text: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 'map',
        title: 'Карта Казахстана',
        text: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 'currency',
        title: 'Валюта Казахстана',
        text: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 'safety',
        title: 'Безопасность',
        text: 'Lorem ipsum dolor sit amet...',
      },
    ],
  },
  kyrgyzstan: {
    heroImage: '/assets/icons/countryPage.jpg',
    name: 'Кыргызстан',
    welcomeTitle: 'Добро пожаловать в Кыргызстан',
    intro: 'Lorem Ipsum is simply dummy text...',
    sidebarTitle: 'Туристические места Кыргызстана',
    cities: [
      { code: 'bishkek', name: 'Бишкек' },
      { code: 'issyk-kul', name: 'Иссык-Куль' },
      { code: 'osh', name: 'Ош' },
      { code: 'karakol', name: 'Каракол' },
    ],
    toc: [
      { id: 'why', title: 'Почему Кыргызстан?' },
      { id: 'cuisine', title: 'Кухня Кыргызстана' },
      { id: 'visa', title: 'Виза в Кыргызстан' },
      { id: 'nature', title: 'Природа Кыргызстана' },
      { id: 'currency', title: 'Валюта Кыргызстана' },
      { id: 'safety', title: 'Безопасность' },
    ],
    sections: [
      { id: 'why', title: 'Почему Кыргызстан?', text: 'Lorem ipsum...' },
      { id: 'cuisine', title: 'Кухня Кыргызстана', text: 'Lorem ipsum...' },
      { id: 'visa', title: 'Виза в Кыргызстан', text: 'Lorem ipsum...' },
      { id: 'nature', title: 'Природа Кыргызстана', text: 'Lorem ipsum...' },
      { id: 'currency', title: 'Валюта Кыргызстана', text: 'Lorem ipsum...' },
      { id: 'safety', title: 'Безопасность', text: 'Lorem ipsum...' },
    ],
  },
  tajikistan: {
    heroImage: '/assets/icons/countryPage2.jpg',
    name: 'Таджикистан',
    welcomeTitle: 'Добро пожаловать в Таджикистан',
    intro: 'Lorem Ipsum is simply dummy text...',
    sidebarTitle: 'Туристические места Таджикистана',
    cities: [
      { code: 'dushanbe', name: 'Душанбе' },
      { code: 'khujand', name: 'Худжанд' },
      { code: 'pamir', name: 'Памир' },
      { code: 'penjikent', name: 'Пенджикент' },
    ],
    toc: [
      { id: 'why', title: 'Почему Таджикистан?' },
      { id: 'cuisine', title: 'Кухня Таджикистана' },
      { id: 'visa', title: 'Виза в Таджикистан' },
      { id: 'pamir', title: 'Памирский тракт' },
      { id: 'currency', title: 'Валюта Таджикистана' },
      { id: 'safety', title: 'Безопасность' },
    ],
    sections: [
      { id: 'why', title: 'Почему Таджикистан?', text: 'Lorem ipsum...' },
      { id: 'cuisine', title: 'Кухня Таджикистана', text: 'Lorem ipsum...' },
      { id: 'visa', title: 'Виза в Таджикистан', text: 'Lorem ipsum...' },
      { id: 'pamir', title: 'Памирский тракт', text: 'Lorem ipsum...' },
      { id: 'currency', title: 'Валюта Таджикистана', text: 'Lorem ipsum...' },
      { id: 'safety', title: 'Безопасность', text: 'Lorem ipsum...' },
    ],
  },
  caucasus: {
    heroImage: '/assets/icons/countryPage.jpg',
    name: 'Кавказ',
    welcomeTitle: 'Добро пожаловать на Кавказ',
    intro: 'Lorem Ipsum is simply dummy text...',
    sidebarTitle: 'Туристические места Кавказа',
    cities: [
      { code: 'baku', name: 'Баку' },
      { code: 'tbilisi', name: 'Тбилиси' },
      { code: 'yerevan', name: 'Ереван' },
      { code: 'guba', name: 'Губа' },
      { code: 'sheki', name: 'Шеки' },
    ],
    toc: [
      { id: 'why', title: 'Почему Кавказ?' },
      { id: 'cuisine', title: 'Кухня Кавказа' },
      { id: 'visa', title: 'Виза на Кавказ' },
      { id: 'nature', title: 'Природа Кавказа' },
      { id: 'currency', title: 'Валюта' },
      { id: 'safety', title: 'Безопасность' },
    ],
    sections: [
      { id: 'why', title: 'Почему Кавказ?', text: 'Lorem ipsum...' },
      { id: 'cuisine', title: 'Кухня Кавказа', text: 'Lorem ipsum...' },
      { id: 'visa', title: 'Виза на Кавказ', text: 'Lorem ipsum...' },
      { id: 'nature', title: 'Природа Кавказа', text: 'Lorem ipsum...' },
      { id: 'currency', title: 'Валюта', text: 'Lorem ipsum...' },
      { id: 'safety', title: 'Безопасность', text: 'Lorem ipsum...' },
    ],
  },
};

const data = computed(() => {
  return countriesData[countryCode.value] || countriesData.uzbekistan;
});

const breadcrumbs = computed(() => [
  { label: 'Главная', path: '/' },
  { label: 'Страны', path: '/countries' },
  { label: data.value.welcomeTitle, path: null },
]);

const filters = ref({
  where: '',
  when: '',
  people: '',
  duration: '',
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero -->
    <section class="relative">
      <div class="hero-section">
        <div
          class="hero-image"
          :style="{ backgroundImage: `url(${data.heroImage})` }"
        />
      </div>
    </section>

    <AppContainer>
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

      <!-- МОБИЛЬНАЯ КНОПКА выбора города (только телефон) -->

      <!-- Десктопная форма поиска -->
      <div class="lg:hidden flex flex-col gap-2 sm:gap-3 mb-[35px]">
        <CustomSelect
          v-model="where"
          placeholder="Куда"
          :options="countries"
          type="list"
          class="w-full"
          :border="false"
        />
        <CustomSelect
          v-model="when"
          placeholder="Когда"
          type="calendar"
          class="w-full"
          :border="false"
        />
          <CustomSelect
            v-model="people"
            placeholder="Кол-во"
            type="counter"
            :min="1"
            :max="20"
            unit="чел"
            class="flex-1"
            :border="false"
          />
          <CustomSelect
            v-model="duration"
            placeholder="Дни"
            type="counter"
            :min="1"
            :max="30"
            unit="дн"
            class="flex-1"
            :border="false"
          />
        <button
          class="bg-[#a6a6aa] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-[8px] text-[13px] sm:text-[14px] font-medium hover:bg-[#285aff] transition cursor-pointer w-full"
        >
          Поиск
        </button>
      </div>

      <!-- Десктопная поисковая панель -->
      <div
        class="hidden lg:flex bg-white rounded-[12px] border px-[0.5px] mb-[35px]"
      >
        <CustomSelect
          v-model="where"
          placeholder="Куда"
          :options="countries"
          type="list"
        />
        <CustomSelect v-model="when" placeholder="Когда" type="calendar" />
        <CustomSelect
          v-model="people"
          placeholder="Кол-во человек"
          type="counter"
          :min="1"
          :max="20"
          unit="человек"
        />
        <CustomSelect
          v-model="duration"
          placeholder="Длительность"
          type="counter"
          :min="1"
          :max="30"
          unit="дней"
        />
        <button
          class="bg-[#a6a6aa] text-white px-8 py-3 text-[14px] font-medium hover:bg-[#285aff] transition cursor-pointer rounded-r-[10px] flex-shrink-0"
        >
          Поиск
        </button>
      </div>

      <!-- Контент + сайдбар -->
      <div class="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
        <!-- Левая колонка -->
        <div class="flex-1 min-w-0">
          <h1
            class="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-black mb-[20px] leading-tight"
          >
            {{ data.welcomeTitle }}
          </h1>

          <div class="lg:hidden mb-[15px]">
            <button
              @click="openCityModal"
              class="w-full flex items-center justify-between px-4 py-3 rounded-[10px] border border-[#285aff] bg-white text-left"
            >
              <span class="text-[14px] text-[#285aff]">
                {{
                  selectedCity
                    ? data.cities.find((c) => c.code === selectedCity)?.name
                    : `Туристические места ${data.name}`
                }}
              </span>
              <svg
                class="w-5 h-5 text-[#285aff] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <p
            class="text-[13px] sm:text-[14px] text-[#333] leading-[1.7] mb-[30px]"
          >
            {{ data.intro }}
          </p>

          <hr class="border-[#e5e5e6] mb-[30px]" />

          <!-- Содержание -->
          <div class="mb-[40px]">
            <h2
              class="text-[20px] sm:text-[24px] font-medium text-black mb-[20px]"
            >
              Содержание:
            </h2>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[10px]"
            >
              <button
                v-for="(item, idx) in data.toc"
                :key="item.id"
                @click="scrollToSection(item.id)"
                class="text-left text-[14px] text-[#333] hover:text-[#285aff] transition cursor-pointer"
              >
                {{ idx + 1 }}. {{ item.title }}
              </button>
            </div>
          </div>

          <hr class="border-[#e5e5e6] mb-[40px]" />

          <!-- Секции -->
          <div class="flex flex-col gap-[40px] lg:gap-[50px] pb-[60px]">
            <section
              v-for="section in data.sections"
              :key="section.id"
              :id="section.id"
            >
              <h2
                class="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-black mb-[15px]"
              >
                {{ section.title }}
              </h2>
              <p class="text-[13px] sm:text-[14px] text-[#333] leading-[1.7]">
                {{ section.text }}
              </p>
            </section>
          </div>
        </div>

        <!-- Сайдбар -->
        <aside
          class="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-[20px] self-start hidden lg:flex"
        >
          <div class="border border-[#e5e5e6] rounded-[15px] p-5 bg-white">
            <h3
              class="text-[14px] font-medium text-black mb-[15px] leading-snug"
            >
              {{ data.sidebarTitle }}
            </h3>
            <div class="flex flex-col gap-[10px]">
              <label
                v-for="city in data.cities"
                :key="city.code"
                class="flex items-center gap-[10px] cursor-pointer group"
              >
                <input
                  type="checkbox"
                  :checked="selectedCity === city.code"
                  @change="selectedCity = city.code"
                  class="w-[18px] h-[18px] accent-[#285aff] cursor-pointer"
                />
                <span
                  class="text-[13px] text-[#333] group-hover:text-[#285aff] transition"
                >
                  {{ city.name }}
                </span>
              </label>
            </div>
          </div>
        </aside>
      </div>
    </AppContainer>


    <!-- ═══ МОБИЛЬНАЯ МОДАЛКА ВЫБОРА ГОРОДА ═══ -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isCityModalOpen"
          class="fixed inset-0 bg-black/60 z-40 lg:hidden"
          @click="closeCityModal"
        ></div>
      </Transition>

      <Transition name="slide-up">
        <div
          v-if="isCityModalOpen"
          class="fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 lg:hidden max-h-[85vh] overflow-y-auto"
        >
          <!-- Шапка -->
          <div
            class="sticky top-0 bg-white px-5 pt-4 pb-3 border-b border-[#e6e6e7] flex items-center justify-between rounded-t-[20px]"
          >
            <h3 class="text-[18px] font-medium pr-4">
              Туристические места {{ data.name }}
            </h3>
            <button
              @click="closeCityModal"
              class="text-[14px] text-[#285aff] font-medium flex-shrink-0"
            >
              Закрыть
            </button>
          </div>

          <!-- Список городов -->
          <div class="py-2">
            <button
              v-for="city in data.cities"
              :key="city.code"
              @click="selectCity(city.code)"
              class="w-full text-left px-5 py-3.5 text-[16px] transition border-b border-[#f0f0f0] last:border-0 flex items-center justify-between"
              :class="
                selectedCity === city.code
                  ? 'text-[#285aff] font-medium bg-[#f8f9ff]'
                  : 'text-[#333] hover:bg-[#f5f5f5]'
              "
            >
              <span>{{ city.name }}</span>
              <svg
                v-if="selectedCity === city.code"
                class="w-5 h-5 text-[#285aff] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
}

.hero-section {
  position: relative;
  height: 350px;
  width: 100%;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Анимации модалки */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

/* Скрыть scrollbar в модалке */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
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

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}
</style>
