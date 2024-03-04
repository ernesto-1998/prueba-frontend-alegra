<template>
    <ul class="sellers-wrapper">
        <li v-for="seller in props.sellers" :key="seller.id">
            <div class="seller-name">
                {{ seller.name }}
            </div>
            <div class="seller-score">
                {{ `${seller.observations} /20`  }}
            </div>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    sellers: {
        type: Array,
        required: true,
    }
})
</script>

<style scoped>
.sellers-wrapper {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding: 15px;
    border-radius: 16px;
    font-family: var(--text-font);
    background-color: var(--second-color);
    color: var(--text-color);
}

.sellers-wrapper li {
    background-color: var(--third-color);
    padding: 10px;
    border-radius: 16px;
}

.seller-name {
    font-size: 20px;
}

.seller-score {
    font-family: var(--main-title-font);
    font-size: 25px;
}
</style>