import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'
import validateInteger from '@/utils/validate.integer'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useSellersStore = defineStore('sellers', {
  state: () => ({
    sellers: [],
    winner: null,
  }),
  getters: {
    areSellersActive: (state) => state.sellers.length > 1,
    sellersLength: (state) => state.sellers.length,
    isWinner: (state) => state.winner !== null,
  },
  actions: {
    setWinner() {
      this.sellers.forEach(seller => {
        if(seller?.observations >= 20) {
          this.winner = {...seller}
        }
      })
    },
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
          this.setWinner()
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
