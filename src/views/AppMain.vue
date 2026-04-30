<script setup>
import AppContainer from '@/components/AppContainer.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardDMS from '@/components/CardDMS.vue';
import CardGorzontalDMC from '@/components/CardGorzontalDMC.vue';
import CardNews from '@/components/CardNews.vue';
import Carousel from '@/components/Carousel.vue';
import Line from '@/components/Line.vue';

import { ref, onMounted, onUnmounted } from 'vue';

// Для туров
const getTourCount = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  if (window.innerWidth < 1280) return 3;
  return 4;
};

// Для новостей
const getNewsCount = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const tourVisible = ref(getTourCount());
const newsVisible = ref(getNewsCount());

const onResize = () => {
  tourVisible.value = getTourCount();
  newsVisible.value = getNewsCount();
};

onMounted(() => window.addEventListener('resize', onResize));
onUnmounted(() => window.removeEventListener('resize', onResize));

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

// ✅ Исправлено: пути от public (абсолютные)
const buttons = [
  { title: 'Узбекистан', url: '/assets/icons/uzbek.png' },
  { title: 'Казахстан', url: '/assets/icons/kazah.png' },
  { title: 'Кыргызстан', url: '/assets/icons/kyrg.png' },
  { title: 'Таджикистан', url: '/assets/icons/tad.png' },
  { title: 'Кавказ', url: '#' },
];

const tours = [
  {
    id: 1,
    title: 'Тур "Выходные в Узбекистане"',
    route: 'Ташкент – Самарканд',
    image: '/assets/icons/card.png',
  },
  {
    id: 2,
    title: 'Тур "Жемчужины Востока"',
    route: 'Ташкент – Бухара – Самарканд',
    image: '/assets/icons/card.png',
  },
  {
    id: 3,
    title: 'Тур "Горный Кыргызстан"',
    route: 'Бишкек – Иссык-Куль',
    image: '/assets/icons/card.png',
  },
  {
    id: 4,
    title: 'Тур "Казахстанский трип"',
    route: 'Алматы – Нур-Султан',
    image: '/assets/icons/card.png',
  },
  {
    id: 5,
    title: 'Тур "Кавказское гостеприимство"',
    route: 'Баку – Тбилиси',
    image: '/assets/icons/card.png',
  },
  {
    id: 6,
    title: 'Тур "Таджикистан горный"',
    route: 'Душанбе – Памир',
    image: '/assets/icons/card.png',
  },
];

const DMC = [
  {
    title: 'Destination Management Services (DMC)',
    descr: 'Complete on-ground coordination and local expertise',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Customized Itineraries',
    descr: 'Tailor-made leisure, group, and special-interest programs',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Flight & Air Services Coordination',
    descr:
      'In collaboration with group and block seat operations with Centrum Air',
    url: '/assets/icons/card-news.jpg',
  },
];

const items = [
  {
    number: '01',
    image: '/assets/icons/dmc.png',
    title: 'Streamlined and Reliable Operations',
    description:
      'Our operations are built on clearly defined, efficient, and standardized processes. From initial planning and contracting to reservations, on-ground coordination, and post-travel evaluation, every step is managed with precision and consistency. This structured approach allows us to maintain service quality while remaining flexible to meet the unique needs of each client.',
  },
  {
    number: '02',
    image: '/assets/icons/dmc.png',
    title: 'Technology-Driven Infrastructure',
    description:
      'Centrum Holidays DMC invests heavily in technology to ensure speed, accuracy, and transparency. Through advanced systems and API integrations, we provide real-time access to hotels, transfers, and packaged products. This technology-driven infrastructure minimizes manual processes, reduces errors, and enables faster decision-making for our partners.',
  },
];

const newsList = [
  {
    id: 1,
    image: '/assets/icons/card.png',
    description:
      '«Чайхана и культура чаепития» — это настоящее искусство в Узбекистане. Многие туристы удивляются: почему в гостях им всегда наливают чай неполную чашку...',
    date: '1 месяц назад',
  },
  {
    id: 2,
    image: '/assets/icons/card.png',
    description:
      'Мы — ваш надежный DMC-партнёр в Узбекистане. С гордостью сообщаем, что наша компания имеет прямые контракты более чем с 700 отелями по всей...',
    date: '2 месяца назад',
  },
  {
    id: 3,
    image: '/assets/icons/card.png',
    description:
      'Необычные туры в Узбекистан — наша специализация. По следам ремесленников — путешествие в Ферганскую долину. Откройте для себя...',
    date: '2 месяца назад',
  },
  {
    id: 4,
    image: '/assets/icons/card.png',
    description: 'Ещё одна новость для туристов...',
    date: '3 месяца назад',
  },
];
</script>

