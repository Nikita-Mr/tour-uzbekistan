<script setup>
const props = defineProps({
  GorizintalDMC: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="gorizontal border-t border-[#eeeeee] pt-10 pb-10 first:pt-0 first:border-t-0"
  >
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
      <!-- Номер -->
      <div class="flex-shrink-0 w-[60px] lg:w-[80px]">
        <span
          class="text-[40px] lg:text-[48px] font-medium italic text-black leading-none"
        >
          {{ GorizintalDMC.number }}
        </span>
      </div>

      <!-- Картинка -->
      <div class="flex-shrink-0 w-full lg:w-[55%]">
        <img
          :src="GorizintalDMC.image"
          :alt="GorizintalDMC.title"
          class="w-full h-[240px] lg:h-[300px] object-cover rounded-[16px]"
        />
      </div>

      <!-- Текст -->
      <div class="flex flex-col gap-5 lg:pt-2 lg:max-w-[380px]">
        <h3
          class="text-[22px] lg:text-[26px] font-medium italic text-black leading-tight"
        >
          {{ GorizintalDMC.title }}
        </h3>
        <p class="text-[14px] text-[#333] leading-[1.6] tracking-[-0.01em]">
          {{ GorizintalDMC.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.gorizontal:last-child{
  border-bottom: 1px solid #eeeeee;
}
</style>
