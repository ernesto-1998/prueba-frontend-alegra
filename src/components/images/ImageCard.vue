<template>
  <div class="card-wrapper">
    <div class="name-wrapper">
      <span>{{ $t('card-seller') }}</span
      >:&nbsp; <p class="seller-name">{{ props.sellerName }}</p>&nbsp; <span class="seller-score"> {{ `${props.sellerScore}/20` }}</span>
    </div>
    <img :src="props.imageUrl" alt="There is no image to show" />
    <div class="button-wrapper">
      <base-button
        :is-loading="props.isLoading"
        :label="$t('button-vote')"
        @click-submit="$emit('click-submit')"
      />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/general/BaseButton.vue'

const props = defineProps({
  sellerName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  sellerScore: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.card-wrapper {
  background-color: var(--second-color);
  font-family: var(--text-font);
  font-size: 17px;
}

.name-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  background-color: var(--third-color);
}

.name-wrapper > span {
  font-family: var(--main-title-font);
  font-weight: 700;
}

.seller-name {
  text-overflow: ellipsis; 
    display: inline-block; 
    white-space: nowrap; 
    overflow: hidden; 
}

img {
  height: 300px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--second-color);
  padding-bottom: 8px;
}
</style>
