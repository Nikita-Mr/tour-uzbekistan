<template>
  <div class="wrapper border-t bg-[#f8f8f8]">
    <div class="mb-[53px]">
      <h2>Centrum Holidays — Национальный Туроператор Узбекистана</h2>
      <div class="flex items-center gap-[10px]">
        <p class="text-[20px] font-medium tracking-[-1%]">Air Company</p>
        <img src="../assets/icons/centrum.png" alt="" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between mb-[46px]">
        <nav>
          <ul class="grid grid-cols-2 gap-[55px]">
            <div>
              <li><router-link to="">Main page</router-link></li>
              <li><router-link to="">Who we are</router-link></li>
              <li><router-link to="">Services</router-link></li>
              <li><router-link to="">Direction</router-link></li>
              <li><router-link to="">About us</router-link></li>
              <li><router-link to="">News</router-link></li>
            </div>
            <div>
              <li><router-link to="">Uzbekistan</router-link></li>
              <li><router-link to="">Kazakhstan</router-link></li>
              <li><router-link to="">Kyrgyzstan</router-link></li>
              <li><router-link to="">Tajikistan</router-link></li>
              <li><router-link to="">Caucasus</router-link></li>
              <li><router-link to="">Privacy Policy</router-link></li>
            </div>
          </ul>
        </nav>
        <div class="contact">
          <div class="icons flex flex-col gap-[11px] mb-[15px]">
            <div class="flex gap-[11px] justify-end">
                <routerLink to=""><img src="../assets/icons/tg.png" alt=""></routerLink>
                <routerLink to=""><img src="../assets/icons/inst.png" alt=""></routerLink>
                <routerLink to=""><img src="../assets/icons/in.png" alt=""></routerLink>
                <routerLink to=""><img src="../assets/icons/vk.png" alt=""></routerLink>
            </div>
            <div class="flex gap-[11px] justify-end">
                <routerLink to=""><img src="../assets/icons/dz.png" alt=""></routerLink>
                <routerLink to=""><img src="../assets/icons/routube.png" alt=""></routerLink>
                <routerLink to=""><img src="../assets/icons/youtube.png" alt=""></routerLink>
            </div>
          </div>
          <div class="adress">
            <p class="text-[16px] text-end">info@centrumholidaysdmc.uz</p>
            <p class="text-[16px] text-end">+998(77) 290-08-80</p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-[16px]">Copyright {{ currentYear }} Centrum Holidays</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
<style scoped>

.wrapper {
  padding: 26px 140px;
  font-family: 'Aeonik Pro', sans-serif;
}

li{
    font-size: 16px;
}

h2 {
  color: #285aaf;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -1%;
}
</style>
