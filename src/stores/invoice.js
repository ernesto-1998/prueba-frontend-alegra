import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useInvoiceStore = defineStore('invoice', {
  state: () => ({
    invoice: null,
  }),
  getters: {
    isInvoiceActive: (state) => state.invoice !== null,
  },
  actions: {
    async createInvoice() {
      try {
          const sellers = await fetchWrapper.get(`${VITE_APP_ALEGRA_SERVER}/sellers`);
          this.sellers = [...sellers];
      } catch (error) {
          console.log(error)
      }
    },
  }
})