<template>
  <div class="page-wrapper relative">
    <!-- Hero секция с картинкой -->
    <section class="">
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
            <div
              class="card-item-title flex items-center justify-between mb-[25px]"
            >
              <h3>{{ item.title }}</h3>
              <router-link to="" class="text-[#88888c] underline italic"
                >More</router-link
              >
            </div>
            <div class="card-item-title description">
              <p class="max-w-[235px]">
                {{ item.descr }}
              </p>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>

    <section class="mb-[50px]">
      <AppContainer>
        <div class="w-[100%] border border-[#f6f6f6] mb-[50px]"></div>
        <div class="flex justify-between mb-[15px]">
          <h2 class="text-[24px] lg:text-[32px] font-medium">
            <span class="lg:hidden uppercase font-medium italic">TOURS</span>
            <span class="hidden lg:inline">Tours of Centrum Holidays DMC</span>
          </h2>
          <Button
            @click="$router.push({ name: 'tours' })"
            :title="'View all'"
            :style="'px-[34px] border-[#bfbfbf]'"
          />
        </div>
        <div class="location-buttons flex gap-[10px] mb-[50px] flex-wrap">
          <button
            v-for="(item, i) in buttons"
            :key="i"
            class="flex items-center gap-[10px] border rounded-[10px] px-[10px] cursor-pointer"
          >
            <img
              class="w-[18px] h-[14px] rounded-[10px]"
              :src="item.url"
              alt=""
            />
            {{ item.title }}
          </button>
        </div>
      </AppContainer>
      <Carousel
        :items="tours"
        :visible-count="tourVisible"
        :gap="14"
        :autoplay="5000"
      >
        <template #default="{ item }">
          <Card :tour="item" />
        </template>
      </Carousel>
    </section>

    <section class="relative bg-black overflow-hidden">
      <!-- Контент -->
      <div
        class="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-[140px] pt-16 sm:pt-20 lg:pt-[80px] pb-40 sm:pb-48 lg:pb-28"
      >
        <div class="lg:max-w-[580px]">
          <h2
            class="text-white text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[56px] font-light leading-[1.1] mb-6 lg:mb-[50px]"
          >
            The choice of international travelers — discover Uzbekistan with us
          </h2>

          <p
            class="text-[#a0a0a0] text-[14px] lg:text-[15px] leading-[1.6] mb-8 lg:mb-[50px] max-w-[460px]"
          >
            We connect cultures, destinations, and experiences, helping guests
            from around the world truly discover Uzbekistan — from its rich
            heritage and modern energy to unique routes and international-level
            service.
          </p>

          <div
            class="w-full max-w-[360px] h-px bg-[#989898] mb-8 lg:mb-[50px]"
          ></div>

          <div>
            <h3
              class="text-white text-[13px] font-bold tracking-[0.12em] uppercase mb-5 lg:mb-[50px]"
            >
              Countries served:
            </h3>

            <div class="grid grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-3">
              <div class="flex flex-col gap-[11px]">
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/ru.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />RUSSIA
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/tr.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />TURKEY
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/az.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />AZERBAIJAN
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/il.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />ISRAEL
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/ia.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />INDIA
                </p>
              </div>
              <div class="flex flex-col gap-[11px]">
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/th.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />THAILAND
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/vn.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />VIETNAM
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/kr.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />SOUTH KOREA
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/ge.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />GEORGIA
                </p>
                <p
                  class="text-white flex items-center gap-[7px] text-[14px] lg:text-[16px]"
                >
                  <img
                    src="/assets/icons/pk.png"
                    alt=""
                    class="w-5 h-5 rounded-full object-cover"
                  />PAKISTAN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/icons/planet.png"
        alt="Globe"
        class="absolute z-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[-5%] xl:right-0 lg:translate-x-0 bottom-0 translate-y-[40%] sm:translate-y-[35%] lg:translate-y-[25%] w-[280px] sm:w-[380px] lg:w-[600px] xl:w-[750px] pointer-events-none select-none"
      />
    </section>

    <section class="mb-[70px]">
      <AppContainer>
        <div class="flex justify-between items-center mb-[10px]">
          <h2 class="text-[24px] lg:text-[32px] font-medium">
            <span class="lg:hidden uppercase font-medium italic">Services</span>
            <span class="hidden lg:inline"
              >Services of Centrum Holidays DMC</span
            >
          </h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>

        <p class="tracking-[-1.5%] mb-[60px] text-[14px] lg:text-[16px]">
          Centrum Holidays DMC provides end-to-end destination management
          services in Uzbekistan, designed for international tour operators,
          agencies, and corporate clients:
        </p>

        <div class="hidden lg:flex justify-center gap-[25px]">
          <CardDMS v-for="(item, i) in DMC" :key="i" :DMC="item" />
        </div>
      </AppContainer>
      <div class="lg:hidden">
        <Carousel
          :items="DMC"
          :visible-count="1"
          :gap="20"
          :autoplay="5000"
          :item-width="320"
        >
          <template #default="{ item }">
            <CardDMS :DMC="item" />
          </template>
        </Carousel>
      </div>
    </section>

    <section class="mb-[20px]">
      <AppContainer>
        <div class="w-full border border-[#b1b1b4] mb-8 lg:mb-[65px]"></div>

        <div class="flex justify-between items-center mb-4 lg:mb-[25px]">
          <h2 class="text-[24px] lg:text-[32px] font-medium">
            <span class="lg:hidden uppercase font-medium italic">Why We</span>
            <span class="hidden lg:inline">Why of Centrum Holidays DMC</span>
          </h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>

        <p
          class="text-[12px] lg:text-[16px] leading-[1.5] lg:leading-[1.6] mb-6 lg:mb-[40px] text-[#333]"
        >
          At Centrum Holidays DMC, operational excellence is at the core of
          everything we do. As a destination management company operating in
          Uzbekistan, we combine local expertise with global standards to
          deliver seamless, reliable, and high-quality travel solutions for our
          partners and clients.
        </p>

        <CardGorzontalDMC
          v-for="(item, i) in items"
          :key="i"
          :item="item"
          :index="i"
        />
      </AppContainer>
    </section>

    <section class="mb-[70px]">
      <AppContainer>
        <div class="w-full border border-[#dddddf] mb-[60px]"></div>

        <div class="flex justify-between items-center mb-[25px]">
          <h2 class="text-[24px] lg:text-[32px] font-medium">
            <span class="lg:hidden uppercase font-medium italic">News</span>
            <span class="hidden lg:inline">News:</span>
          </h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>

        <Carousel
          :items="newsList"
          :visible-count="newsVisible"
          :gap="20"
          :autoplay="5000"
          :item-width="400"
        >
          <template #default="{ item }">
            <CardNews :news="item" />
          </template>
        </Carousel>
      </AppContainer>
    </section>
  </div>
