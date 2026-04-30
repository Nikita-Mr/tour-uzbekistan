<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div
    class="border-t border-[#eeeeee] pt-6 pb-6 lg:pt-10 lg:pb-10"
    :class="{
      '!pt-0 !border-t-0': index === 0,
      'border-b border-[#eeeeee]': index === 1,
    }"
  >
    <div class="flex flex-col lg:flex-row gap-5 lg:gap-16 items-start">
      <!-- Номер: только на десктопе -->
      <div class="hidden lg:block flex-shrink-0 w-[80px]">
        <span class="text-[48px] font-medium italic text-black leading-none">
          {{ item.number }}
        </span>
      </div>

      <!-- Картинка -->
      <div class="w-full lg:w-[55%] flex-shrink-0">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-[200px] sm:h-[240px] lg:h-[300px] object-cover rounded-[12px] lg:rounded-[16px]"
        />
      </div>

      <!-- Текст -->
      <div class="flex flex-col gap-2 lg:gap-5 lg:pt-2 lg:max-w-[380px]">
        <h3
          class="text-[14px] lg:text-[26px] font-medium italic text-black leading-tight"
        >
          {{ item.title }}
        </h3>
        <!-- p 8px на мобильном -->
        <p
          class="text-[12px] hidden lg:block lg:text-[14px] text-[#333] leading-[1.5] lg:leading-[1.6] tracking-[-0.01em]"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.gorizontal:last-child {
  border-bottom: 1px solid #eeeeee;
}
</style>
