<template>
  <main>
    <h1 v-if="sellersStore.isWinner">{{ $t('dashboard-end-carrer') }}</h1>
    <h1 v-if="!sellersStore.isWinner">{{ $t('dashboard-run-title') }}</h1>
    <h2 v-if="sellersStore.isWinner">{{ `${$t('dashboard-winner-title')} ${sellersStore.winner.name}` }}</h2>
    <sellers-score
      :sellers="sellersStore.sellers.sort((a, b) => b.observations - a.observations)"
    />
    <h1 v-if="sellersStore.isWinner">{{ $t('invoice-title') }}</h1>
    <div v-if="sellersStore.isWinner">

      <sales-invoice :invoice="sellersStore.winner?.invoice"/>
    </div>
  </main>
</template>

<script setup>
import { useSellersStore } from '@/stores/sellers'

import SellersScore from '@/components/dashboard/SellersScore.vue'
import SalesInvoice from '@/components/dashboard/SalesInvoice.vue'
const sellersStore = useSellersStore()

</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  position: relative;
  font-family: var(--title-font);
  font-weight: 400;
  color: var(--text-color);
  font-size: 80px;
}

h2 {
  font-family: var(--title-font);
  font-weight: 400;
  color: var(--text-color);
  font-size: 50px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 70px;
    text-align: center;
  }

  h2 {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 50px;
    text-align: center;
  }

  h2 {
    font-size: 25px;
  }
}
</style>
