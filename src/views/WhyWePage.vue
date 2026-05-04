<script setup>
import { ref, computed } from 'vue';
import AppContainer from '@/components/AppContainer.vue';
import CardGorzontalDMC from '@/components/CardGorzontalDMC.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Хлебные крошки (переведенные)
const breadcrumbs = computed(() => [
  { label: t('breadcrumbs.main'), path: '/' },
  { label: t('breadcrumbs.why_we'), path: null },
]);

// 4 категории (контент НЕ переводим)
const categories = [
  {
    title: 'Why of Centrum Holidays DMC',
    description: 'At Centrum Holidays DMC, operational excellence is at the core of everything we do. As a destination management company operating in Uzbekistan, we combine local expertise with global standards to deliver seamless, reliable, and high-quality travel solutions for our partners and clients.',
    pages: [
      [
        { number: '01', image: '/assets/icons/dmc1.png', title: 'Streamlined and Reliable Operations', description: 'Our operations are built on clearly defined, efficient, and standardized processes. From initial planning and contracting to reservations, on-ground coordination, and post-travel evaluation, every step is managed with precision and consistency. This structured approach allows us to maintain service quality while remaining flexible to meet the unique needs of each client.' },
        { number: '02', image: '/assets/icons/dmc2.jpg', title: 'Technology-Driven Infrastructure', description: 'Centrum Holidays DMC invests heavily in technology to ensure speed, accuracy, and transparency. Through advanced systems and API integrations, we provide real-time access to hotels, transfers, and packaged products. This technology-driven infrastructure minimizes manual processes, reduces errors, and enables faster decision-making for our partners.' },
        { number: '03', image: '/assets/icons/dmc3.jpg', title: 'Strong Supplier Network', description: 'Our operational strength is reinforced by long-term partnerships with trusted hotels, transport providers, guides, and local suppliers. Carefully negotiated agreements ensure service standardization, competitive pricing, and consistent availability, allowing us to deliver dependable solutions across all market segments.' },
      ],
      [
        { number: '04', image: '/assets/icons/dmc1.png', title: 'Dedicated Account Management', description: 'Each partner receives a dedicated account manager who serves as a single point of contact throughout the entire project lifecycle. This personalized approach ensures clear communication, fast response times, and a deep understanding of your specific requirements and expectations.' },
        { number: '05', image: '/assets/icons/dmc2.jpg', title: 'Real-Time Booking System', description: 'Our advanced platform allows instant confirmation of services with live availability and pricing. Partners can access inventory, manage bookings, and track operations in real time, eliminating delays and providing complete transparency at every stage.' },
        { number: '06', image: '/assets/icons/dmc3.jpg', title: 'Crisis Management & Flexibility', description: 'We maintain robust contingency plans and flexible cancellation policies to handle unexpected changes. Our team is trained to respond swiftly to any situation, ensuring minimal disruption to your clients travel experiences and protecting your reputation.' },
      ],
      [
        { number: '07', image: '/assets/icons/dmc1.png', title: 'Cultural Authenticity', description: 'We ensure every itinerary reflects genuine local culture, traditions, and heritage. By working closely with local communities and experts, we create immersive experiences that go beyond standard tourism, offering travelers meaningful connections with the destination.' },
        { number: '08', image: '/assets/icons/dmc2.jpg', title: 'End-to-End Logistics', description: 'From airport pickups to hotel checkouts, every logistical detail is meticulously planned and executed. Our ground team coordinates all movements, timing, and transfers, allowing your clients to enjoy a seamless journey without worrying about practical arrangements.' },
        { number: '09', image: '/assets/icons/dmc3.jpg', title: 'Transparent Reporting', description: 'Detailed analytics and post-trip reporting provide full visibility into operations, costs, and outcomes. We believe in complete transparency, giving our partners the data they need to evaluate performance and make informed decisions for future projects.' },
      ],
      [
        { number: '10', image: '/assets/icons/dmc1.png', title: 'Health & Safety Standards', description: 'Rigorous health and safety protocols are embedded in every service we deliver. We conduct regular supplier audits, maintain emergency response procedures, and ensure all transportation and accommodation partners meet international safety requirements.' },
        { number: '11', image: '/assets/icons/dmc2.jpg', title: 'Scalable Solutions', description: 'Whether it is an intimate luxury tour or a large corporate event for thousands, our infrastructure and team scale efficiently to match. We apply the same level of attention and quality control regardless of group size or project complexity.' },
        { number: '12', image: '/assets/icons/dmc3.jpg', title: 'Long-Term Partnership Approach', description: 'We view every client relationship as a long-term partnership rather than a one-time transaction. By investing in mutual growth, trust, and continuous improvement, we aim to become an indispensable extension of your team and a reliable asset in your success.' },
      ],
    ],
  },
  {
    title: 'Customized Service at Centrum Holidays DMC',
    description: 'At Centrum Holidays DMC, we believe that no two journeys should ever be the same. Customized service is at the heart of our destination management approach, allowing us to design travel experiences that reflect the unique needs, expectations, and preferences of each client and market.',
    pages: [
      [
        { number: '01', image: '/assets/icons/dmc.png', title: 'Tailor-Made Travel Solutions', description: 'Every program we create begins with listening. Whether for leisure travel, group tours, or MICE projects, we carefully analyze objectives, budgets, travel styles, and cultural preferences to design itineraries that deliver both value and authenticity, rather than one-size-fits-all solutions.' },
        { number: '02', image: '/assets/icons/dmc.png', title: 'Flexibility with Structure', description: 'Our customized service model is supported by strong operational frameworks. While our processes ensure consistency and reliability, our teams remain flexible and responsive—adapting programs quickly to accommodate special requests, last-minute changes, or market-specific requirements.' },
        { number: '03', image: '/assets/icons/dmc.png', title: 'Local Insight, Global Standards', description: 'Customization at Centrum Holidays DMC is powered by deep local knowledge of Uzbekistan combined with international service standards. From hotel selection and dining experiences to transportation, guides, and excursion activities, every element is carefully curated to match client expectations while showcasing the destination at its best.' },
      ],
      [
        { number: '04', image: '/assets/icons/dmc.png', title: 'Personalized Guest Experience', description: 'We go beyond standard packages to create journeys that resonate with individual travelers. Special dietary requirements, accessibility needs, celebration arrangements, and personal interests are all incorporated seamlessly into the itinerary design.' },
        { number: '05', image: '/assets/icons/dmc.png', title: 'Adaptive Itinerary Design', description: 'Our planning process allows for modular itinerary construction. Partners can mix and match services, adjust durations, and add optional experiences, giving them full control over the final product while benefiting from our local expertise.' },
        { number: '06', image: '/assets/icons/dmc.png', title: 'Multi-Format Programs', description: 'From intimate luxury escapes to large-scale incentive trips, we customize our approach for every format. Each program type receives specialized attention, ensuring that the service delivery matches the scale and style of the experience.' },
      ],
      [
        { number: '07', image: '/assets/icons/dmc.png', title: 'Niche Market Specialization', description: 'We develop specialized products for niche segments including adventure tourism, wellness retreats, educational tours, and photography expeditions. Our deep understanding of these markets allows us to create highly targeted and memorable experiences.' },
        { number: '08', image: '/assets/icons/dmc.png', title: 'Cultural Immersion Focus', description: 'Every customized program emphasizes authentic cultural engagement. We arrange private performances, artisan workshops, home-hosted dinners, and exclusive access to historical sites, creating moments that standard tours cannot replicate.' },
        { number: '09', image: '/assets/icons/dmc.png', title: 'Bespoke Event Planning', description: 'For MICE and corporate clients, we offer fully customized event concepts—from themed gala dinners in historic venues to team-building activities in unique desert or mountain settings. Every detail is tailored to reflect your brand and objectives.' },
      ],
      [
        { number: '10', image: '/assets/icons/dmc.png', title: 'Client-Centric Communication', description: 'Throughout the planning and execution phases, we maintain open and responsive communication channels. Regular updates, detailed proposals, and proactive problem-solving ensure that partners always feel informed and supported.' },
        { number: '11', image: '/assets/icons/dmc.png', title: 'Feedback-Driven Improvement', description: 'Post-trip feedback is systematically collected and analyzed. Insights gathered from every project are used to refine our services, update our offerings, and ensure that each subsequent program is even better tailored to client needs.' },
        { number: '12', image: '/assets/icons/dmc.png', title: 'Continuous Service Evolution', description: 'We constantly monitor market trends, emerging destinations, and new experiences to keep our customized offerings fresh and competitive. This commitment to evolution ensures that our partners always have access to innovative and relevant products.' },
      ],
    ],
  },
  {
    title: 'Passion & Dedication at Centrum Holidays DMC',
    description: 'At Centrum Holidays DMC, passion and dedication are not just values—they are the driving force behind every journey we design and every service we deliver. Our commitment to destination management goes beyond logistics; it is rooted in a genuine love for travel, culture, and creating meaningful experiences.',
    pages: [
      [
        { number: '01', image: '/assets/icons/dmc.png', title: 'A Team Driven by Passion', description: 'Our team is made up of travel professionals who are deeply passionate about what they do. From destination experts to operations managers, each member brings enthusiasm, creativity, and a constant desire to exceed expectations. We approach every project with emotion, whether it is a single traveler itinerary or a large-scale group or MICE operation.' },
        { number: '02', image: '/assets/icons/dmc.png', title: 'Dedication to Every Detail', description: 'Dedication at Centrum Holidays DMC means being fully engaged at every stage of the journey. From the first inquiry to post-trip evaluation and guest feedback follow-up, our teams work with care, precision, and responsibility. We believe that flawless experiences are created through meticulous planning, proactive communication, and hands-on involvement.' },
        { number: '03', image: '/assets/icons/dmc.png', title: 'Commitment to Our Partners and Clients', description: 'We are dedicated to building long-term partnerships based on trust, transparency, and consistent performance. Our clients and partners know they can rely on us not only for operational excellence but for our reliability, responsiveness, and willingness to go the extra mile—especially when it matters most.' },
      ],
      [
        { number: '04', image: '/assets/icons/dmc.png', title: 'Going the Extra Mile', description: 'Passion manifests in our willingness to exceed standard service boundaries. Whether it is arranging a surprise anniversary dinner, securing last-minute tickets to a sold-out show, or personally greeting guests at the airport, we consistently look for ways to create delight.' },
        { number: '05', image: '/assets/icons/dmc.png', title: '24/7 Support Mindset', description: 'Our dedication means being available around the clock. We understand that travel does not follow business hours, and our operations team maintains continuous coverage to address any issue, answer any question, and provide reassurance at any time of day or night.' },
        { number: '06', image: '/assets/icons/dmc.png', title: 'Emotional Investment in Success', description: 'We treat every program as if it were our own. This emotional investment drives us to anticipate problems before they arise, celebrate successes with our partners, and continuously seek ways to improve the guest experience.' },
      ],
      [
        { number: '07', image: '/assets/icons/dmc.png', title: 'Crafting Meaningful Journeys', description: 'Beyond logistics, we focus on the emotional impact of travel. Our team carefully designs moments of connection, wonder, and discovery that transform a standard trip into a life-enriching experience for every traveler.' },
        { number: '08', image: '/assets/icons/dmc.png', title: 'Attention to Cultural Nuances', description: 'Our passion for Uzbekistan drives us to share its culture with authenticity and respect. We train our guides to tell stories with heart, select experiences that honor local traditions, and ensure that every interaction is culturally sensitive and meaningful.' },
        { number: '09', image: '/assets/icons/dmc.png', title: 'Personal Touch in Every Interaction', description: 'From handwritten welcome notes to personalized gifts and thoughtful gestures throughout the journey, we infuse every touchpoint with warmth and sincerity. These small details reflect our dedication to making every guest feel truly valued.' },
      ],
      [
        { number: '10', image: '/assets/icons/dmc.png', title: 'Celebrating Client Success', description: 'We measure our success through the success of our partners. When a program runs flawlessly and guests return home with lasting memories, we celebrate alongside our clients. This shared sense of achievement strengthens our relationships and fuels our passion.' },
        { number: '11', image: '/assets/icons/dmc.png', title: 'Building Trust Through Actions', description: 'Trust is earned through consistent, reliable action. Our dedication to following through on every promise—no matter how small—has built a reputation for dependability that our partners value deeply.' },
        { number: '12', image: '/assets/icons/dmc.png', title: 'Legacy of Excellence', description: 'Every team member understands that they are contributing to a legacy. Our collective passion and dedication have established Centrum Holidays DMC as a name associated with quality, and we work every day to uphold and enhance that reputation.' },
      ],
    ],
  },
  {
    title: 'Destination Expertise at Centrum Holidays DMC',
    description: 'At Centrum Holidays DMC, destination expertise is the foundation of our success. With in-depth local knowledge of Uzbekistan and a strong understanding of international travel expectations, we deliver authentic, well-structured, and seamless destination management solutions for our global partners.',
    pages: [
      [
        { number: '01', image: '/assets/icons/dmc.png', title: 'Deep Local Knowledge', description: 'Our team possesses comprehensive, on-the-ground expertise across Uzbekistan. From the ancient cities of Samarkand, Bukhara, and Khiva to the modern capital of Tashkent and the remote landscapes of the Aral Sea, we know every route, attraction, hotel, and cultural site. This local insight allows us to design experiences that go beyond typical tourist paths and offer genuine immersion.' },
        { number: '02', image: '/assets/icons/dmc.png', title: 'Tailor-Made Experiences', description: 'Destination expertise at Centrum Holidays DMC means understanding how every market segment interacts with Uzbekistan. Whether for leisure groups, FIT travelers, MICE delegations, or special-interest tours, we craft programs that match the destination strengths with client expectations, always maintaining high operational standards.' },
        { number: '03', image: '/assets/icons/dmc.png', title: 'Strong Regional Networks', description: 'Our established relationships with local authorities, hotels, transport companies, guides, and artisans ensure smooth operations across all regions. We know who to contact, how to secure the best locations, manage logistics efficiently, and negotiate fair conditions for our clients regardless of the project scope.' },
      ],
      [
        { number: '04', image: '/assets/icons/dmc.png', title: 'Hidden Gems & Secret Spots', description: 'Beyond the famous Silk Road landmarks, we have intimate knowledge of lesser-known sites, private family workshops, remote villages, and exclusive locations that add unique value to any itinerary. These hidden gems differentiate our programs from standard offerings.' },
        { number: '05', image: '/assets/icons/dmc.png', title: 'Seasonal Intelligence', description: 'We understand how Uzbekistan changes through the seasons. From the best times to visit specific regions to weather contingencies and seasonal festivals, our expertise ensures optimal timing and preparation for every program throughout the year.' },
        { number: '06', image: '/assets/icons/dmc.png', title: 'Regulatory & Permit Expertise', description: 'Navigating local regulations, filming permits, special access authorizations, and event licenses requires deep institutional knowledge. Our team handles all bureaucratic requirements efficiently, ensuring compliance without delays.' },
      ],
      [
        { number: '07', image: '/assets/icons/dmc.png', title: 'Authentic Local Connections', description: 'We maintain direct relationships with local communities, artisans, musicians, and historians. These connections allow us to arrange genuine cultural exchanges, private demonstrations, and immersive experiences that are not available through standard channels.' },
        { number: '08', image: '/assets/icons/dmc.png', title: 'Sustainable Destination Practices', description: 'Our expertise includes responsible tourism practices that protect cultural heritage and natural environments. We advise partners on sustainable options, support local economies through ethical supplier selection, and promote low-impact travel experiences.' },
        { number: '09', image: '/assets/icons/dmc.png', title: 'Heritage Preservation Focus', description: 'We actively contribute to the preservation of Uzbekistan cultural heritage by supporting restoration projects, promoting traditional crafts, and educating travelers. Our programs often include visits to conservation initiatives and interactions with heritage guardians.' },
      ],
      [
        { number: '10', image: '/assets/icons/dmc.png', title: 'Multi-Destination Coordination', description: 'Our expertise extends beyond Uzbekistan to Central Asia and the Caucasus. We seamlessly coordinate multi-country itineraries, managing cross-border logistics, different regulatory environments, and diverse cultural contexts within a single cohesive program.' },
        { number: '11', image: '/assets/icons/dmc.png', title: 'Risk Assessment & Management', description: 'Deep destination knowledge allows us to identify and mitigate risks before they impact travelers. From health considerations and security updates to political sensitivities and infrastructure changes, we maintain comprehensive situational awareness.' },
        { number: '12', image: '/assets/icons/dmc.png', title: 'Insider Access & Privileges', description: 'Long-standing relationships with venue owners, cultural institutions, and local officials often grant our clients exclusive access. Private after-hours museum tours, meetings with master craftsmen, and dinners in historic homes are examples of the privileged experiences our expertise unlocks.' },
      ],
    ],
  },
];

