import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'
import validateInteger from '@/utils/validate.integer'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useSellersStore = defineStore('sellers', {
  state: () => ({
    sellers: []
  }),
  getters: {
    areSellersActive: (state) => state.sellers.length > 0,
    sellersLength: (state) => state.sellers.length
  },
  actions: {
    async setSellers() {
      try {
        const sellers = await fetchWrapper.get(`${VITE_APP_ALEGRA_SERVER}/sellers`)
        if (sellers.length === 0) {
          this.sellers = []
        } else {
          sellers.forEach((seller) => {
            if (!validateInteger(seller?.observations)) {
              seller['observations'] = 0
            }
          })
          this.sellers = [...sellers]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async setSellerPoints(id, observations) {
      if (this.areSellersActive) {
        try {
          await fetchWrapper.put(`${VITE_APP_ALEGRA_SERVER}/sellers/${id}`, { observations })
          await this.setSellers()
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
})
