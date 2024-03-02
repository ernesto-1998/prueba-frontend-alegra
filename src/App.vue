<template>
  <the-header />
  <div class="app-wrapper">
    <router-view v-slot="{ Component }">
    <keep-alive>
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useSellersStore } from '@/stores/sellers'

import TheHeader from './components/TheHeader.vue'

const sellersStore = useSellersStore()

onBeforeMount(async() => await sellersStore.setSellers())

</script>

<style scoped>



/* Transition */

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-to {
  position: relative;
  right: 0;
}

.slide-enter-from {
  position: relative;
  right: -100%;
}

.slide-leave-to {
  position: relative;
  left: -100%;
}

.slide-leave-from {
  position: relative;
  left: 0;
}
</style>
