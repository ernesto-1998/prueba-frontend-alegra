<template>
    <main>
      <h1>{{ $t('404-not-found') }}</h1>
      <img src="/404.svg" alt="">
    </main>
  </template>
  
  <script setup></script>
  
  <style scoped>
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
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

  img {
    width: 400px;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
      text-align: center;
    }
  }
  </style>
  