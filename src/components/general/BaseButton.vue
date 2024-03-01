<template>
  <button @click="$emit('clickSubmit')">
    {{ props.label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Search'
  }
})
</script>

<style scoped>
button {
  padding: 10px 25px;
  margin: 0 auto;
  background-color: var(--third-color);
  font-family: var(--title-font);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  border: none;
  border-radius: 50px;
  transition: 0.2s ease;
}

button:hover {
  cursor: pointer;
  background-color: var(--last-color);
}
</style>
