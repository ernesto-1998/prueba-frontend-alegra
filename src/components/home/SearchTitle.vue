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
h1 {
  position: relative;
  font-family: var(--title-font);
  font-weight: 400;
  color: var(--text-color);
  font-size: 80px;
}

h1::before {
  content: '';
  background-color: var(--text-color);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 3px;
  transition: 0.2s ease-in-out;
}

h1:hover::before {
  width: 100%;
}

h1::after {
  content: '✍️';
  margin-left: 10px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 50px;
    text-align: center;
  }
}
</style>
