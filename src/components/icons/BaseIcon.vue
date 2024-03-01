<template>
  <component :is="iconComponent" :size="props.size" :color="props.color" />
</template>

<script setup>
import { computed } from 'vue'

import { store } from './icon.store.js'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'black'
  }
})

const iconComponent = computed(() => {
  return store[props.iconName] || null
})
</script>
