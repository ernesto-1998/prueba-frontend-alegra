<template>
    <div class="card-wrapper">
        <div class="name-wrapper"> <span>{{ $t('card-seller') }}</span>: {{ props.sellerName }} </div>
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

.card-wrapper {
    background-color: var(--second-color);
    font-family: var(--text-font);
}

.name-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-weight: 700;
    background-color: var(--third-color);
}

.name-wrapper > span {
    font-family: var(--main-title-font);
    font-weight: 700;
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