const currentCategory = ref(0);
const currentPage = ref(1);

const totalCategories = categories.length;
const totalPages = computed(() => categories[currentCategory.value].pages.length);

const currentCategoryData = computed(() => categories[currentCategory.value]);
const currentItems = computed(() => currentCategoryData.value.pages[currentPage.value - 1]);

const prevCategory = () => {
  if (currentCategory.value > 0) {
    currentCategory.value--;
    currentPage.value = 1;
  }
};

const nextCategory = () => {
  if (currentCategory.value < totalCategories - 1) {
    currentCategory.value++;
    currentPage.value = 1;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => goToPage(currentPage.value + 1);
const prevPage = () => goToPage(currentPage.value - 1);

// Генерация массива страниц для отображения (с ...)
const displayedPages = computed(() => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= totalPages.value; i++) {
    if (i === 1 || i === totalPages.value || (i >= currentPage.value - delta && i <= currentPage.value + delta)) {
      range.push(i);
    }
  }

  range.forEach((i, pos) => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  });

  return rangeWithDots;
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Hero -->
    <section class="relative">
      <div class="hero-section">
        <div class="hero-image" />
      </div>
    </section>

    <AppContainer>
      <!-- Шапка со стрелками -->
      <div class="relative mb-[20px] lg:mb-[40px]">
        <!-- Левая стрелка -->
        <button
          @click="prevCategory"
          :disabled="currentCategory === 0"
          class="absolute flex left-[-30px] top-[10%] lg:top-[55%] -translate-y-1/2 lg:flex w-[44px] h-[44px] rounded-full border border-[#000] items-center justify-center hover:border-[#285aff] hover:text-[#285aff] disabled:opacity-30 disabled:cursor-not-allowed transition z-10 bg-transparent lg:bg-white cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Центр: крошки + заголовок + описание -->
        <div class="text-center mx-auto px-0 lg:px-16">
          <!-- Breadcrumbs (переведены) -->
          <nav class="mb-[10px] sm:mb-[15px] hidden lg:flex" aria-label="Breadcrumb">
            <ol class="flex items-center justify-center gap-2 text-[11px] sm:text-[12px] lg:text-[14px] text-[#000] flex-wrap">
              <li v-for="(crumb, i) in breadcrumbs" :key="i" class="flex items-center gap-2">
                <router-link v-if="crumb.path" :to="crumb.path" class="hover:text-[#285aff] transition">
                  {{ crumb.label }}
                </router-link>
                <span v-else class="text-[#888]">{{ crumb.label }}</span>
                <span v-if="i < breadcrumbs.length - 1" class="text-[#000]">
                  <svg class="w-3 h-3 transition-transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </li>
            </ol>
          </nav>

          <!-- Заголовок категории (переведен) -->
          <h1 class="text-[32px] sm:text-[42px] lg:text-[54px] font-normal text-black mb-[15px] leading-tight">
            {{ t(`whyWe.categories.${currentCategory}.title`) }}
          </h1>
          <!-- Описание категории (переведено) -->
          <p class="text-[13px] sm:text-[14px] lg:text-[15px] text-black leading-relaxed">
            {{ t(`whyWe.categories.${currentCategory}.description`) }}
          </p>
        </div>

        <!-- Правая стрелка -->
        <button
          @click="nextCategory"
          :disabled="currentCategory === totalCategories - 1"
          class="absolute flex right-[-30px] top-[10%] lg:top-[55%] -translate-y-1/2 lg:flex w-[44px] h-[44px] rounded-full border border-[#000] items-center justify-center hover:border-[#285aff] hover:text-[#285aff] disabled:opacity-30 disabled:cursor-not-allowed transition z-10 bg-transparent lg:bg-white cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Cards (контент НЕ переведен) -->
      <div class="mb-[40px]">
        <CardGorzontalDMC
          v-for="(item, index) in currentItems"
          :key="`${currentCategory}-${currentPage}-${index}`"
          :item="item"
          :index="index"
        />
      </div>

      <!-- Пагинация -->
      <div v-if="totalPages > 1" class="pagination">
        <button 
          class="pagination-btn" 
          :class="{ disabled: currentPage === 1 }"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <template v-for="item in displayedPages" :key="item">
          <button 
            v-if="item === '...'" 
            class="pagination-dots" 
            disabled
          >...</button>
          <button 
            v-else 
            class="pagination-btn" 
            :class="{ active: currentPage === item }"
            @click="goToPage(item)"
          >{{ item }}</button>
        </template>

        <button 
          class="pagination-btn" 
          :class="{ disabled: currentPage === totalPages }"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
}

.hero-section {
  position: relative;
  height: 447px;
  width: 100%;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 447px;
  background-image: url('/assets/icons/gorizontalDMC.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Пагинация */
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-bottom: 80px;
  flex-wrap: wrap;
}

.pagination-btn {
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #1a1a1a;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #f5f5f5;
}

.pagination-btn.active {
  background-color: #285aff;
  color: white;
}

.pagination-btn.disabled,
.pagination-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-dots {
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #888;
}

@media (max-width: 768px) {
  .hero-section,
  .hero-image {
    height: 300px;
  }
  
  .pagination {
    justify-content: center;
  }
  
  .pagination-btn {
    min-width: 32px;
    height: 32px;
    font-size: 12px;
  }
}

@media (min-width: 1440px) {
  .hero-section,
  .hero-image {
    height: 550px;
  }
}
</style>