<template>
  <button :class="`${size}-size`" :disabled="props.isLoading" @click="$emit('clickSubmit')">
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
  },
  size: {
    type: String,
    default: "md",
  }
})
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  background-color: var(--third-color);
  font-family: var(--text-font);
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

.md-size {
  padding: 10px 25px;
  font-size: 20px;
}

.sm-size {
  padding: 5px 15px;
  font-size: 18px;
}
</style>
