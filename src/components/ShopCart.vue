<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">Цена: ${{ product.price }}</p>
      <p class="card-text">Категория: {{ product.category }}</p>
      <router-link :to="`/product/${product.id}`" class="btn btn-primary me-2">Подробнее</router-link>
      <button @click="addToCart" class="btn btn-success">Добавить в корзину</button>
    </div>
  </div>
</template>

<script setup>
import { useShop } from '../shop'

const props = defineProps(['product'])
const store = useShop()

const addToCart = () => {
  store.addToCart(props.product)
}
</script>