<template>
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Savat</h5>
        <div v-if="cart.length">
          <ul class="list-group mb-3">
            <li v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between">
              <span>{{ item.title }} ({{ item.quantity }})</span>
              <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
            </li>
          </ul>
          <button @click="placeOrder" class="btn btn-success">Buyurtma berish</button>
        </div>
        <p v-else class="card-text">Savat bo'sh</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useShop } from '../shop'
  
  const store = useShop()
  const cart = computed(() => store.cart)
  
  const placeOrder = () => {
    alert('Buyurtma muvaffaqiyatli berildi!')
    store.cart = []
  }
  </script>