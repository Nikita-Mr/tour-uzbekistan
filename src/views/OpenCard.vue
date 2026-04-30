<script setup>
import { ref, computed } from 'vue';
import AppContainer from '@/components/AppContainer.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import Carousel from '@/components/Carousel.vue';

// ─── Хлебные крошки ───
const breadcrumbs = [
  { label: 'Главная', path: '/' },
  { label: 'Туры', path: '/tours' },
  { label: 'Туры в Узбекистане', path: '/tours' },
  { label: 'Тур "Выходные в Узбекистане" (3 дня / 2 ночи)', path: null },
];

// ─── Поисковая панель (как на странице туров) ───
const where = ref(null);
const when = ref('');
const people = ref(2);
const duration = ref(7);

const countries = [
  { id: 'uz', label: 'Узбекистан', icon: '/src/assets/icons/uzbek.png' },
  { id: 'kz', label: 'Казахстан', icon: '/src/assets/icons/kazah.png' },
  { id: 'kg', label: 'Кыргызстан', icon: '/src/assets/icons/kyrg.png' },
  { id: 'tj', label: 'Таджикистан', icon: '/src/assets/icons/tad.png' },
  { id: 'cauc', label: 'Кавказ', icon: null },
];

// ─── Данные тура ───
const tour = {
  title: 'Тур "Выходные в Узбекистане"',
  subtitle: '(3 дня / 2 ночи)',
  mainImage: '/src/assets/icons/card.png',
  gallery: [
    '/src/assets/icons/card.png',
    '/src/assets/icons/card.png',
    '/src/assets/icons/card.png',
    '/src/assets/icons/card.png',
  ],
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  duration: '3 дня',
  transport: 'Поезд, автобус',
  tourists: 'от 2 до 16',
  hotels: '2 ночи',
  comfort: '3, 4 звезды',
  mapImage: '/src/assets/icons/map.png',
};

const activeImage = ref(tour.mainImage);
const activeIndex = ref(0);

// Функция выбора фото
const allImages = computed(() => {
  return [tour.mainImage, ...(tour.gallery || [])];
});

const currentIndex = ref(0);
const currentImage = computed(() => allImages.value[currentIndex.value]);

// Навигация
const nextImage = () => {
  if (currentIndex.value < allImages.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // зацикливание
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = allImages.value.length - 1; // зацикливание
  }
};

// Выбор фото через миниатюру
const selectImage = (index) => {
  currentIndex.value = index;
};

// ─── Дни программы ───
const days = ref([
  {
    id: 1,
    title: '1 День - Прибытие',
    content: tour.description,
    expanded: true,
  },
  {
    id: 2,
    title: '2 День - Ташкент',
    content: tour.description,
    expanded: false,
  },
]);

const toggleDay = (id) => {
  const day = days.value.find((d) => d.id === id);
  if (day) day.expanded = !day.expanded;
};

// ─── Что включено / не включено ───
const included = [
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
];

const notIncluded = [
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
];

// ─── Другие даты ───
const otherDates = [
  { date: '20.05.2025', price: 100, oldPrice: 120 },
  { date: '30.05.2025', price: 100, oldPrice: 120 },
  { date: '04.03.2025', price: 100, oldPrice: 120 },
  { date: '06.05.2025', price: 100, oldPrice: 120 },
];

// ─── Табы ───
const activeTab = ref('details');
const tabs = [
  { id: 'details', label: 'Узнать больше' },
  { id: 'route', label: 'Маршруты' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'transport', label: 'Транспорт' },
  { id: 'countries', label: 'О Странах' },
];
</script>

