import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useSellersStore = defineStore('sellers', {
  state: () => ({
    sellers: null,
  }),
  getters: {
    areSellersActive: (state) => state.sellers !== null,
  },
  actions: {
    async setSellers() {
      try {
          const sellers = await fetchWrapper.get(`${VITE_APP_ALEGRA_SERVER}/sellers`);
          this.sellers = [...sellers];
      } catch (error) {
          console.log(error)
      }
    },
    async setSellerPoints(id, observations) {
      if(this.areSellersActive) {
          try {
            await fetchWrapper.put(`${VITE_APP_ALEGRA_SERVER}/sellers/${id}`, {observations});
            await this.setSellers();
          } catch (error) {
                console.log(error)
          }
      }
    },
  }
})
