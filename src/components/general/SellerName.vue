<template>
    <p class="seller-name" :class="`${size}-size`">
        {{ props.sellerName }}
    </p>
</template>

<script setup>
const props = defineProps({
    sellerName: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: "sm",
    }
})
</script>

<style scoped>
.seller-name {
    max-width: 100%;
  text-overflow: ellipsis; 
    display: inline-block; 
    white-space: nowrap; 
    overflow: hidden; 
}

.md-size {
  font-size: 20px;
}

.sm-size {
  font-size: 17px;
}
</style>