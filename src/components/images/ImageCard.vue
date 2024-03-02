<template>
    <div class="card-wrapper">
        <span> {{ props.sellerName }} </span>
        <img :src="props.imageUrl" alt="There is no image to show">
        <div class="button-wrapper">
            <base-button :label="$t('button-choose')" @click-submit="$emit('click-submit')" />
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/general/BaseButton.vue'

const props = defineProps({
    sellerName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>

</style>