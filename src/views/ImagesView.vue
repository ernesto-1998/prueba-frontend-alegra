<template>
  <main>
    <div class="body-loader" v-if="isLoading">
      <img src="/gif/loader1.gif" alt="" />
    </div>
    <div class="body-wrapper" v-else>
      <div class="images-found" v-if="areImages">
        <h1>{{ `${$t('images-home-title')} "${route.params.key}"` }}</h1>
        <ul class="cards-body">
          <li v-for="item in data" :key="item.id" :class="{ 'card-choosed': isChoosed }">
            <image-card
              :is-loading="isLoadingButton"
              :seller-name="item.name"
              :image-url="item.image"
              @click-submit="voteCard(item.id, item.observations)"
            />
          </li>
        </ul>
      </div>
      <div class="not-found" v-else>
        <h1>{{ `${$t('images-not-found')} "${route.params.key}"` }}</h1>
        <base-button :label="$t('button-return')" @click-submit="sendHome" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useSellersStore } from '@/stores/sellers'
import fetchImages from '@/helpers/image.api'

import ImageCard from '@/components/images/ImageCard.vue'
import BaseButton from '@/components/general/BaseButton.vue'

const sellersStore = useSellersStore()
const route = useRoute()
const router = useRouter()

const data = ref([])
let isLoading = ref(true)
let isLoadingButton = ref(false)
const areImages = ref(false)
let isChoosed = ref(false)

onBeforeMount(async () => {
  await sellersStore.setSellers()
  if (sellersStore.sellersLength) {
    // Pixabay api only accept a minimun of 3 pagination images, so sellersLength must be higher than 2
    const res = await fetchImages(
      route.params.key,
      sellersStore.sellersLength < 3 ? 3 : sellersStore.sellersLength
    )
    if (res['hits'].length === 0) {
      isLoading.value = false
      areImages.value = false
    } else {
      areImages.value = true
      const imagesUrl = res['hits'].map((obj) => obj['largeImageURL'])
      sellersStore.sellers.forEach((seller, index) => {
        data.value.push({ ...seller, image: imagesUrl[index] })
      })
      isLoading.value = false
    }
  } else {
    alert('no hay vendedores')
  }
})

const voteCard = async (id, observations) => {
  isLoadingButton.value = true
  await sellersStore.setSellerPoints(id, Number.parseInt(observations) + 3)
  sellersStore.setWinner()
  router.push({ name: 'home' })
}

const sendHome = () => router.push({ name: 'home' })
</script>

<style scoped>
main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  padding-left: 20px;
  padding-right: 20px;
}

.body-loader img {
  width: 400px;
}

h1 {
  font-family: var(--title-font);
}

.body-wrapper {
  width: 100%;
}

.cards-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 15px;
  /* backdrop-filter: blur(5px); */
}

.cards-body li {
  transition: 0.2s ease-in-out;
}

.cards-body li:hover {
  transform: translateY(-10px);
}

.not-found {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 25px;
  border-radius: 16px;
  background-color: var(--second-color);
}
</style>
