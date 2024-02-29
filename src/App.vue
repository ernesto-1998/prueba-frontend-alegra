<template>
    <div>
        <router-view />
    </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useSellersStore } from "@/stores/sellers"

const sellersStore = useSellersStore()

onBeforeMount(async () => {
    await sellersStore.setSellers()
})
</script>

<style scoped>

</style>