<template>
    <div class="invoice-wrapper">
        <h2> Imagenes del Mundo </h2>
        <p>{{ `${$t('invoice-client')}: ${props.invoice?.client?.name}` }}</p>
        <p>{{ `${$t('invoice-date')}: ${props.invoice?.date}` }}</p>
        <p> {{ `${$t('invoice-seller')}: ${props.invoice.seller?.name}` }} </p>
        <p> {{ `${$t('invoice-product')}:` }} </p>
        <table class="item-wrapper">
            <thead>
                <tr>
                    <th>{{ $t('invoice-table-name') }}</th>
                    <th>{{ $t('invoice-table-price') }}</th>
                    <th>{{ $t('invoice-table-quantity') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ props.invoice?.items[0]?.name }}</td>
                    <td>{{ `$${props.invoice?.items[0]?.price}` }}</td>
                    <td>{{ props.invoice?.items[0]?.quantity }}</td>
                </tr>
            </tbody>
        </table>
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
    min-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    border-radius: 16px;
    font-family: var(--text-font);
    color: var(--text-color);
    background-color: var(--second-color);
}

h2 {
    text-align: center;
}

table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: var(--third-color);
    }

@media (max-width: 768px) {
    .invoice-wrapper {
        min-width: 100%;
    }
}
</style>