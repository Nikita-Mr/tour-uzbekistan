<script setup>
defineProps({
  tour: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card w-full rounded-[15px] border border-[#e6e6e7] hover:shadow-lg transition bg-white overflow-hidden">
    <div class="img">
      <img 
        class="object-cover rounded-t-[15px] h-[220px] sm:h-[260px] lg:h-[284px] w-full" 
        :src="tour.image" 
        :alt="tour.title"
      >
    </div>
    <div class="description px-4 py-3 lg:px-[15px] lg:py-[10px] border-b border-b-[#d2d2d4]">
      <p class="text-[14px] sm:text-[16px] font-medium leading-snug">{{ tour.title }}</p>
      <p class="text-[11px] sm:text-[12px] font-light text-[#666] mt-0.5">{{ tour.route }}</p>
    </div>
    <div class="button px-4 py-3 lg:px-[15px] lg:py-[10px]">
      <button class="cursor-pointer bg-[#ff00e7] w-full text-white rounded-[10px] py-[8px] text-[14px] hover:bg-[#eb02d3] transition">
        Бронировать
      </button>
    </div>
  </div>
</template>