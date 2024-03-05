import { defineStore } from 'pinia'
import fetchWrapper from '@/helpers/fetch.wrapper'

const { VITE_APP_ALEGRA_SERVER } = import.meta.env

export const useInvoiceStore = defineStore('invoice', {
  state: () => ({
    invoice: null
  }),
  getters: {
    isInvoiceActive: (state) => state.invoice !== null
  },
  actions: {
    validateInvoice(sellerId, invoices) {
      const invoice = invoices.find(invoice => invoice.seller.id === sellerId)
      this.invoice = invoice ? invoice : null
    },
    async getInvoices() {
      try {
        const invoices = await fetchWrapper.get(`${VITE_APP_ALEGRA_SERVER}/invoices`)
        return invoices
      } catch (error) {
        console.log(error)
      }
    },
    async createInvoice(winner, totalPoints) {
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
            quantity: totalPoints,
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
    }
  }
})
