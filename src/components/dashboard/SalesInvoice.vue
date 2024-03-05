<template>
    <div class="invoice-wrapper" v-if="isShow">
        <h3>{{ props.invoice.client.name }}</h3>
        <p>Date: <span>{{ props.invoice.date }}</span></p>
    </div>
</template>

<script setup>
const props = defineProps({
    invoice: {
        type: Object,
        required: true,
    },
    isShow: {
        type: Boolean,
        default: false,
    }
})
</script>

<style scoped>
.invoice-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    font-family: var(--text-font);
    color: var(--text-color);
    background-color: var(--main-color);
}
</style>