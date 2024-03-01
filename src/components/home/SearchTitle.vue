<template>
  <h1 class="search-title">
    {{ props.text }}
  </h1>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.search-title {
  position: relative;
  font-family: var(--text-font);
  color: var(--text-color);
  font-size: 65px;
  transition: 0.3s ease-in;
}

.search-title:hover::before {
  content: '';
  background-color: var(--text-color);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
}
</style>
