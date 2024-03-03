<template>
  <main>
    <search-title :text="$t('search-home-title')" />
    <search-form />
  </main>
</template>

<script setup>
import SearchForm from '@/components/home/SearchForm.vue'
import SearchTitle from '@/components/home/SearchTitle.vue'
</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  main {
    padding: 0 15px;
  }
}
</style>
