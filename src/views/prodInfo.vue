<template>
  <div class="container my-4">
    <router-link to="/" class="btn btn-link mb-3">Назад</router-link>
    <router-link to="/cart" class="btn btn-primary mb-3 ms-2">Корзина</router-link>
    <div v-if="product" class="card">
      <div class="card-body">
        <h1 class="card-title">{{ product.title }}</h1>
        <p class="card-text">Цена: ${{ product.price }}</p>
        <p class="card-text">Категория: {{ product.category }}</p>
        <p class="card-text">Описание: {{ product.description }}</p>
        <button @click="addToCart" class="btn btn-success">Добавить в корзину</button>
      </div>
    </div>
    <div v-else class="alert alert-info">Загрузка...</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useShop } from '../shop'

const route = useRoute()
const store = useShop()
const product = computed(() => store.products.find((p) => p.id === Number(route.params.id)))

const addToCart = () => {
  if (product.value) store.addToCart(product.value)
}
</script>