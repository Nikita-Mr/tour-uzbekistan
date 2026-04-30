<template>
  <div
    class="wrapper border-t bg-[#f8f8f8] px-5 py-10 sm:px-8 lg:px-[80px] xl:px-[140px] lg:py-[26px]"
  >
    <!-- Верхняя часть -->
    <div class="mb-8 lg:mb-[53px]">
      <!-- <h2
        class="text-[24px] sm:text-[32px] lg:text-[40px]  font-medium tracking-[-0.01em] leading-tight mb-3"
      ></h2> -->
      <h2 class="text-[24px] lg:text-[32px] font-medium mb-[15px]">
        <!-- Мобильный текст -->
        <span class="lg:hidden uppercase font-medium italic text-[18px] trigger-[0%] leading-[100%]">
          Centrum Holidays — Национальный Туроператор Узбекистана
        </span>
        <!-- Десктопный текст -->
        <span class="hidden lg:inline text-[#285aaf]">
          Centrum Holidays — Национальный Туроператор Узбекистана
        </span>
      </h2>
      <div class="flex items-center gap-[10px]">
        <p class="text-[16px] lg:text-[20px] font-medium tracking-[-0.01em]">
          Air Company
        </p>
        <img
          src="../assets/icons/centrum.png"
          alt="Centrum Air"
          class="h-5 lg:h-6"
        />
      </div>
    </div>

    <!-- Основной контент -->
    <div class="flex flex-col gap-10 lg:gap-0">
      <div
        class="flex flex-col lg:flex-row justify-between lg:mb-[46px] gap-10 lg:gap-0"
      >
        <!-- Навигация -->
        <nav>
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 lg:gap-[55px]"
          >
            <div class="flex flex-col gap-3 sm:gap-4">
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Main page</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Who we are</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Services</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Direction</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >About us</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >News</router-link
                >
              </li>
            </div>
            <div class="flex flex-col gap-3 sm:gap-4">
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Uzbekistan</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Kazakhstan</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Kyrgyzstan</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Tajikistan</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Caucasus</router-link
                >
              </li>
              <li>
                <router-link
                  to=""
                  class="hover:text-[#285aff] transition text-[14px] lg:text-[16px]"
                  >Privacy Policy</router-link
                >
              </li>
            </div>
          </ul>
        </nav>

        <!-- Контакты -->
        <div class="contact">
          <div class="icons flex flex-col gap-[11px] mb-4 lg:mb-[15px]">
            <div class="flex gap-[11px] justify-start lg:justify-end">
              <routerLink to=""
                ><img src="../assets/icons/tg.png" alt="" class="w-6 h-6"
              /></routerLink>
              <routerLink to=""
                ><img src="../assets/icons/inst.png" alt="" class="w-6 h-6"
              /></routerLink>
              <routerLink to=""
                ><img src="../assets/icons/in.png" alt="" class="w-6 h-6"
              /></routerLink>
              <routerLink to=""
                ><img src="../assets/icons/vk.png" alt="" class="w-6 h-6"
              /></routerLink>
            </div>
            <div class="flex gap-[11px] justify-start lg:justify-end">
              <routerLink to=""
                ><img src="../assets/icons/dz.png" alt="" class="w-6 h-6"
              /></routerLink>
              <routerLink to=""
                ><img src="../assets/icons/routube.png" alt="" class="w-6 h-6"
              /></routerLink>
              <routerLink to=""
                ><img src="../assets/icons/youtube.png" alt="" class="w-6 h-6"
              /></routerLink>
            </div>
          </div>
          <div class="adress">
            <p class="text-[14px] lg:text-[16px] text-start lg:text-end">
              info@centrumholidaysdmc.uz
            </p>
            <p class="text-[14px] lg:text-[16px] text-start lg:text-end">
              +998(77) 290-08-80
            </p>
          </div>
        </div>
      </div>

      <!-- Копирайт -->
      <div class="pt-6 border-t border-[#e6e6e7] lg:border-0 lg:pt-0">
        <p
          class="text-[12px] sm:text-[14px] lg:text-[16px] text-[#666] lg:text-black"
        >
          Copyright {{ currentYear }} Centrum Holidays
        </p>
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
  font-family: 'Aeonik Pro', sans-serif;
}

li {
  font-size: 16px;
}

@media (max-width: 1023px) {
  img[alt='Centrum Air'] {
    width: 122px;
    height: 100%;
    object-fit: cover;
  }
  li {
    font-size: 14px;
  }
}
</style>
