<template>
  <div class="container-form">
    <form onsubmit="event.preventDefault()">
      <div class="input-wrapper">
        <i class="bx bx-search-alt bx-sm"></i>
        <input type="text" placeholder="Animales, carros, naturaleza..." v-model="inputValue" />
      </div>
      <base-button :label="'Enviar'" @click-submit="sendValue" />
    </form>
  </div>
</template>

<script setup>
import BaseButton from '@/components/general/BaseButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

let inputValue = ref('')

const sendValue = () => {
  if(inputValue.value === '') {
    alert("Debes introducir una palabra para buscar...")
  } else {
    router.push({
      name: "images",
      params: { key: inputValue.value }
    })
  }
}
</script>

<style scoped>
.container-form {
  max-width: 600px;
  width: 100%;
  background-color: var(--second-color);
  padding: 25px 20px;
  border-radius: 16px;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper > i {
  position: absolute;
  margin-left: 5px;
}

.input-wrapper > input {
  width: 100%;
  height: 35px;
  padding-left: 35px;
  border-radius: 16px;
  border: none;
  outline: none;
  font-family: var(--text-font);
}
</style>
