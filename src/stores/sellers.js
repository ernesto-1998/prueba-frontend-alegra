import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'
import validateInteger from '@/utils/validate.integer'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useSellersStore = defineStore('sellers', {
  state: () => ({
    sellers: [],
    winner: null
  }),
  getters: {
    areSellersActive: (state) => state.sellers.length > 1,
    sellersLength: (state) => state.sellers.length,
    isWinner: (state) => state.winner !== null,
    totalPoints: (state) => state.sellers.reduce((counter, seller) => {
      return counter + Number.parseInt(seller.observations)
    }, 0)
  },
  actions: {
    async setWinner() {
      let win = this.sellers.find(seller => seller.observations >= 20)
      this.winner = win
      if(win && !this.isWinner) {
        console.log(this.winner, this.isWinner)
        // this.winner["invoice"] = await this.createInvoice(win)
      } else if (!win) {
        this.winner = null;
      }
    },
    async createInvoice(winner) {
      const date = new Date();

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day}`;
      try {
        const invoice = await fetchWrapper.post(`${VITE_APP_ALEGRA_SERVER}/invoices`, { 
          items: [{
            id: 1,
            name: "image",
            price: 0,
            quantity: this.totalPoints,
          }],
          client: 1,
          dueDate: formattedDate,
          date: formattedDate,
          seller: winner.id,
         })
         return invoice
      } catch (error) {
        console.log(error)
      }
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
