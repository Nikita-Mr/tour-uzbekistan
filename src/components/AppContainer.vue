<!-- components/AppContainer.vue -->
<template>
  <div class="wrapper" :class="{ 'full-width': noPadding }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  noPadding: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.wrapper {
  padding: 26px 140px;
  /* min-height: 100vh; */
  font-family: 'Aeonik Pro', sans-serif;
  width: 100%;
}

.container.full-width {
  padding: 0;
  max-width: 100%;
}
</style>