<template>
  <div>
    <!-- ═══ ПОИСКОВАЯ ПАНЕЛЬ (как на странице туров) ═══ -->
    <section class="mb-[20px] sm:mb-[30px]">
      <AppContainer>
        <!-- Хлебные крошки -->
        <nav class="mb-[15px] sm:mb-[20px]" aria-label="Breadcrumb">
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
              <span v-else class="text-[#000]">{{ crumb.label }}</span>
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

        <!-- Мобильная поисковая панель -->
        <div class="lg:hidden flex flex-col gap-2 sm:gap-3">
          <CustomSelect
            v-model="where"
            placeholder="Куда"
            :options="countries"
            type="list"
            class="w-full"
          />
          <CustomSelect
            v-model="when"
            placeholder="Когда"
            type="calendar"
            class="w-full"
          />
          <div class="flex gap-2 sm:gap-3">
            <CustomSelect
              v-model="people"
              placeholder="Кол-во"
              type="counter"
              :min="1"
              :max="20"
              unit="чел"
              class="flex-1"
            />
            <CustomSelect
              v-model="duration"
              placeholder="Дни"
              type="counter"
              :min="1"
              :max="30"
              unit="дн"
              class="flex-1"
            />
          </div>
          <button
            class="bg-[#a6a6aa] text-white px-6 py-2.5 rounded-[8px] text-[13px] font-medium hover:bg-[#285aff] transition cursor-pointer w-full"
          >
            Поиск
          </button>
        </div>

        <!-- Десктопная поисковая панель -->
        <div class="hidden lg:flex bg-white rounded-[12px] border px-[0.5px]">
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
      </AppContainer>
    </section>

    <!-- ═══ ОСНОВНОЙ КОНТЕНТ ═══ -->
    <section class="mb-[50px] sm:mb-[70px]">
      <AppContainer>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <!-- ЛЕВАЯ КОЛОНКА -->
          <div class="flex-1 min-w-0">
            <!-- Заголовок -->
            <h1
              class="text-[22px] sm:text-[28px] lg:text-[36px] font-medium mb-1 leading-tight mb-4 sm:mb-6"
            >
              {{ tour.title }} {{ tour.subtitle }}
            </h1>

            <!-- Главное фото -->
            <div
              class="relative rounded-[16px] overflow-hidden mb-4 sm:mb-5 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] group"
            >
              <img
                :src="currentImage"
                :alt="tour.title"
                class="w-full h-full object-cover"
              />

              <!-- Счетчик фото -->
              <div
                class="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full"
              >
                {{ currentIndex + 1 }} / {{ allImages.length }}
              </div>

              <!-- Кнопка "Назад" -->
              <button
                @click="prevImage"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <!-- Кнопка "Вперед" -->
              <button
                @click="nextImage"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <!-- Точки индикаторы (опционально) -->
              <div
                class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
              >
                <div
                  v-for="(_, i) in allImages"
                  :key="i"
                  @click="selectImage(i)"
                  class="transition-all duration-300 cursor-pointer rounded-full bg-white/50 hover:bg-white"
                  :class="i === currentIndex ? 'w-6 h-1.5' : 'w-1.5 h-1.5'"
                ></div>
              </div>
            </div>

            <!-- Галерея миниатюр -->
            <div
              class="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto p-2 scrollbar-hide"
            >
              <div
                v-for="(img, i) in allImages"
                :key="i"
                @click="selectImage(i)"
                class="flex-shrink-0 w-[80px] h-[60px] sm:w-[100px] sm:h-[75px] lg:w-[120px] lg:h-[90px] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300"
                :class="{
                  'ring-2 ring-[#285aff] scale-105': currentIndex === i,
                  'opacity-40 hover:opacity-70': currentIndex !== i,
                }"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- Табы -->
            <div class="flex mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                class="px-4 py-2 sm:px-5 sm:py-2.5 first:rounded-l-[15px] last:rounded-r-[15px] border text-[12px] sm:text-[13px] font-medium whitespace-nowrap transition cursor-pointer"
                :class="
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'text-[#000] hover:bg-[#e5e5e5]'
                "
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Дни программы -->
            <div class="space-y-4 sm:space-y-6">
              <div
                v-for="day in days"
                :key="day.id"
                class="border-b border-[#e6e6e7] pb-4 sm:pb-6"
              >
                <button
                  @click="toggleDay(day.id)"
                  class="w-full flex items-center justify-between text-left mb-3 sm:mb-4 cursor-pointer"
                >
                  <h2
                    class="text-[18px] sm:text-[22px] lg:text-[26px] font-medium"
                  >
                    {{ day.title }}
                  </h2>
                  <svg
                    class="w-5 h-5 sm:w-6 sm:h-6 transition-transform flex-shrink-0 ml-4"
                    :class="{ 'rotate-180': day.expanded }"
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
                <Transition name="fade">
                  <p
                    v-if="day.expanded"
                    class="text-[12px] sm:text-[13px] lg:text-[14px] text-[#666] leading-[1.7]"
                  >
                    {{ day.content }}
                  </p>
                </Transition>
              </div>
            </div>

            <!-- Что включено / не включено -->
            <div class="mt-8 sm:mt-12">
              <h3 class="text-[18px] sm:text-[22px] font-medium mb-4 sm:mb-6">
                В тур включено / В тур не включено
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <!-- Включено -->
                <div>
                  <h4
                    class="text-[14px] sm:text-[16px] font-medium mb-3 sm:mb-4"
                  >
                    В тур включено
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, i) in included"
                      :key="i"
                      class="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#666]"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full bg-[#285aff] flex-shrink-0"
                      ></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <!-- Не включено -->
                <div>
                  <h4
                    class="text-[14px] sm:text-[16px] font-medium mb-3 sm:mb-4"
                  >
                    В тур не включено
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(item, i) in notIncluded"
                      :key="i"
                      class="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#666]"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full bg-[#ccc] flex-shrink-0"
                      ></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- ПРАВАЯ КОЛОНКА (сайдбар) -->
          <div class="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0">
            <div class="border border-[#000] rounded-[16px] bg-white">
              <!-- Описание -->
              <p
                class="text-[11px] sm:text-[16px] text-[#000] leading-[1] py-[20px] border-b border-b-[#e3e3e4] p-[40px]"
              >
                Исследуйте красоты страны, насладитесь местной кухней и откройте
                для себя культурные достопримечательности за 3 дня
              </p>

              <!-- Характеристики -->
              <div class="">
                <div
                  class="flex items-center gap-3 px-[40px] py-[25px] border-b border-b-[#e3e3e4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C11.6355 15 15 11.6355 15 7.5C15 3.3645 11.6355 0 7.5 0ZM7.5 13.5C4.19175 13.5 1.5 10.8082 1.5 7.5C1.5 4.19175 4.19175 1.5 7.5 1.5C10.8082 1.5 13.5 4.19175 13.5 7.5C13.5 10.8082 10.8082 13.5 7.5 13.5Z"
                      fill="black"
                    />
                    <path
                      d="M8.25 3.75H6.75V7.8105L9.21975 10.2802L10.2802 9.21975L8.25 7.1895V3.75Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >Длительность:
                    <span class="font-medium">{{ tour.duration }}</span>
                  </span>
                </div>
                <div
                  class="flex items-center gap-3 px-[40px] py-[25px] border-b border-b-[#e3e3e4]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-[#000] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >Транспорт:
                    <span class="font-medium">{{ tour.transport }}</span>
                  </span>
                </div>
                <div
                  class="flex items-center gap-3 px-[40px] py-[25px] border-b border-b-[#e3e3e4]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-[#000] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >Туристов:
                    <span class="font-medium">{{ tour.tourists }}</span>
                  </span>
                </div>
                <div
                  class="flex items-center gap-3 px-[40px] py-[25px] border-b border-b-[#e3e3e4]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-[#000] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >Города: <span class="font-medium">{{ tour.hotels }}</span>
                  </span>
                </div>
                <div
                  class="flex items-center gap-3 px-[40px] py-[25px] border-b border-b-[#e3e3e4]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-[#000] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >Проживание:
                    <span class="font-medium">{{ tour.comfort }}</span>
                  </span>
                </div>
              </div>

              <!-- Карта -->
              <div
                class="rounded-[12px] overflow-hidden mb-4 sm:mb-5 aspect-[4/3]"
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=69.279737,41.311151&z=7&l=map"
                  class="w-full h-full"
                  style="border: 0"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>

              <!-- Подробнее -->
              <button
                class="w-full text-center text-[12px] sm:text-[13px] text-[#666] hover:text-[#285aff] transition mb-4 sm:mb-5 flex items-center justify-center gap-1"
              >
                Подробнее
                <svg
                  class="w-3 h-3"
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

              <!-- Текущая дата и цена -->
              <div
                class="border-t border-[#e3e3e4] pt-4 sm:pt-5 px-[40px] pt-[15px] pb-[20px]"
              >
                <div
                  class="flex items-center justify-between mb-[10px] border-b border-b-[#e3e3e4] pb-[10px]"
                >
                  <span class="text-[12px] sm:text-[16px] text-[#000]"
                    >20.05.2026</span
                  >
                  <span
                    class="text-[18px] sm:text-[20px] font-medium text-[#FF00E7]"
                    >100$</span
                  >
                </div>
                <div class="text-center mb-[5px]">
                  <p
                    class="text-[11px] sm:text-[12px] text-[#000] font-light leading-[15px]"
                  >
                    29 Сен, Пн - 12 Окт, Вс
                  </p>
                  <p
                    class="text-[11px] sm:text-[12px] text-[#000] leading-[15px]"
                  >
                    <span class="font-medium">Дедлайн:</span> 8 Сентябрь 2025
                  </p>
                </div>
                <button
                  class="w-full bg-[#ff00e7] text-white rounded-[10px] py-2 sm:py-2 text-[14px] font-medium hover:bg-[#eb02d3] transition"
                >
                  Купить
                </button>
              </div>

              <!-- Другие даты -->
              <div>
                <div class="py-[10px] border-t border-b bg-[#f6f6f6]">
                  <h4
                    class="text-[13px] sm:text-[16px] font-medium text-center"
                  >
                    Другие даты
                  </h4>
                </div>
                <div class="px-[40px] py-[15px] bg-[#f6f6f6] rounded-b-[15px]">
                  <div
                    v-for="(d, i) in otherDates"
                    :key="i"
                    class="flex items-center justify-between py-2 border-b border-[#eaeaea] last:border-0"
                  >
                    <span class="text-[12px] sm:text-[16px] text-[#000]">{{
                      d.date
                    }}</span>
                    <div class="flex items-center gap-2">
                      <span
                        class="text-[14px] sm:text-[16px] font-medium text-[#FF00E7]"
                        >{{ d.price }}$</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
