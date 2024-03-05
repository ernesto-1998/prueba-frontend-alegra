import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'
import validateInteger from '@/utils/validate.integer'

import { useInvoiceStore } from './invoice'

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
      const invoiceStore = useInvoiceStore()
      let win = this.sellers.find(seller => seller.observations >= 20)
      if(win) {
        const invoices = await invoiceStore.getInvoices()
        invoiceStore.validateInvoice(win.id, invoices)
      }
      if(win && !invoiceStore.isInvoiceActive) {
        const invoiceCreated = await invoiceStore.createInvoice(win, this.totalPoints)
        this.winner = {...win, invoice: invoiceCreated}
      } else if (win && invoiceStore.isInvoiceActive) {
        this.winner = win
        this.winner["invoice"] = invoiceStore.invoice;
      } else {
        this.winner = null
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
          await this.setWinner()
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
