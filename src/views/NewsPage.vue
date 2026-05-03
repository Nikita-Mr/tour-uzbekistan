<script setup>
import { ref, computed } from 'vue';
import AppContainer from '@/components/AppContainer.vue';
import CardNews from '@/components/CardNews.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const breadcrumbs = computed(() => [
  { label: t('breadcrumbs.main'), path: '/' },
  { label: t('breadcrumbs.news'), path: null },
]);

const currentPage = ref(1);
const perPage = 9;

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

const totalPages = computed(() => Math.ceil(allNews.length / perPage));

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return allNews.slice(start, start + perPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const nextPage = () => goToPage(currentPage.value + 1);
const prevPage = () => goToPage(currentPage.value - 1);

// Генерация массива страниц для отображения (с ...)
const displayedPages = computed(() => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= totalPages.value; i++) {
    if (i === 1 || i === totalPages.value || (i >= currentPage.value - delta && i <= currentPage.value + delta)) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  });

  return rangeWithDots;
});
</script>

<template>
  <div class="page-wrapper">
    <AppContainer>
      <!-- Breadcrumbs -->
      <nav class="mb-[15px] sm:mb-[20px] mt-[30px] hidden lg:flex" aria-label="Breadcrumb">
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
        {{ t('breadcrumbs.news') }}
      </h1>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px] lg:gap-[25px] mb-[40px]">
        <CardNews
          v-for="item in paginatedNews"
          :key="item.id"
          :news="item"
        />
      </div>

      <!-- Пагинация -->
      <div v-if="totalPages > 1" class="pagination">
        <button 
          class="pagination-btn" 
          :class="{ disabled: currentPage === 1 }"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <template v-for="item in displayedPages" :key="item">
          <button 
            v-if="item === '...'" 
            class="pagination-dots" 
            disabled
          >...</button>
          <button 
            v-else 
            class="pagination-btn" 
            :class="{ active: currentPage === item }"
            @click="goToPage(item)"
          >{{ item }}</button>
        </template>

        <button 
          class="pagination-btn" 
          :class="{ disabled: currentPage === totalPages }"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  padding-top: 20px;
}

/* Пагинация */
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
  flex-wrap: wrap;
}

.pagination-btn {
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #1a1a1a;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #f5f5f5;
}

.pagination-btn.active {
  background-color: #285aff;
  color: white;
}

.pagination-btn.disabled,
.pagination-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-dots {
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #888;
}

@media (max-width: 768px) {
  .pagination {
    justify-content: center;
  }
  
  .pagination-btn {
    min-width: 32px;
    height: 32px;
    font-size: 12px;
  }
}
</style>