<template>
  <main>
    <h1>{{ `${$t('images-home-title')} "${route.params.key}"` }}</h1>
    <div class="body-wrapper">
      
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useSellersStore } from '@/stores/sellers';
import fetchImages from '@/helpers/image.api';

import ImageCard from '@/components/images/ImageCard.vue';

const sellersStore = useSellersStore()
const route = useRoute();

const data = ref([])

onBeforeMount(async () => {
  await sellersStore.setSellers()
  if(sellersStore.sellersLength) {
    const res = await fetchImages(route.params.key, sellersStore.sellersLength)
  const imagesUrl = res["hits"].map(obj => obj["largeImageURL"])
  data.value = sellersStore.sellers.map()
  } else {
    alert("no hay vendedores")
  }
})

</script>

<style scoped>
main {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
}

h1 {
  font-family: var(--title-font);
}

.body-wrapper {
  background-color: var(--main-color);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
