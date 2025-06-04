import { defineStore } from 'pinia'

export const useShop = defineStore('main', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Laptop Pro',
        price: '999.99',
        category: 'Electronics',
        description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
      },
      {
        id: 2,
        title: 'Smartphone X',
        price: '699.99',
        category: 'Electronics',
        description: 'Latest smartphone with 128GB storage and 48MP camera.',
      },
      {
        id: 3,
        title: 'Cotton T-Shirt',
        price: '29.99',
        category: 'Clothing',
        description: 'Comfortable cotton t-shirt available in multiple colors.',
      },
      {
        id: 4,
        title: 'Running Shoes',
        price: '89.99',
        category: 'Clothing',
        description: 'Lightweight running shoes with excellent grip.',
      },
      {
        id: 5,
        title: 'Apple MacBook Air',
        price: '1199.99',
        category: 'Electronics',
        description: 'Ultra-thin and lightweight laptop with M1 chip.',
      },
      {
        id: 6,
        title: 'Lenovo Legion 5',
        price: '1199.99',
        category: 'Electronics',
        description: 'Powerful gaming laptop with NVIDIA GeForce GTX 1660 Ti.',
      },
      {
        id: 7,
        title: 'iPhone 13 Pro',
        price: '1199.99',
        category: 'Electronics',
        description: 'Latest iPhone with A15 Bionic chip and ProMotion display.',
      },
      {
        id: 8,
        title: 'Samsung Galaxy S24 Ultra',
        price: '1299.99',
        category: 'Electronics',
        description: 'Flagship smartphone with 200MP camera and S Pen support.',
      },
    ],
    cart: [],
    filters: {
      category: '',
      price: '',
      name: '',
    },
  }),
  actions: {
    addToCart(product) {
      const exists = this.cart.find((item) => item.id === product.id)
      if (!exists) {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    updateFilters({ category, price, name }) {
      this.filters = { category, price, name }
    },
  },
  getters: {
    filteredProducts(state) {
      return state.products.filter((product) => {
        return (
          (!state.filters.category || product.category === state.filters.category) &&
          (!state.filters.price || product.price <= state.filters.price) &&
          (!state.filters.name || product.title.toLowerCase().includes(state.filters.name.toLowerCase()))
        )
      })
    },
  },
})