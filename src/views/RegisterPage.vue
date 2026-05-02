<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
  company: '',
  city: '',
  language: '',
  tin: '',
});

// === КАСТОМНЫЙ СЕЛЕКТ (встроенный) ===
const isCompanyOpen = ref(false);
const isLangOpen = ref(false);

const companyOptions = [
  { id: 'agency', label: 'Турагентство' },
  { id: 'operator', label: 'Туроператор' },
  { id: 'transport', label: 'Транспортная компания' },
];

const languageOptions = ['English', 'Русский', 'O\'zbek', 'Deutsch', 'Français'];

const selectCompany = (opt) => {
  form.value.company = opt.label;
  isCompanyOpen.value = false;
};

const selectLanguage = (lang) => {
  form.value.language = lang;
  isLangOpen.value = false;
};

// Закрытие при клике вне
const companyRef = ref(null);
const langRef = ref(null);

const onDocClick = (e) => {
  if (companyRef.value && !companyRef.value.contains(e.target)) isCompanyOpen.value = false;
  if (langRef.value && !langRef.value.contains(e.target)) isLangOpen.value = false;
};

document.addEventListener('click', onDocClick);
// =====================================

const handleSubmit = () => {
  console.log('Register:', form.value);
  // router.push('/login');
};
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-10 px-4">
    <h1 class="text-[32px] sm:text-[42px] font-normal text-black mb-8">
      Registration
    </h1>

    <form
      @submit.prevent="handleSubmit"
      class="w-full max-w-[420px] border border-[#e6e6e7] rounded-[16px] p-6 sm:p-8 flex flex-col gap-4"
    >
      <!-- Name -->
      <div>
        <label class="block text-[11px] text-[#888] mb-1 ml-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-[11px] text-[#888] mb-1 ml-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
          required
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-[11px] text-[#888] mb-1 ml-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
          required
        />
      </div>

      <!-- Company — КАСТОМНЫЙ СЕЛЕКТ -->
      <div ref="companyRef" class="relative">
        <label class="block text-[11px] text-[#888] mb-1 ml-1">Partnertype</label>
        <button
          type="button"
          @click="isCompanyOpen = !isCompanyOpen"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] text-left outline-none focus:border-[#285aff] transition flex items-center justify-between"
          :class="{ 'border-[#285aff] ring-1 ring-[#285aff]': isCompanyOpen }"
        >
          <span :class="form.company ? 'text-[#333]' : 'text-[#888]'">
            {{ form.company || 'Выбрать' }}
          </span>
          <svg 
            class="w-4 h-4 text-[#666] transition-transform flex-shrink-0" 
            :class="{ 'rotate-180': isCompanyOpen }" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        
        <!-- Dropdown -->
        <div 
          v-if="isCompanyOpen"
          class="absolute top-full left-0 right-0 mt-2 bg-[#f5f5f5] border border-[#e6e6e7] rounded-[12px] shadow-lg z-50 overflow-hidden"
        >
          <button
            v-for="opt in companyOptions"
            :key="opt.id"
            type="button"
            @click="selectCompany(opt)"
            class="w-full text-left px-4 py-3 text-[14px] text-[#333] hover:bg-[#e8e8e8] transition border-b border-[#e0e0e0] last:border-0"
            :class="{ 'bg-[#e8e8e8] font-medium': form.company === opt.label }"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <!-- City -->
      <div>
        <label class="block text-[11px] text-[#888] mb-1 ml-1">City</label>
        <input
          v-model="form.city"
          type="text"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
          required
        />
      </div>

      <!-- Language — КАСТОМНЫЙ СЕЛЕКТ -->
      <div ref="langRef" class="relative">
        <label class="block text-[11px] text-[#888] mb-1 ml-1">Language</label>
        <button
          type="button"
          @click="isLangOpen = !isLangOpen"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] text-left outline-none focus:border-[#285aff] transition flex items-center justify-between"
          :class="{ 'border-[#285aff] ring-1 ring-[#285aff]': isLangOpen }"
        >
          <span :class="form.language ? 'text-[#333]' : 'text-[#888]'">
            {{ form.language || 'English' }}
          </span>
          <svg 
            class="w-4 h-4 text-[#666] transition-transform flex-shrink-0" 
            :class="{ 'rotate-180': isLangOpen }" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        
        <!-- Dropdown -->
        <div 
          v-if="isLangOpen"
          class="absolute top-full left-0 right-0 mt-2 bg-[#f5f5f5] border border-[#e6e6e7] rounded-[12px] shadow-lg z-50 overflow-hidden"
        >
          <button
            v-for="lang in languageOptions"
            :key="lang"
            type="button"
            @click="selectLanguage(lang)"
            class="w-full text-left px-4 py-3 text-[14px] text-[#333] hover:bg-[#e8e8e8] transition border-b border-[#e0e0e0] last:border-0"
            :class="{ 'bg-[#e8e8e8] font-medium': form.language === lang }"
          >
            {{ lang }}
          </button>
        </div>
      </div>

      <!-- TIN -->
      <div>
        <label class="block text-[11px] text-[#888] mb-1 ml-1">TIN</label>
        <input
          v-model="form.tin"
          type="text"
          class="w-full px-4 py-3 rounded-[10px] border border-[#ccc] bg-[#f5f5f5] text-[14px] outline-none focus:border-[#285aff] transition"
          required
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full py-3 rounded-[10px] bg-[#ff00cc] text-white text-[14px] font-medium hover:bg-[#e000b8] transition mt-2 cursor-pointer"
      >
        Continue
      </button>
    </form>

    <p class="mt-4 text-[12px] text-[#666] text-center">
      After registration, a manager will contact you to confirm your details.
    </p>
  </div>
</template>

<style scoped>
/* Анимация dropdown */
.absolute {
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Скролл в dropdown */
.overflow-hidden {
  max-height: 250px;
  overflow-y: auto;
}

.overflow-hidden::-webkit-scrollbar {
  width: 4px;
}

.overflow-hidden::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-hidden::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 2px;
}
</style>