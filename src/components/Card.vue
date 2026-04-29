<script setup>
const props = defineProps({
  tour: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card max-w-[270px] rounded-[15px] border hover:shadow-lg transition">
    <div class="img">
      <img class="object-cover rounded-t-[15px] h-[284px] w-full" :src="tour.image" alt="">
    </div>
    <div class="description px-[15px] py-[10px] border-b border-b-[#d2d2d4]">
      <p class="text-[16px] font-medium">{{ tour.title }}</p>
      <p class="text-[12px] font-light">{{ tour.route }}</p>
    </div>
    <div class="button px-[15px] py-[10px]">
      <button class="cursor-pointer bg-[#ff00e7] w-full text-white rounded-[10px] py-[8px] hover:bg-[#eb02d3] transition">
        Бронировать
      </button>
    </div>
  </div>
</template>