<template>
  <ul class="sellers-wrapper">
    <li v-for="seller in props.sellers" :key="seller.id">
      <seller-name :seller-name="seller.name" :size="'md'"/>
      <div class="seller-score">
        {{ `${seller.observations} /20` }}
      </div>
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
  /* width: 220px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 16px;
  font-family: var(--text-font);
  background-color: var(--second-color);
  color: var(--text-color);
}

.sellers-wrapper li {
  width: 200px;
  background-color: var(--third-color);
  padding: 10px 15px;
  border-radius: 16px;
}

.seller-score {
  font-family: var(--main-title-font);
  font-size: 25px;
}
</style>
