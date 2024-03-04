<template>
  <main>
    <h1>{{ $t('sellers-not-found') }}</h1>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: var(--title-font);
  font-weight: 400;
  color: var(--text-color);
  font-size: 80px;
  background-color: var(--second-color);
  padding: 5px 25px;
  border-radius: 16px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 50px;
    text-align: center;
  }
}
</style>
