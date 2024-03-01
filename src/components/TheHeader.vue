<template>
  <header>
    <div class="logo">
      <base-icon :size="40" :icon-name="'logo'" />
      <span> Imagenes del Mundo </span>
    </div>
    <select name="" id="">
      <option value="es">es</option>
      <option value="en">en</option>
    </select>
  </header>
</template>

<script setup>
import BaseIcon from './icons/BaseIcon.vue'
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  backdrop-filter: blur(5px);
  font-family: var(--title-font);
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
  gap: 15px;
}
</style>
