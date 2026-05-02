<script setup>
import { ref, computed } from 'vue';
import AppContainer from '@/components/AppContainer.vue';
import CardNews from '@/components/CardNews.vue';

const breadcrumbs = [
  { label: 'Main', path: '/' },
  { label: 'News', path: null },
];

const currentPage = ref(1);
const perPage = 9;
const totalPages = 4;

// Пример данных — замени на реальный API-запрос
const allNews = [
  { id: 1, image: '/assets/icons/card.png', title: 'Flying to the Maldives from November 30!', description: 'Centrum Air and Centrum Holidays proudly launch an exclusive flight program to the Maldives...', date: '2 days ago' },
  { id: 2, image: '/assets/icons/card.png', title: 'Brand new Airbus A330-300', description: 'First wide-body Airbus A330-300 arrives in Centrum Air fleet...', date: '1 week ago' },
  { id: 3, image: '/assets/icons/card.png', title: 'Tashkent – Tbilisi on the wings of Centrum Air', description: 'Since May 18, the tour operator Centrum Holidays has launched a flight program on the Tashkent-Tbilisi route...', date: '2 weeks ago' },
  { id: 4, image: '/assets/icons/card.png', title: 'Brand new Airbus A330-300', description: 'First wide-body Airbus A330-300 arrives in Centrum Air fleet...', date: '3 weeks ago' },
  { id: 5, image: '/assets/icons/card.png', title: 'Flying to the Maldives from November 30!', description: 'Centrum Air and Centrum Holidays proudly launch an exclusive flight program...', date: '1 month ago' },
  { id: 6, image: '/assets/icons/card.png', title: 'Tashkent – Tbilisi on the wings of Centrum Air', description: 'Since May 18, the tour operator Centrum Holidays has launched...', date: '1 month ago' },
  { id: 7, image: '/assets/icons/card.png', title: 'Tashkent – Tbilisi on the wings of Centrum Air', description: 'Since May 18, the tour operator Centrum Holidays has launched...', date: '2 months ago' },
  { id: 8, image: '/assets/icons/card.png', title: 'Brand new Airbus A330-300', description: 'First wide-body Airbus A330-300 arrives in Centrum Air fleet...', date: '2 months ago' },
  { id: 9, image: '/assets/icons/card.png', title: 'Flying to the Maldives from November 30!', description: 'Centrum Air and Centrum Holidays proudly launch an exclusive flight program...', date: '3 months ago' },
  { id: 10, image: '/assets/icons/card.png', title: 'New winter destinations', description: 'Discover our new winter flight program...', date: '3 months ago' },
  { id: 11, image: '/assets/icons/card.png', title: 'Airbus A330-300 interior reveal', description: 'Take a look inside our newest aircraft...', date: '4 months ago' },
  { id: 12, image: '/assets/icons/card.png', title: 'Summer schedule update', description: 'More flights, more destinations, more comfort...', date: '4 months ago' },
];

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return allNews.slice(start, start + perPage);
});

const goToPage = (n) => { currentPage.value = n; };
const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const nextPage = () => { if (currentPage.value < totalPages) currentPage.value++; };
</script>

<template>
  <div class="page-wrapper">
    <AppContainer>
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

      <!-- Heading -->
      <h1 class="text-[36px] sm:text-[48px] lg:text-[54px] font-normal text-black mb-[30px] lg:mb-[50px] leading-tight">
        News
      </h1>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[25px] mb-[40px]">
        <CardNews
          v-for="item in paginatedNews"
          :key="item.id"
          :news="item"
        />
      </div>

      <!-- Pagination -->
      <div class="flex justify-end items-center gap-[12px] text-[14px] text-black mb-[80px]">
        <button @click="prevPage" :disabled="currentPage === 1" class="hover:text-[#285aff] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer">&lt;</button>
        <button
          v-for="n in totalPages"
          :key="n"
          @click="goToPage(n)"
          :class="['transition cursor-pointer', currentPage === n ? 'text-[#285aff] font-medium' : 'hover:text-[#285aff]']"
        >
          {{ n }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="hover:text-[#285aff] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer">&gt;</button>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  padding-top: 20px;
}
</style>