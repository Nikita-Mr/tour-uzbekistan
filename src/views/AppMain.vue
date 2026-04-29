<script setup>
import AppContainer from '@/components/AppContainer.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import CardDMS from '@/components/CardDMS.vue';
import CardGorzontalDMC from '@/components/CardGorzontalDMC.vue';
import CardNews from '@/components/CardNews.vue';
import Carousel from '@/components/Carousel.vue';
import Line from '@/components/Line.vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

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

const buttons = [
  {
    title: 'Узбекистан',
    url: '/src/assets/icons/uzbek.png',
  },
  {
    title: 'Казахстан',
    url: '/src/assets/icons/kazah.png',
  },
  {
    title: 'Кыргызстан',
    url: '/src/assets/icons/kyrg.png',
  },
  {
    title: 'Таджикистан',
    url: '/src/assets/icons/tad.png',
  },
  {
    title: 'Кавказ',
    url: '#',
  },
];

const tours = [
  {
    id: 1,
    title: 'Тур “Выходные в Узбекистане”',
    route: 'Ташкент – Самарканд',
    image: '/src/assets/icons/card.png',
  },
  {
    id: 2,
    title: 'Тур “Жемчужины Востока”',
    route: 'Ташкент – Бухара – Самарканд',
    image: '/src/assets/icons/card.png',
  },
  {
    id: 3,
    title: 'Тур “Горный Кыргызстан”',
    route: 'Бишкек – Иссык-Куль',
    image: '/src/assets/icons/card.png',
  },
  {
    id: 4,
    title: 'Тур “Казахстанский трип”',
    route: 'Алматы – Нур-Султан',
    image: '/src/assets/icons/card.png',
  },
  {
    id: 5,
    title: 'Тур “Кавказское гостеприимство”',
    route: 'Баку – Тбилиси',
    image: '/src/assets/icons/card.png',
  },
  {
    id: 6,
    title: 'Тур “Таджикистан горный”',
    route: 'Душанбе – Памир',
    image: '/src/assets/icons/card.png',
  },
];

const DMC = [
  {
    title: 'Destination Management Services (DMC)',
    descr: 'Complete on-ground coordination and local expertise',
    url: '/src/assets/icons/card-news.jpg',
  },
  {
    title: 'Customized Itineraries',
    descr: 'Tailor-made leisure, group, and special-interest programs',
    url: '/src/assets/icons/card-news.jpg',
  },
  {
    title: 'Flight & Air Services Coordination',
    descr:
      'In collaboration with group and block seat operations with Centrum Air',
    url: '/src/assets/icons/card-news.jpg',
  },
];

const items = [
  {
    number: '01',
    image: '/src/assets/icons/dmc.png',
    title: 'Streamlined and Reliable Operations',
    description:
      'Our operations are built on clearly defined, efficient, and standardized processes. From initial planning and contracting to reservations, on-ground coordination, and post-travel evaluation, every step is managed with precision and consistency. This structured approach allows us to maintain service quality while remaining flexible to meet the unique needs of each client.',
  },
  {
    number: '02',
    image: '/src/assets/icons/dmc.png',
    title: 'Technology-Driven Infrastructure',
    description:
      'Centrum Holidays DMC invests heavily in technology to ensure speed, accuracy, and transparency. Through advanced systems and API integrations, we provide real-time access to hotels, transfers, and packaged products. This technology-driven infrastructure minimizes manual processes, reduces errors, and enables faster decision-making for our partners.',
  },
];

