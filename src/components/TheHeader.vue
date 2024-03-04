<template>
  <header>
    <div class="logo">
      <base-icon :size="40" :icon-name="'logo'" />
      <span> Imagenes del Mundo </span>
    </div>
    <div class="buttons-wrapper">
      <base-button :label="labelButton" @click-submit="sendDashboard"/>
      <select v-model="selectValue" @change="() => ($i18n.locale = selectValue.toLowerCase())">
        <option>ES</option>
        <option>EN</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'; 
import { useI18n } from 'vue-i18n'; 

import BaseButton from './general/BaseButton.vue';
import BaseIcon from './icons/BaseIcon.vue'

const i18n = useI18n() 
const router = useRouter()
const route = useRoute()
let selectValue = ref('ES')
const labelButton = ref(null)

onBeforeMount(() => {
  if(route.name === "dashboard") {
    labelButton.value = i18n.t('button-home')
  } else {
    labelButton.value = i18n.t('button-dashboard')
  }
})

watch(() => route.name, () => {
  if(route.name === "dashboard") {
    labelButton.value = i18n.t('button-home')
  } else {
    labelButton.value = i18n.t('button-dashboard')
  }
})

const sendDashboard = () => {
  if(route.name === "dashboard") {
    router.push({ name: 'home' })
  } else {
    router.push({ name: 'dashboard' })
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  font-family: var(--main-title-font);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  padding: 15px 20px;

  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.75);
}

.logo {
  display: flex;
  align-items: center;
  color: var(--text-color);
  gap: 15px;
}

.buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

select {
  padding: 5px;
}

</style>
