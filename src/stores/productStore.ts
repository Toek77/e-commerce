import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),

  actions: {
    async loadData() {
      const [groups, promos, cats, products] = await Promise.all([
        axios.get('http://localhost:3000/api/groups'),
        axios.get('http://localhost:3000/api/promotions'),
        axios.get('http://localhost:3000/api/categories'),
        axios.get('http://localhost:3000/api/products')
      ])

      this.groups = groups.data
      this.promotions = promos.data
      this.categories = cats.data
      this.products = products.data
    }
  }
})