</template>

<style scoped>
/* Адаптив для мобильных */
@media (max-width: 768px) {
  .up-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}

.gorizontal:last-child {
  border-bottom: 0px solid#eeeeee;
}

.location-buttons button:focus {
  background-color: #285aff;
  border: 1px solid transparent;
  color: #fff;
}

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
  background-image: url('/assets/icons/8ec662fe56344049271e593f6db12dfdb7df8bdb.png');
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
}

/* Карточки */
.wrapper-card {
  position: relative;
  margin-top: -100px;
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

.mt-100px {
  margin-top: 100px;
}

.location-buttons button:focus,
.location-buttons button.active {
  background-color: #285aff;
  border: 1px solid transparent;
  color: #fff;
}

@media (max-width: 1200px) {
  h2 {
    font-size: 28px;
  }
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

@media (max-width: 768px) {
  .mt-100px {
    margin-top: 50px;
  }
  h2 {
    font-size: 24px;
  }
  .location-buttons {
    padding-bottom: 10px;
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
    margin-top: -60px;
  }
  .description {
    display: none;
  }
  .card-item-title {
    margin: 0;
  }
  .card-item {
    flex: 0 0 100%;
  }
  .wrapper-card .card-item {
    padding: 15px;
  }
  .card-item:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid #e6e6e7;
    padding: 15px;
  }
  h1 {
    font-size: 24px;
    max-width: 250px;
    margin-top: 100px;
  }
  .hero-section {
    height: 358px;
  }
  .hero-image {
    height: 358px;
    background-position: left;
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
}
</style>
