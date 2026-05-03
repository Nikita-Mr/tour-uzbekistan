<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
defineProps({
  tour: {
    type: Object,
    required: true,
  },
  country: {
    type: String,
    default: null, // если не передана, будет undefined
  },
});
</script>

<template>
  <div
    class="card w-full rounded-[15px] border border-[#e6e6e7] hover:shadow-lg transition bg-white overflow-hidden"
  >
    <div
      class="img cursor-pointer"
      @click="
        $router.push({
          path: `/tours/${tour.id}`,
          query: country ? { country: country } : {},
        })
      "
    >
      <img
        class="object-cover rounded-t-[15px] h-[220px] sm:h-[260px] lg:h-[284px] w-full"
        :src="tour.image"
        :alt="tour.title"
      />
    </div>
    <div
      class="description px-4 py-3 lg:px-[15px] lg:py-[10px] border-b border-b-[#d2d2d4] cursor-pointer"
      @click="
        $router.push({
          path: `/tours/${tour.id}`,
          query: country ? { country: country } : {},
        })
      "
    >
      <p class="text-[14px] sm:text-[16px] font-medium leading-snug">
        {{ tour.title }}
      </p>
      <p class="text-[11px] sm:text-[12px] font-light text-[#666] mt-0.5">
        {{ tour.route }}
      </p>
    </div>
    <div
      class="description px-4 py-3 lg:px-[15px] lg:py-[10px] border-b border-b-[#d2d2d4] cursor-pointer"
      v-if="tour.date"
      @click="
        $router.push({
          path: `/tours/${tour.id}`,
          query: country ? { country: country } : {},
        })
      "
    >
      <p class="text-[11px] sm:text-[12px] font-light text-[#666] mt-0.5">
        {{ t('openCard.date_label') }} {{ tour.date }}
      </p>
    </div>
    <div
      class="description px-4 py-3 lg:px-[15px] lg:py-[10px] border-b border-b-[#d2d2d4] cursor-pointer"
      v-if="tour.duration"
      @click="
        $router.push({
          path: `/tours/${tour.id}`,
          query: country ? { country: country } : {},
        })
      "
    >
      <p class="text-[11px] sm:text-[12px] font-light text-[#666] mt-0.5">
        {{ t('openCard.duration_label') }} {{ tour.duration.day }}
        {{ t('openCard.days') }} /
        {{ tour.duration.night }}
        {{ t('openCard.nights', tour.duration.night) }}
      </p>
    </div>
    <div class="button px-4 py-3 lg:px-[15px] lg:py-[10px]">
      <button
        class="cursor-pointer bg-[#ff00e7] w-full text-white rounded-[10px] py-[8px] text-[14px] hover:bg-[#eb02d3] transition"
        @click="
          $router.push({
            path: `/booking/${tour.id}`,
            query: country ? { country: country } : {},
          })
        "
      >
        {{ t('openCard.buy') }}
      </button>
    </div>
  </div>
</template>
