<template>
  <ul class="sellers-wrapper">
    <li v-for="(seller, index) in props.sellers" :key="seller.id">
      <seller-name :seller-name="seller.name" :size="'md'"/>
      <div class="seller-score">
        {{ `${seller.observations} /20` }}
      </div>
      <span class="index-score">{{ index + 1 }}</span>
    </li>
  </ul>
</template>

<script setup>
import SellerName from "@/components/general/SellerName.vue"

const props = defineProps({
  sellers: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.sellers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 16px;
  font-family: var(--text-font);
  background-color: var(--second-color);
  color: var(--text-color);
}

.sellers-wrapper li {
  position: relative;
  width: 200px;
  background-color: var(--third-color);
  padding: 10px 15px;
  border-radius: 16px;
}

.seller-score {
  font-family: var(--main-title-font);
  font-size: 25px;
}

.index-score {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--title-font);
  font-size: 25px;
  position: absolute;
  top: -8%;
  left: -7%;
  width: 30px;
  height: 30px;
  background-color: var(--main-color);
  border-radius: 50px;
}
</style>
