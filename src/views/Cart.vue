<template>
  <div class="container my-4">
    <router-link to="/" class="btn btn-link mb-3">Назал</router-link>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Корзина</h5>
        <div v-if="cart.length">
          <ul class="list-group mb-3">
            <li v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between">
              <span>{{ item.title }} ({{ item.quantity }})</span>
              <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
            </li>
          </ul>
          <button @click="placeOrder" class="btn btn-success">Заказать</button>
        </div>
        <p v-else class="card-text">Корзина пустой</p>
      </div>
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