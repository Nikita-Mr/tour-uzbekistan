import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AppMain.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/directions',
      name: 'directions',
      component: () => import('@/views/DirectionsPage.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesPage.vue'),
    },
    {
      path: '/why-we',
      name: 'whyWe',
      component: () => import('@/views/WhyWePage.vue'),
    },
    {
      path: '/tours',
      name: 'tours',
      component: () => import('@/views/ToursPage.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsPage.vue'),
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('@/views/NewsDetail.vue'),
    },
    {
      path: '/tours/:id',
      name: 'ToursDetail',
      component: () => import('@/views/OpenCard.vue'),
    },
    {
      path: '/services/:id',
      name: 'ServicesDetail',
      component: () => import('@/views/ServicesDetail.vue'),
    },
    {
      path: '/booking/:id',
      name: 'Booking',
      component: () => import('@/views/BookingPage.vue'),
    },
    {
      path: '/for-agent',
      name: 'for-agent',
      component: () => import('@/views/ForAgentPage.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterPage.vue'),
    },
    // Для стран (динамический маршрут)
    {
      path: '/countries/:country',
      name: 'country',
      component: () => import('@/views/CountryPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'maintenance',
      component: () => import('@/views/TechnicalWorkPage.vue'),
    },
  ],
});

export default router;