const newsList = [
  {
    id: 1,
    image: '/src/assets/icons/card.png',
    description:
      '«Чайхана и культура чаепития» — это настоящее искусство в Узбекистане. Многие туристы удивляются: почему в гостях им всегда наливают чай неполную чашку...',
    date: '1 месяц назад',
  },
  {
    id: 2,
    image: '/src/assets/icons/card.png',
    description:
      'Мы — ваш надежный DMC-партнёр в Узбекистане. С гордостью сообщаем, что наша компания имеет прямые контракты более чем с 700 отелями по всей...',
    date: '2 месяца назад',
  },
  {
    id: 3,
    image: '/src/assets/icons/card.png',
    description:
      'Необычные туры в Узбекистан — наша специализация. По следам ремесленников — путешествие в Ферганскую долину. Откройте для себя...',
    date: '2 месяца назад',
  },
  {
    id: 4,
    image: '/src/assets/icons/card.png',
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
            <div class="flex items-center justify-between mb-[25px]">
              <h3>{{ item.title }}</h3>
              <router-link to="" class="text-[#88888c] underline italic"
                >More</router-link
              >
            </div>
            <div>
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
          <h2>Tours of Centrum Holidays DMC</h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>
        <div class="location-buttons flex gap-[10px] mb-[50px]">
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
      <Carousel :items="tours" :visible-count="4" :gap="14" :autoplay="5000">
        <template #default="{ item }">
          <Card :tour="item" />
        </template>
      </Carousel>
    </section>

    <section class="mb-[50px]">
      <div class="img bg-[#000] w-[100%] h-[788px] justify-between flex">
        <div class="pl-[140px] pt-[80px]">
          <h2 class="text-[#fff] mb-[50px]">
            The choice of international travelers — discover Uzbekistan with us
          </h2>
          <div class="mb-[50px]">
            <p class="text-[#fff] mb-[50px] leading-[125%] tracking-[-2%]">
              We correct cultures, &stinations. and helping guests from around
              the world truly discover Uzbekistan — from its rich and modern
              energy to W"ique routes and international-level service
            </p>
            <div class="w-[100%] border border-[#989898]"></div>
          </div>
          <div>
            <h3 class="mb-[50px]">COUNTRIES SERVED:</h3>
            <div class="grid grid-cols-2">
              <div class="flex flex-col gap-[11px]">
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/ru.png" alt="" />RUSSIA
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/tr.png" alt="" />TURKEY
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/az.png" alt="" />AZERBAIJAN
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/il.png" alt="" />ISRAEL
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/ia.png" alt="" />INDIA
                </p>
              </div>
              <div class="flex flex-col gap-[11px]">
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/th.png" alt="" />THAILAND
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/vn.png" alt="" />VIETNAM
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/kr.png" alt="" />SOUTH KOREA
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/ge.png" alt="" />GEORGIA
                </p>
                <p class="text-[#fff] flex gap-[7px] text-[16px]">
                  <img src="../assets/icons/pk.png" alt="" />PAKISTAN
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pr-[140px]">
          <img
            class="max-w-[788px] object-cover bg-left"
            src="../assets/icons/planet.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="mb-[70px]">
      <AppContainer>
        <div class="flex justify-between mb-[10px]">
          <h2>Services of Centrum Holidays DMC</h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>
        <p class="tracking-[-1.5%] mb-[60px]">
          Centrum Holidays DMC provides end-to-end destination management
          services in Uzbekistan, designed for international tour operators,
          agencies, and corporate clients:
        </p>
        <div class="flex justify-center gap-[25px]">
          <CardDMS v-for="(item, i) in DMC" :key="i" :DMC="DMC[i]" />
        </div>
      </AppContainer>
    </section>

    <section class="mb-[20px]">
      <AppContainer>
        <div class="w-[100%] border border-[#b1b1b4] mb-[65px]"></div>
        <div class="flex justify-between mb-[25px]">
          <h3>Why of Centrum Holidays DMC</h3>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>
        <p class="mb-[40px]">
          At Centrum Holidays DMC, operational excellence is at the core of
          everything we do. As a destination management company operating in
          Uzbekistan, we combine local expertise with global standards to
          deliver seamless, reliable, and high-quality travel solutions for our
          partners and clients.
        </p>
        <!-- <div class="w-[100%] border border-[#f4f4f4] mb-[65px]"></div> -->
        <CardGorzontalDMC
          v-for="(item, i) in items"
          :key="i"
          :GorizintalDMC="item"
        />
      </AppContainer>
    </section>

    <section class="mb-[70px]">
      <AppContainer>
        <!-- Разделитель -->
        <div class="w-full border border-[#dddddf] mb-[60px]"></div>

        <!-- Заголовок -->
        <div class="flex justify-between items-center mb-[25px]">
          <h2 class="text-[32px] font-medium">News:</h2>
          <Button :title="'View all'" :style="'px-[34px] border-[#bfbfbf]'" />
        </div>

        <!-- Карусель внутри контейнера -->
        <Carousel
          :items="newsList"
          :visible-count="3"
          :gap="20"
          :autoplay="5000"
          :item-width="380"
        >
          <template #default="{ item }">
            <CardNews :news="item" />
          </template>
        </Carousel>
      </AppContainer>
    </section>

    <button @click="scrollToTop" class="up-btn">
      <img src="../assets/icons/upArrow.png" alt="Наверх" />
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

.mt-[100px] {
  margin-top: 100px;
}

.location-buttons button:focus,
.location-buttons button.active {
  background-color: #285aff;
  border: 1px solid transparent;
  color: #fff;
}

/* Адаптив для карусели */
@media (max-width: 1200px) {
  h2 {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .mt-[100px] {
    margin-top: 50px;
  }

  h2 {
    font-size: 24px;
  }

  .location-buttons {
    padding-bottom: 10px;
  }
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
  .card-item p {
    /* max-width: 500px; */
  }
}
</style>
