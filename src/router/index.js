import { createRouter, createWebHistory } from 'vue-router'
import { useSellersStore } from '@/stores/sellers'

import HomeView from '../views/HomeView.vue'
import ImagesView from '../views/ImagesView.vue'
import DashboardView from '../views/DashboardView.vue'
import NoSellersView from '../views/NoSellersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/images/:key',
      name: 'images',
      component: ImagesView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/no-sellers',
      name: 'no-sellers',
      component: NoSellersView
    }
  ]
})

router.beforeEach(async (to) => {
  const sellersStore = useSellersStore()
  await sellersStore.setSellers()
  if (!sellersStore.areSellersActive && to.name !== 'no-sellers') {
    // redirect the user to the login page
    return { name: 'no-sellers' }
  } else if (sellersStore.areSellersActive && to.name === 'no-sellers') {
    return { name: 'home' }
  } else if (sellersStore.isWinner && to.name !== 'dashboard') {
    return { name: 'dashboard' }
  }
})

export default router
