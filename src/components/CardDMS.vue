<script setup>
const props = defineProps({
  DMC: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="card w-[370px] h-[426px] max-h-[100%] rounded-[15px] border border-[#e5e5e6]"
  >
    <div class="img">
      <img
        class="rounded-t-[15px] h-[300px] w-full object-cover"
        :src="DMC.url"
        :alt="DMC.title"
      />
    </div>
    <div class="deskr text-center rounded-b-[15px] px-[12px] py-[28px]">
      <h3 class="mb-[10px] text-[20px] font-medium tracking-[-4%]">{{ DMC.title }}</h3>
      <p class="text-[12px] text-[#666] tracking-[-5%]">{{ DMC.descr }}</p>
    </div>
  </div>
</template>
<style scoped></style>
