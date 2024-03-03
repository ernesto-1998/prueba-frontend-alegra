<template>
  <button :disabled="props.isLoading" @click="$emit('clickSubmit')">
    <img v-if="props.isLoading" src="/gif/loader2.gif" alt="" />
    {{ props.label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Search'
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 25px;
  margin: 0 auto;
  background-color: var(--third-color);
  font-family: var(--text-font);
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

button > img {
  width: 35px;
}
</style>
