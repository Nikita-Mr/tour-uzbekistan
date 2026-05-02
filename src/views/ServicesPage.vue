<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import AppContainer from '@/components/AppContainer.vue';
import CardDMS from '@/components/CardDMS.vue';
import Line from '@/components/Line.vue';

const breadcrumbs = [
  { label: 'Main', path: '/' },
  { label: 'Services', path: null },
];

// Все услуги
const allServices = [
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
    descr: 'In collaboration with group and block seat operations with Centrum Air',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'MICE Services',
    descr: 'Meetings, incentives, conferences, and events with full project management',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Transfers & Transportation',
    descr: 'Modern, air-conditioned vehicles for individual and group travel',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Tour Operations',
    descr: 'Cultural, historical, and adventure tours within Uzbekistan and outbound tours to multiple destinations',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Visa Support Services',
    descr: 'Assistance with visa invitations and processing for international travelers',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Hotel Booking',
    descr: 'Best rates at partner hotels across Uzbekistan',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: '24/7 Customer Support',
    descr: 'Round-the-clock assistance for our partners and clients',
    url: '/assets/icons/card-news.jpg',
  },
  {
    title: 'Group Tours',
    descr: 'Organized group experiences with professional guides',
    url: '/assets/icons/card-news.jpg',
  },
];

// ─── ПАГИНАЦИЯ ───
const currentPage = ref(1);
const itemsPerPage = ref(6);

// Адаптивное количество карточек на страницу
const updateItemsPerPage = () => {
  const width = window.innerWidth;
  if (width < 640) itemsPerPage.value = 4;
  else if (width < 1024) itemsPerPage.value = 6;
  else itemsPerPage.value = 9;
};

// Вычисляем общее количество страниц
const totalPages = computed(() => 
  Math.ceil(allServices.length / itemsPerPage.value)
);

// Получаем текущие услуги для отображения
const paginatedServices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return allServices.slice(start, start + itemsPerPage.value);
});

// Смена страницы
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Прокрутка к началу списка
    window.scrollTo({ top: 400, behavior: 'smooth' });
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

  range.forEach((i, pos) => {
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

// Сброс на первую страницу при изменении количества на странице
const resetPagination = () => {
  currentPage.value = 1;
};

// Слушатель изменения размера окна
onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', () => {
    updateItemsPerPage();
    resetPagination();
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage);
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero -->
    <section class="relative">
      <div class="hero-section">
        <div class="hero-image" />
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

      <!-- Heading -->
      <div class="mb-[30px] lg:mb-[50px]">
        <h2 class="text-[28px] sm:text-[36px] lg:text-[48px] font-normal text-black mb-[25px] leading-tight">
          Services of Centrum Holidays DMC
        </h2>
        <p class="text-[13px] sm:text-[14px] lg:text-[15px] text-black leading-relaxed">
          Centrum Holidays DMC provides end-to-end destination management services in Uzbekistan, designed for international tour operators, agencies, and corporate clients:
        </p>
      </div>

      <!-- Grid с gap 25px -->
      <div class="services-grid">
        <CardDMS
          v-for="(item, index) in paginatedServices"
          :key="index"
          :DMC="item"
        />
      </div>

      <!-- Bottom text -->
      <p class="text-[13px] sm:text-[14px] text-black leading-relaxed mb-[25px]">
        Centrum Holidays DMC combines local destination knowledge, operational excellence, and flexible service models to deliver reliable and scalable travel solutions.
      </p>

      <Line class="mb-[20px]" />

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
  background-image: url('/assets/icons/services.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Сетка с gap 25px */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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

/* Адаптив */
@media (max-width: 768px) {
  .hero-section,
  .hero-image {
    height: 300px;
  }
  
  .pagination {
    justify-content: center;
  }
  
  .pagination-btn {
    min-width: 32px;
    height: 32px;
    font-size: 12px;
  }
}

@media (min-width: 1441px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .hero-section,
  .hero-image {
    height: 550px;
  }
}
@media (min-width: 1920px) {
  .services-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
}
</style>